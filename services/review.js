const models = require('@models')

class ReviewService {
  async GetReviewRequestsByReviewerId ({ id }) {
    let data
    try {
      data = models.Reviews.findAll({
        where: {
          reviewerId: id
        },
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

  async AddReviewContent ({ id, content, userId }) {
    let review
    try {
      review = models.Reviews.findAll({
        where: {
          id,
          reviewerId: userId,
          content: null
        }
      })
    } catch (error) {
      throw new Error('FETCH_REVIEW_REQUEST_FAILED')
    }

    if (!review) {
      throw new Error('FETCH_REVIEW_REQUEST_FAILED')
    }

    try {
      await models.Reviews.update({
        content
      }, {
        where: {
          id
        }
      })
    } catch (error) {
      throw new Error('FETCH_REVIEW_REQUEST_FAILED')
    }

    return review
  }
}

module.exports = ReviewService
