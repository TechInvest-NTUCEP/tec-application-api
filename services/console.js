const models = require('@models')

class ConsoleService {
  async ListUsers ({ limit, offset }) {
    let data
    try {
      data = await models.Users.findAndCountAll({
        limit,
        offset,
        order: [
          ['createdAt', 'DESC']
        ],
        attributes: {
          exclude: ['password']
        }
      })
    } catch (error) {
      throw new Error('FETCH_USER_LIST_FAILED')
    }
    return data
  }

  async PatchUserById ({ id, name }) {
    try {
      await models.Users.update({
        updatedAt: new Date().toISOString(),
        name
      }, {
        where: {
          id
        }
      })
    } catch (error) {
      throw new Error('UPDATE_USER_FAILED')
    }
  }
}

module.exports = ConsoleService
