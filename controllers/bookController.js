const express = require("express");
var router = express.Router();
var { Books } = require("../models/books");

router.get("/AllBooks", async (req, res) => {
  try {
    const BooksList = await Books.find();
    return res.send(BooksList);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
