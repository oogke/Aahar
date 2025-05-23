const express = require('express');
const router = express.Router();
const Product = require('../models/productschema'); 

router.get('/', async (req, res) => {
  const keyword = req.query.keyword?.toLowerCase(); // Handle case-insensitive matching

  try {
    const product = await Product.find({
      $or: [
        { name: { $regex: keyword, $options: 'i' } },
        { category: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } },
        { createdBy: { $regex: keyword, $options: 'i' } }
      ]
    });

    console.log(keyword, product);

    return res.render('search', { 
      category: keyword,
      product: product
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
