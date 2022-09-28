const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port:${port}`);
});
app.set("view engine", "pug");
app.set("View", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.status(200).render("view");
});
app.use(express.static(path.join(__dirname, "")));
