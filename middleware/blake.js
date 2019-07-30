
const blakeDidThis = (req, res, next) => {
  console.log('Blake did this')
  next()
}

const blakeAlsoDidThis = (req, res, next) => {
  res.send('Blake did this too')
}

module.exports = { blakeDidThis, blakeAlsoDidThis }