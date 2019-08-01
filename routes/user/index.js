import express from 'express'
const router = express.Router();

import user123 from '../../mockdata/users/user123'

router.get(
  '/',
  (req, res) => {
    res.send('Generic user content')
  }
)

// testing next('route') when user :id is 0
router.get(
  '/:id',
  (req, res, next) => {
    // console.log('req: ', req)

    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route')

    // otherwise pass the control to the next middleware function in this stack
    else next()
  },
  (req, res) => {
    // send a regular response
    // console.log('user123: ', user123);
    // res.send('regular user content: ', user123.name)
    if (req.params.id === '123') {
      res.send('regular user content for ' + user123.name)
    
    } else {
      res.send('regular user content for unknown user')
    }
  }
)

// handler for the /user/:id path, which sends a special response
router.get('/:id', function (req, res) {
  res.send('special user content')
})

export default router