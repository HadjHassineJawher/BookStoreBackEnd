const express = require("express");
const app = express();
const { mongoose } = require("./database/database");
var BookController = require("./controllers/bookController");
var ContactController = require("./controllers/contactController");
const SERVER_PORT = process.env.SERVER_PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "<center><h3>Hello Jawher <br/>You are the Best Dev Ever .. ;)</h3></center> "
  );
});

app.use("/e-book", BookController);
app.use("/e-book-contacts", ContactController);

app.listen(SERVER_PORT, () => {
  console.log(`The Server is listening on port :${SERVER_PORT}`);
});
