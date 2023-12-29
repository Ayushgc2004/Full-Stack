const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

// Load environment variables
require('dotenv').config();

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1); // Exit with failure
});

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

// Middleware
app.use(bodyParser.json());

// OrderStats model
const orderStatsSchema = new mongoose.Schema({
  totalOrders: {
    type: Number,
    default: 0 
  }
});

// Method to increment totalOrders
orderStatsSchema.methods.incrementTotalOrders = async function() {
  this.totalOrders += 1;
  await this.save();
};

const OrderStats = mongoose.model('OrderStats', orderStatsSchema);

// Routes
app.post('/routes/orderStats', async (req, res) => {
  try {
    const orderData = req.body;
    const order = new Order(orderData);
    await order.save();

    // Increment totalOrders in OrderStats
    const stats = await OrderStats.findOne();
    if (stats) {
      await stats.incrementTotalOrders();
    } else {
      const newStats = new OrderStats();
      await newStats.save();
      await newStats.incrementTotalOrders();
    }

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Failed to place order', error });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error.stack); // Log the error stack for debugging
  res.status(error.status || 500).json({
    message: error.message || 'Internal Server Error',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
