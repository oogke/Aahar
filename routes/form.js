var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('form');  
});

module.exports = router;




// app.post('/submit', (req, res) => {
//   const { name, email, contact, address } = req.body;
//   res.render('result', { name, email, contact, address });  // make sure views/result.ejs exists
// });

