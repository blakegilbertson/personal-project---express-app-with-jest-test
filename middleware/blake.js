
const blakeDidThis = (req, res, next) => {
  console.log('Blake did this')
  next()
}

const blakeAlsoDidThis = (req, res) => {
  res.send('Blake did this too')
}

export { blakeDidThis, blakeAlsoDidThis }