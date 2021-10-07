const express = require("express");
var router = express.Router();
var { Books } = require("../models/books");

router.get("/Books", async (req, res) => {
  try {
    const BooksList = await Books.find();
    res.send(BooksList);
  } catch (err) {
    throw err;
  }
});

router.post("/addBook", async (req, res) => {
  try {
    var Book = new Books({
      Title: req.body.Title,
      Author: req.body.Author,
      Image: req.body.Image,
      Price: req.body.Price,
    });
    const newBook = await Book.save();
    res.send(newBook);
  } catch (err) {
    throw err;
  }
});

router.delete("/deleteBook/:id", async (req, res) => {
  try {
    const deletedBook = await Books.findByIdAndRemove(req.params.id);
    res.send(deletedBook);
  } catch (err) {
    throw err;
  }
});

router.patch("/updateBook/:id", async (req, res) => {
  try {
    var neweBookInfo = {
      Title: req.body.Title,
      Author: req.body.Author,
      Image: req.body.Image,
      Price: req.body.Price,
    };

    const updatedBook = await Books.findByIdAndUpdate(
      req.params.id,
      { $set: neweBookInfo },
      { new: true }
    );

    res.send(updatedBook);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
