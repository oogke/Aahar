const mongoose = require('mongoose');
const Product = require('../models/productschema'); // Use correct relative path
const products = require('../resources/data'); // Use correct relative path

mongoose.connect('mongodb+srv://three:easy@cluster0.alz4tam.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  return Product.deleteMany({}); // optional: clears existing products
})
.then(() => {
  return Product.insertMany(products);
})
.then(() => {
  console.log('✅ Products inserted successfully!');
  mongoose.disconnect();
})
.catch((err) => {
  console.error('❌ Error inserting products:', err);
  mongoose.disconnect();
});
