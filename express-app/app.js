// const express = require('express')
import express from 'express'

const app = express()
const router = express.Router()
const port = 3000

console.log('router: ', router)

router.get('/about', function (req, res) {
  res.send('About this wiki');
})


// const { blakeDidThis, blakeAlsoDidThis } = require('../middleware/blake')
import { blakeDidThis, blakeAlsoDidThis } from '../middleware/blake'

const john = require('../middleware/john')

// app.get(
//   '/', 
//   (req, res) => res.send('Hello World!')
// )

app.get(
  '/blake',
  blakeDidThis,
  blakeAlsoDidThis
)



// router.get(
//   '/blake',
//   blakeDidThis,
//   blakeAlsoDidThis
// )

// router.get('/something', function (req, res) {
//   res.send('HEEEEEYYY :', req.params);
// });

app.get(
  '/john', 
  john
);

// not linked to a specific route, runs for all
app.use(function (req, res, next) {
  console.log('Current Time:', Date.now())
  next()
})

app.use(
  '/book/:id', function(req, res, next) {
    console.log('/book/:id request type: ', req.method);
    next()
  }
)

// testing next('route') when user :id is 0
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function (req, res, next) {
  res.send('special')
})


// doesnt work, why tho?
router.use(function (req, res, next) {
  console.log('Blake')
  next()
})






// found here, works: https://expressjs.com/en/guide/routing.html
// todo - investigate the differences between this method and the above
// const birds = require('../middleware/birds')
// app.use('/birds', birds)

// found here, doesnt work yet: https://expressjs.com/en/guide/error-handling.html
// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })

// function errorHandler (err, req, res, next) {
//   if (res.headersSent) {
//     return next(err)
//   }
//   res.status(500)
//   res.render('error', { error: err })
// }

// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })

// app.use(function(err, req, res, next) {
//   console.log(res);
//   // logger.error('Error rendering route', {
//   //   stack: err.stack,
//   // })

//   res.redirect('/error')
// })

// module.export = app
export default app