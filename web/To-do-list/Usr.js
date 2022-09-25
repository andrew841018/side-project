const catchAsync = require("./Error/catchAsync");
const AppError = require("./Error/AppError");
const bcrypt = require("bcryptjs");
const Usr = require("./UserSchema");
const server = require("./server");
exports.signUp = catchAsync(async (req, res, next) => {
  const usr = await Usr.create({
    account: req.body.account,
    password: req.body.password,
  });
  server.sendToClient(usr, 201, res);
});
exports.login = catchAsync(async (req, res, next) => {
  let { account, password } = req.body;
  //check account/password exist
  if (!account || !password)
    return next(new AppError(`Please fill account and password!`, 400));
  //check user exist and password is correct
  const user = await Usr.findOne({ account }).select("+password");
  if (!user || !(await bcrypt.compare(password, user.password)))
    return next(new AppError(`Incorrect account or password`, 401));
  user.generateToken();
  server.sendToClient(user, 200, res);
});
exports.getData = (req, res, next) => {
  req.params.id = req.usr._id;
  next();
};
