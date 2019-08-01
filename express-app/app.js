import express from 'express'

const app = express()

import {
  aboutRoutes,
  userRoutes
} from '../routes'

app.get(
  '/', 
  (req, res) => res.send('Hello World!')
)

app.use(
  '/about',
  aboutRoutes
)

app.use(
  '/user',
  userRoutes
)

// found here, works: https://expressjs.com/en/guide/routing.html
// todo - investigate the differences between this method and the above
import birds from '../middleware/birds'
app.use('/birds', birds)

export default app