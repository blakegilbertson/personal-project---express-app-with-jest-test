import express from 'express'

const app = express()
// const router = express.Router()

import aboutRoute from '../routes'

app.use(
  '/about',
  // doesnt appear to be being used
  aboutRoute, 

  // works when hardcoded here
  // (req, res) => {
  //   console.log('1111 This is the About route')
  //   res.send('1111 This is the About route')
  // },
)





import { blakeDidThis, blakeAlsoDidThis } from '../middleware/blake'
import john from '../middleware/john'

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

// not linked to a specific route, runs for all
// app.use(function (req, res, next) {
//   console.log('Current Time:', Date.now())
//   next()
// })

app.get(
  '/book/:id', function(req, res, next) {
    console.log('/book/:id request type: ', req.method);
    res.send('Some book page')
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

// found here, works: https://expressjs.com/en/guide/routing.html
// todo - investigate the differences between this method and the above
import birds from '../middleware/birds'
app.use('/birds', birds)

export default app