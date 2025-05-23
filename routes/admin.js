var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/admin.ejs');
});

router.get('/product', function(req, res, next) {
  res.render('admin/product.ejs');
});

router.get('/contactDetail', function(req, res, next) {
  res.render('admin/contactDetails.ejs');
});

router.get('/addProduct', function(req, res, next) {
  res.render('admin/addProduct.ejs');
});

router.get('/users', function(req, res, next) {
  res.render('admin/users.ejs');
});

module.exports = router;
