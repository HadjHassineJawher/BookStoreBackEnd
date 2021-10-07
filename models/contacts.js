const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Email: { type: String },
  Subject: { type: String },
  Message: { type: String },
});

const Contacts = mongoose.model("Contacts", ContactSchema);
module.exports = { Contacts };
