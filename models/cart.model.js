const mongoose = require('mongoose');

const CartSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please enter the product name"],
    },
    description: {
      type: String,
      required: [true, "Please enter the product description"],
    },
    unit: {
      type: String,
      required: [true, "Please enter the unit"],
    },
    unitPrice: {
      type: Number,
      required: [true, "Please enter the price per unit"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter quantity"],
      min: [1, "Quantity must be at least 1"],
    },
    amount: {
      type: Number,
      required: [true, "Please calculate and put total amount (price * quantity)"],
    },
    bestBefore: {
      type: Date,
      required: [true, "Please enter the best before date"],
    }
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
