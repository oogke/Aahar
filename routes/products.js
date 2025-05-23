var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const User= require('../models/user.model');
const Product= require('../models/product.model');

router.get('/', function(req, res, next) {
    const products= Product.find();
    res.send(products);
//   res.render('product');
});


