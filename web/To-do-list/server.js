const express = require("express");
const usr = require("./Usr");
const authcontroller = require("./authcontroller");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
app.use(bodyParser.json());
app.use("/", router);
router.post("/to-do-list/signUp", usr.signUp);
router.post("/to-do-list/login", usr.login);
router.patch("/to-do-list/forgotPassword", authcontroller.forgotPassword);
router.patch("/to-do-list/resetPassword/:token", authcontroller.resetPassword);
router.patch(
  "/to-do-list/updatePassword",
  authcontroller.protect,
  authcontroller.updatePassword
);
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
exports.sendToClient = function (usr, statusCode, res) {
  res.status(statusCode).json({
    status: "success",
    user: usr,
  });
};
module.exports = app;
