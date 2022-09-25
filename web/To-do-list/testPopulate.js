const mongoose = require("mongoose");
const dotenv = require("dotenv");
/*
dotenv.config({ path: "./config.env" });
const db = process.env.DATABASE.replace(
  "<password>",
  process.env.MONGODB_PASSWD
);
mongoose.connect(db).then(console.log(`Success`));
const Schema = mongoose.Schema;
const Usr = new Schema({
  userinfo: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "pro",
    },
  ],
});
const UsrModel = mongoose.model("usr", Usr);
const property = new Schema({
  house: Number,
  salary: Number,
});
const propertyModel = mongoose.model("pro", property);
/*propertyModel.create({
  housr: 14,
  salary: 500000,
});
const func = async function () {
  const target = await UsrModel.findById("632df93a7a2a9bd855390a1e").populate(
    "userinfo"
  );
  console.log(`${target}`);
};
func();*/
