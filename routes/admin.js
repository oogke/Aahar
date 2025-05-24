var express = require('express');
var router = express.Router();
var Product= require('../models/productschema');
var User= require('../models/user.model');
var Contact= require('../models/contactDetails.model');

router.get('/', function(req, res, next) {
  res.render('admin/admin.ejs');
});

router.get('/product', async (req, res, next)=>{
const products= await Product.find();
  res.render('admin/product.ejs',{productList:products});
});
router.post('/save', async (req, res, next)=>{
try{
  const productInsert=await Product.create(req.body);
 res.status(200).redirect("/admin");
  }catch(err){
res.status(500).json({message: err.message})
  }
  
});



router.get('/addProduct', function(req, res, next) {
  res.render('admin/addProduct.ejs');
});


router.get('/users', async (req, res) => {
  const users = await User.find();
  res.render('admin/users.ejs', { users });
});

router.get('/contactDetails',async (req,res)=>
{
  const contacts = await Contact.find();
  // res.send(contacts);
 res.render("admin/contactDetails",{contacts});

})
// router.post('/productEdit/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     // Send product data as JSON so you can populate the modal
//     res.status(200).json({
//       message: "successfully sent",
//       data: product
//     });

//   } catch (error) {
//     console.error("Edit fetch error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });


// ✅ DELETE product (used in delete modal)
router.post('/productDelete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Delete failed" });
  }
});


module.exports = router;
