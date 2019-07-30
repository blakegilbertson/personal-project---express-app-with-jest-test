// const express = require('express')
import express from 'express'

const app = express()
const router = express.Router()
const port = 3000

// const { blakeDidThis, blakeAlsoDidThis } = require('../middleware/blake')
import { blakeDidThis, blakeAlsoDidThis } from '../middleware/blake'

const john = require('../middleware/john')

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

// found here, works: https://expressjs.com/en/guide/routing.html
// todo - investigate the differences between this method and the above
// const birds = require('../middleware/birds')
// app.use('/birds', birds)

// found here, doesnt work yet: https://expressjs.com/en/guide/error-handling.html
// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })

// module.export = app
export default app