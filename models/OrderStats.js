const mongoose = require('mongoose');

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

module.exports = OrderStats;
