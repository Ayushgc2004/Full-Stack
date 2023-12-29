const express = require('express');
const router = express.Router();
const OrderStats = require('../models/OrderStats');

// Create a new order stat
router.post('/', async (req, res) => {
  try {
    const { totalOrders } = req.body;

    const orderStat = new OrderStats({
      totalOrders: totalOrders
    });

    await orderStat.save();
    res.status(201).json(orderStat);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save order stats', error });
  }
});

// Retrieve order stats
router.get('/', async (req, res) => {
  try {
    const orderStats = await OrderStats.find();
    res.status(200).json(orderStats);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch order stats', error });
  }
});

module.exports = router;
