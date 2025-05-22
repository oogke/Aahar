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

module.exports = router;
