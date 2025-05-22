const mongoose = require('mongoose');

const ContactDSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Please enter the email"],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email"
    ]
  },
  phoneNo: {
    type: String, // Changed from Number to String (see reason below)
    required: [true, "Please enter the Phone Number"],
    match: [/^[0-9]{7,15}$/, "Please enter a valid phone number"]
  },
  address: {
    type: String,
    required: [true, "Please enter the address"],
    trim: true
  }
}, {
  timestamps: true
});

const ContactD = mongoose.model("ContactD", ContactDSchema);
module.exports = ContactD;
