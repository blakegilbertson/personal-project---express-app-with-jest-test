const johnData = require('../mockdata/john')

const john = (req, res) => {
  res.status(200).json(johnData);
}

module.exports = john