const express = require("express");
const schema = require("./UserSchema");
const authcontroller = require("./authcontroller");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const rateLimit = require("express-rate-limit");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
//secure
const limiter = rateLimit({
  //max 100 req per hour
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP,please try again in an hour!",
});
app.use(helmet());
//protect from injection attack-->by remove "$"
app.use(mongoSanitize());
//disable any html code in case it is written by hacker
app.use(xss());
app.use("/to-do-list", limiter);
app.use(bodyParser.json());
app.use("/", router);
router.post("/to-do-list/signUp", authcontroller.signUp);
router.post("/to-do-list/login", authcontroller.login);
router.patch("/to-do-list/forgotPassword", authcontroller.forgotPassword);
router.patch("/to-do-list/resetPassword/:token", authcontroller.resetPassword);
router.patch(
  "/to-do-list/updatePassword",
  authcontroller.protect,
  authcontroller.updatePassword
);
router.delete(
  "/to-do-list/deleteAccount",
  authcontroller.protect,
  authcontroller.deleteMe
);
router.get("/to-do-list/API", async function (req, res) {
  const target = await schema.find();
  res.status(200).json(target);
});
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port:${port}`);
});
//if url go wrong,then print error message
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl}`,
  });
});
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
exports.sendToClient = function (usr, statusCode, res) {
  const token = signToken(usr._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, //
  };
  res.cookie("jwt", token, cookieOptions);
  //usr.password = undefined;
  res.status(statusCode).json({
    status: "success",
    user: usr,
  });
};
module.exports = app;
