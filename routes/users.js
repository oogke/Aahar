var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const User= require('../models/user.model');
// const session=require('express-session');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register',(req,res,next)=>
{
res.render("register");
});
router.get('/login',(req,res,next)=>
{
  res.render("login",{error:null});
});
router.post('/registerSave', async (req, res, next) => {
  try {
    const { name, email, address, phoneNo, citizenshipCardNo, role, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const result = await User.create({
      name,
      email,
      phoneNo,
      address,
      citizenshipCardNo,
      role,
      password: hashedPassword
    });
    res.redirect('/users/login');

  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).send('Something went wrong while registering.');
  }
});
router.post('/loginCheck', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.render('login', { error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {
  return res.render('login', { error: "Invalid password" });
}
    return res.redirect('/index'); 
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).send('Something went wrong while logging in.');
  }
});


module.exports = router;
