const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.DB_STRING.replace(
  "<db_password>",
  process.env.DB_PASSWORD
);

function connectDB() {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Connected to the Database");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { connectDB };
