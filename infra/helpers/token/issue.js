
const config = require('config')
const jwt = require('jsonwebtoken')

const secret = config.get('secret.token')

module.exports = async (data) => {
  let token
  try {
    token = await jwt.sign({
      data: {
        id: data
      }
    }, secret, { expiresIn: '10d' })
  } catch (error) {
    throw new Error(error)
  }

  return token
}
