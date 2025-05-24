const express = require('express');
const router = express.Router();
const Product = require('../models/productschema');
const Cart=require('../models/cart.model');
var Contact= require('../models/contactDetails.model');
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

router.get('/cart', async (req, res,next) => {

    res.render('cart'); 
 
});

router.post('/cartInsert', async (req, res,next) => {

    try {
    const cartProducts= await Cart.create(req.body);
     const products = await Product.find({});
    res.render('product', {products: products})
  } catch (err) {
    res.status(500).send('Error fetching products');
  }

});

router.post('/addContact', async (req, res,next) => {

    try {
    const contacts= await Contact.create(req.body);
     const products = await Product.find();
  res.render('index', { productList: products }); 
  } catch (err) {
    res.status(500).send('Error fetching products');
  }
});

module.exports = router;
