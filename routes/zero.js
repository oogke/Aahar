const express = require('express');
const router = express.Router();
const Product = require('../models/productschema');

router.get('/', async (req, res) => {
  try {
    // Define the cutoff date
    const cutoffDate = new Date('2025-05-05');

    // Find products with bestBefore date less than cutoffDate
    const products = await Product.find({
      bestBefore: { $lt: cutoffDate }
    });

    res.render('zero', { products: products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
