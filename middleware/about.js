import aboutData from '../mockdata/about'

const aboutMiddleware = (req, res) => {
  res.status(200).json(aboutData.aboutText);
}

export default aboutMiddleware