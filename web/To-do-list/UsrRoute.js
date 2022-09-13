const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const catchAsync = require("./catchAsync");
const router = express.Router();
dotenv.config({ path: "./config.env" });
const db = process.env.DATABASE.replace(
  "<password>",
  process.env.MONGODB_PASSWD
);
mongoose.connect(db).then(console.log(`success`));
const schema = new mongoose.Schema({
  account: {
    type: String,
    required: [true, "Please enter correct account"],
    minlength: 5,
  },
  password: {
    type: String,
    required: [true, "Please enter your correct password"],
    minlength: 8,
  },
});
const Usr = mongoose.model("usr", schema);
exports.signUp = catchAsync(async (req, res, next) => {
  const usr = await Usr.create({
    account: req.body.account,
    password: req.body.password,
  });
});
