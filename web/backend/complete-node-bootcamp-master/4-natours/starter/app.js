const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Hello');
});
app.post('/', (req, res) => {
  res.send('You can Post...');
});
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port:${port}`);
});
