const express = require('express');         // Step 1: Import express
const router = express.Router();            // Step 2: Create router instance

// GET /cart
router.get('/', (req, res) => {
  const cart = []; // Replace with actual cart logic or database query
  res.render('cart', { cart });
});

module.exports = router;                    // Step 3: Export the router
