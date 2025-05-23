const express = require('express');
const router = express.Router();
const Product = require('../models/productschema'); 

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    // res.json(products);
    res.render('product', {products: products})

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    // res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// (Optional) POST a new product
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    pricePerKg: req.body.pricePerKg,
    quantityAvailable: req.body.quantityAvailable,
    bestBefore: req.body.bestBefore,
    createdBy: req.body.createdBy,
    imageUrl: req.body.imageUrl,
    category: req.body.category
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
