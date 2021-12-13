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

  async AddReviewRequest ({ reviewerId, applicantId }) {
    let data
    try {
      const newReviewInstance = new models.Reviews({
        reviewerId,
        applicantId
      })
      data = await newReviewInstance.save()
    } catch (error) {
      throw new Error('CREATE_REVIEW_REQUEST_FAILED')
    }
    return data
  }

  async GetReviews () {
    let data
    try {
      data = models.Reviews.findAll({
        include: [{
          model: models.Users,
          as: 'reviewer',
          attributes: {
            exclude: ['password', 'createdAt']
          }
        }, {
          model: models.Users,
          as: 'employee',
          attributes: {
            exclude: ['password', 'createdAt']
          }
        }]
      })
    } catch (error) {
      throw new Error('FETCH_REVIEW_REQUEST_FAILED')
    }
    return data
  }
}

module.exports = ConsoleService
