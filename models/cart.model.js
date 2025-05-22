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
      required: [true],
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
const cart = mongoose.model("Product", ProductSchema);
module.exports = product;