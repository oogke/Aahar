const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.model.js'); // Your mongoose schema file for contacts

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render('contacts', { title: 'Contact List', contacts });
  } catch (error) {
    res.status(500).send('Error loading contacts');
  }
});

// Show contact form
router.get('/add', (req, res) => {
  res.render('addContact', { title: 'Add Contact' });
});

// Save new contact from form submission
router.post('/save', async (req, res) => {
  try {
    await Contact.create(req.body);
    res.redirect('/contact');  // redirect to contact list or homepage
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Show edit contact form
router.get('/edit/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).send('Contact not found');
    res.render('editContact', { title: 'Edit Contact', contact });
  } catch (error) {
    res.status(500).send('Error loading contact');
  }
});

// Save edited contact
router.post('/saveEdited/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.redirect('/contact');
  } catch (error) {
    res.status(500).send('Error updating contact');
  }
});

// Delete contact
router.get('/delete/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.redirect('/contact');
  } catch (error) {
    res.status(500).send('Error deleting contact');
  }
});

module.exports = router;
