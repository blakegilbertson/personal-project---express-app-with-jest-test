import express from 'express'
const router = express.Router();

import aboutMiddleware from '../../middleware/about'

router.get(
  '/',
  aboutMiddleware
)

export default router