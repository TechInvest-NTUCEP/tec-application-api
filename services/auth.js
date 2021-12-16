const models = require('@models')

class AuthService {
  async GetUserByEmail ({ email }) {
    let data
    try {
      data = await models.Users.findOne({
        where: {
          email
        }
      })
    } catch (error) {
      throw new Error('FETCH_USER_FAILED')
    }
    return data
  }

  async GetUserById ({ id }) {
    let data
    try {
      data = await models.Users.findOne({
        where: {
          id
        }
      })
    } catch (error) {
      throw new Error('FETCH_USER_FAILED')
    }
    return data
  }

  async Create ({ newUserData }) {
    let data
    try {
      const newUserInstance = new models.Users(newUserData)
      data = await newUserInstance.save()
    } catch (error) {
      throw new Error('CREATE_USER_FAILED')
    }
    return data
  }
}

module.exports = AuthService
