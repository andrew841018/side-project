const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
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

const slugify=require('slugifiy');
const schema = new mongoose.Schema({
  duration: {
    type: Number,
  },
  {
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
  }
});
schema.pre('save',function(next){
    this.slug=slugify(this.name,{lower:true});
    next();
});

