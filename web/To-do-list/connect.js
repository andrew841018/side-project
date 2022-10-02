const jwt = require("jsonwebtoken");
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
  /*res.status(statusCode).json({
    status: "success",
    user: usr,
  });*/
  res.status(200).render("To-do-list");
};
