const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the product name"],
    },
    description: {
      type: String,
      required: [true, "Please enter the product description"],
    },
    unitPrice: {
      type: Number,
      required: [true, "Please enter the price per kg"],
    },
    quantityAvailable: {
      type: Number,
      required: [true, "Please specify the available quantity (in kgs)"],
      min: [0, "Quantity cannot be negative"],
    },
    bestBefore: {
      type: Date,
      required: [true, "Please enter the best before date"],
    },
    createdBy: {
      type: String,
      required: [true, "Please enter the seller or farmer name"],
    },
    // imageUrl: {
    //   type: String,
    //   default: '/images/default.jpg',
    // },
    category: {
      type: String,
      required: [true, "Please specify the category"],
    }
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;