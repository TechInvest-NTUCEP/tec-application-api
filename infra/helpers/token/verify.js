const config = require('config')
const jwt = require('jsonwebtoken')

const secret = config.get('secret.token')

module.exports = async (token) => {
  return jwt.verify(token, secret)
}
