import express from 'express'
const router = express.Router();

import aboutMiddleware from '../../middleware/about'

console.log('SSSSSSSS');
router.get(
  '/about',
  (req, res) => {
    console.log('1111 This is the About route')
    res.send('1111 This is the About route')
  },
  // aboutMiddleware
)

console.log('TTTTTTTTT');
export default router