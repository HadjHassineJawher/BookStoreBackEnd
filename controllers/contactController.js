const express = require("express");
var router = express.Router();
var { Contacts } = require("../models/contacts");

router.get("/Contacts", async (req, res) => {
  try {
    const ContactsList = await Contacts.find();
    res.send(ContactsList);
  } catch (err) {
    throw err;
  }
});

router.post("/addContact", async (req, res) => {
  try {
    var Contact = new Contacts({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      Subject: req.body.Subject,
      Message: req.body.Message,
    });
    const newContact = await Contact.save();
    res.send(newContact);
  } catch (err) {
    throw err;
  }
});

router.delete("/deleteContact/:id", async (req, res) => {
  try {
    const deletedContact = await Contacts.findByIdAndRemove(req.params.id);
    res.send(deletedContact);
  } catch (err) {
    throw err;
  }
});

router.patch("/updateContact/:id", async (req, res) => {
  try {
    var neweContactInfo = {
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      Subject: req.body.Subject,
      Message: req.body.Message,
    };

    const updatedContact = await Contacts.findByIdAndUpdate(
      req.params.id,
      { $set: neweContactInfo },
      { new: true }
    );

    res.send(updatedContact);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
