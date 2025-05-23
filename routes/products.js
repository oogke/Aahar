var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const User= require('../models/user.model');

router.get('/', function(req, res, next) {
  res.render('product');
});

