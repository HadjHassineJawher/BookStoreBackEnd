const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  Title: { type: String },
  Author: { type: String },
  Image: { type: String },
  Price: { type: String },
});

const Books = mongoose.model("Books", BookSchema);
module.exports = { Books };
