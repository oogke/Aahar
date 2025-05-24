const mongoose = require('mongoose');

const ContactDSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name"],
   
  },
  email: {
    type: String,
    required: [true, "Please enter the email"],
   
  },
  phoneNo: {
    type: String, // Changed from Number to String (see reason below)
    required: [true, "Please enter the Phone Number"],
   
  },
  address: {
    type: String,
    required: [true, "Please enter the address"],
  
  }
}, {
  timestamps: true
});

const Contact = mongoose.model("Contact", ContactDSchema);
module.exports = Contact;
