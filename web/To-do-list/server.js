const express = require("express");
const router = express.Router();
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});
app.post("/to-do-list/login", (req, res) => {
  console.log(req.params);
});
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port:${port}`);
});
