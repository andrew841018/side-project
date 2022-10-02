const AppError = require("./Error/AppError");
const { promisify } = require("util");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const catchAsync = require("./Error/catchAsync");
const usr = require("./UserSchema");
const { userInfo } = require("os");
const sendEmail = require("./email");
const { stat } = require("fs");
const connect = require("./connect");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
exports.protect = catchAsync(async function (req, res, next) {
  //Getting token and check it's there
  let token;
  if (req.cookie.jwt) {
    token = req.cookie.jwt;
    //Verification token
    //jwt.verify is decoding
    const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    //Check if user still exist
    const currUser = await usr.findById(decode._id);
    if (!currUser) return next();
    //There is a login user
    res.locals.user = currUser; //create new property in req
    return next();
  }
  next();
});
exports.forgotPassword = catchAsync(async (req, res, next) => {
  //1) Get email
  const user = await usr.findOne({ account: req.body.account });
  if (!user) {
    return next(new AppError("There is no user with emaill address.", 404));
  }
  //2) Generate random token
  const resetToken = user.createRandomToken();
  await user.save();
  //3)send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/to-do-list/resetPassword/${resetToken}`;
  const message = `forget your password? Submit this request:${resetURL}.\nIf you didn't forget your password,please ignore this email`;
  try {
    await sendEmail({
      email: user.account,
      subject: "Your password reset token(valid for 10 mins)",
      message,
    });
    res.status(200).json({
      status: "success",
      message: `Token sent to email! Token:${resetToken}`,
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    return next(
      new AppError(`There was an error sending the email. Try again later!`),
      500
    );
  }
});
exports.resetPassword = catchAsync(async (req, res, next) => {
  //1)Get user based on the token
  const hashToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await usr.findOne({
    passwordResetToken: hashToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  //2)If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError(`💥user doesn't exist`, 400));
  }
  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  //3) Log the user in, send JWT
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
});
exports.updatePassword = catchAsync(async (req, res, next) => {
  //1)Get user
  const user = await usr.findById(req.user._id).select("+password");
  //2)Check if password is correct==>user is who he said he is
  if (!(await bcrypt.compare(req.body.passwordCurrent, user.password))) {
    return next(new AppError(`password is wrong,try again...😀`, 401));
  }
  //3)update password
  user.password = req.body.password;
  await user.save();
  //4)send JWT
  const token = signToken(user._id);
  connect.sendToClient(user, 200, res);
  next();
});
exports.deleteMe = catchAsync(async (req, res, next) => {
  await usr.findByIdAndUpdate(req.user._id, { active: false });
  res.status(204).json({
    status: "success",
    data: null,
  });
});
exports.signUp = catchAsync(async (req, res, next) => {
  const Usr = await usr.create({
    account: req.body.account,
    password: req.body.password,
  });
  connect.sendToClient(Usr, 201, res);
});
exports.login = catchAsync(async (req, res, next) => {
  let { account, password } = req.body;
  //check account/password exist
  if (!account || !password)
    return next(new AppError(`Please fill account and password!`, 400));
  //check user exist and password is correct
  const Usr = await usr.findOne({ account }).select("+password");
  if (!Usr || !(await bcrypt.compare(password, Usr.password)))
    return next(new AppError(`Incorrect account or password`, 401));
  Usr.generateToken();
  connect.sendToClient(Usr, 200, res);
});
exports.getData = (req, res, next) => {
  req.params.id = req.usr._id;
  next();
};
