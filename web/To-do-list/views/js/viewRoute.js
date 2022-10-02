const express = require("express");
const app = express();
const path = require("path");
const schema = require("../../UserSchema");
const port = 4000;
const auth = require("../../authcontroller");
const bodyParser = require("body-parser");
const axios = require("axios");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug"); //specify file type
app.set("View", path.join(__dirname, "views")); //connect to folder
app.use(
  express.static(
    path.join("/Users/andrew/Desktop/andrew/side-project/web/To-do-list/views")
  )
);
console.log(__dirname);
app.get("/login", (req, res) => {
  res.status(200).render("login");
});
/*
app.post("/login", async function (req, res) {
  console.log(req.body.account);
  console.log(req.body.password);
  const target = await schema.find();
});
*/
app.post("/login", auth.login);
app.listen(port, () => {
  console.log(`App running on port:${port}`);
});
