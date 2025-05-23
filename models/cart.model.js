const mongoose=require('mongoose');
const CartSchema = mongoose.Schema(
    {
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
      required: [true, "Please enter the product unit"],
    },
    unitPrice: {
      type: Number,
      required: [true, "Please enter the product unit price"],
    },
       amount: {
      type: Number,
      required: [true,"Please calculate and put amount"],
    },
    expiringDate: {
      type: Date,
      required: [true, "Please enter the product Expiring Date"],
    }
        
  },
  {
    timestamps: true,
  }
);
const cart = mongoose.model("Cart", CartSchema);
module.exports = cart;