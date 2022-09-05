const express = require('express');
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
