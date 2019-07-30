const express = require('express')
const app = express()
const port = 3000

const { blakeDidThis, blakeAlsoDidThis } = require('./middleware/blake')
const john = require('./middleware/john')

app.get(
  '/', 
  (req, res) => res.send('Hello World!')
)

app.get(
  '/blake',
  blakeDidThis,
  blakeAlsoDidThis
)

app.get(
  '/john', 
  john
);

// TODO - change? not sure this is the best approach but functions for now
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

module.exports = app;