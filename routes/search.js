const express = require('express');
const router = express.Router();
const Product = require('../models/productschema'); 


router.get('/',(req,res)=>{
const category = req.query.keyword
console.log(category)
    return res.render('search',{
        category :category 
    })
})




module.exports = router;
