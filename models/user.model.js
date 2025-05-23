const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the name"],
    },
    email: {
      type: String,
      required: [true, "Please enter the email"],
    },
    phoneNo: {
      type: Number,
      required: [true, "Please enter the phone number"],
    },
    address: {
      type: String,
      required: [true, "Please enter the address"],
    },
    citizenshipCardNo: {
      type: Number,
      required: [true, "Please enter the citizenship card number"],
    },
    role:{
      type:String,
      required: [true, "Please enter the role"],
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
