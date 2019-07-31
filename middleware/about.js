import aboutData from '../mockdata/about'

const aboutMiddleware = (req, res, next) => {
  console.log('aboutMiddleware running');
  res.status(200).json(aboutData);
  next()
}

export default aboutMiddleware