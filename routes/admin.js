const express = require('express');
const router = express.Router();

/* GET cart page */
router.get('/', (req, res) => {
  const cart = []; // or sample items for testing
  res.render('cart', { cart });
});

module.exports = router;
