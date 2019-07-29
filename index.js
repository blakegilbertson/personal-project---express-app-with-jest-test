const express = require('express')
const app = express()
const port = 3000

app.get(
  '/', 
  (req, res) => res.send('Hello World!')
)

app.get(
  '/blake',
  (req, res) => res.send('Blake did this')
)

app.get('/john', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;