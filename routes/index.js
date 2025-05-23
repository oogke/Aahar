const express = require('express');
const router = express.Router();
const Product = require('../models/productschema');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { productList: products }); // pass to EJS
  } catch (err) {
    res.status(500).send('Error fetching products');
  }
});


module.exports = router;
