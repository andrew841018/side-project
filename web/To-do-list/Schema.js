const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
dotenv.config({ path: "./config.env" });

const db = process.env.DATABASE.replace(
  "<password>",
  process.env.MONGODB_PASSWD
);
mongoose.connect(db).then(console.log(`Success`));
const schema = new mongoose.Schema({
  account: {
    type: String,
    required: [true, "Please enter correct account"],
    minlength: [3, "account is too long..."],
  },
  password: {
    type: String,
    required: [true, "Please enter your correct password"],
    minlength: [8, "password is too short"],
    select: false,
  },
  passwordCurrent: {
    type: String,
    required: [true, "Please enter your correct password"],
    default: "default password change it ASAP",
    select: false,
  },
  token: {
    type: String,
    required: [true, "no token"],
    default: "please generate another token",
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});
schema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log(`password:${this.password}`);
    this.password = await bcrypt.hash(this.password, 12);
    console.log(`encrypt password:${this.password}`);
  }
  next();
});
schema.pre(/^find/, function (next) {
  this.find({ active: true });
  next();
});
schema.methods.generateToken = async function () {
  //this=req.body
  const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  this.token = token;
  await this.save();
  return token;
};
schema.methods.createRandomToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken) //將丟入字串更新＆在digest加密
    .digest("hex"); //encoding
  console.log(`🔪${this.passwordResetToken}`);
  this.passwordResetExpires = Date.now() + 10 * 60 * 10000; //ms
  return resetToken;
};
const Usr = mongoose.model("User", schema);
module.exports = Usr;
