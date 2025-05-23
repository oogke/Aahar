const express = require('express');
const router = express.Router();
const Product = require('../models/productschema');

router.get('/', async (req, res) => {
 
    res.render('login'); 
 
});

router.get('/index', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { productList: products }); 
  } catch (err) {
    res.status(500).send('Error fetching products');
  }
});

router.get('/contactDealer', async (req, res) => {

    res.render('contactDealer'); 
 
});

router.get('/cart', async (req, res) => {

    res.render('cart'); 
 
});


module.exports = router;
