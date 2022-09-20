const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.MONGODB_PASSWORD
);

mongoose.connect(DB).then(() => console.log(`hi`));

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A schema need a name'],
    unique: true,
  },
  salary: {
    type: Number,
  },
});
const Model = mongoose.model('Model', schema);

/*const test = new Model({
  name: 'John',
  salary: 400000,
});
test
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(`💥error:${err}`);
  });*/

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello');
});
app.post('/api/v1/tours', (req, res) => {
  console.log(req.params);
});
const port = 4000;
app.listen(port, () => {
  console.log(`App running on port:${port}`);
});

//
