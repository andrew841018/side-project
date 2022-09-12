const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const validator = require('validator');
const { query, query } = require('express');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.MONGODB_PASSWORD
);

mongoose.connect(DB);
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
app.post('/api/v1/tours/:id/:x/:y', (req, res) => {
  console.log(req.params);
});
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port:${port}`);
});

////
const slugify = require('slugifiy');
const schema = new mongoose.Schema({
  price: {
    type: Number,
    required: [true, 'error price'],
  },
  priceDiscount: {
    type: Number,
    validator: function (val) {
      return val < this.price;
    },
  },
  priceDiscount2: {
    type: Number,
    validator: function (val) {
      //this only point to current doc on NEW document creation
      return val < this.price;
    },
    message: 'Discount price ({VALUE}) should below regular price', //VALUE=val
  },
  name: {
    type: String,
    validator: [validator.isAlpha, 'not a name'],
  },
});
schema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { tour: { $ne: true } } });
});

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
createTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour,
    },
  });
});
