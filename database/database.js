const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB = process.env.MONGO_DB;

mongoose
  .connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@bookstore.lqnuy.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Connection To MongoDB DataBase Succeeded");
  })
  .catch((err) => {
    console.log("Error in DataBase Connection : " + err);
  });

module.exports = mongoose;
