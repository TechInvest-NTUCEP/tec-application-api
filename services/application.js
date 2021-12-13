const models = require('@models')

class ApplicationService {
  async Create ({ userId }) {
    let data
    try {
      const newAppInstance = new models.GarageApplications({
        userId
      })
      data = await newAppInstance.save()
    } catch (error) {
      console.log(error)
      throw new Error('CREATE_APPLICATION_FAILURE')
    }

    return data
  }

  async GetByUserId ({ userId }) {
    let data
    try {
      data = await models.GarageApplications.findAll({
        where: {
          userId
        }
      })
    } catch (error) {
      throw new Error('FETCH_APPLICATION_FAILED')
    }
    return data
  }

  async GetById ({ id, userId }) {
    let data
    try {
      data = await models.GarageApplications.findOne({
        where: {
          id,
          userId
        }
      })
    } catch (error) {
      throw new Error('FETCH_APPLICATION_FAILED')
    }
    return data
  }

  async GetByJWT ({ token }) {
    // TODO: decode jwt and select the id from decoding.
    let data
    try {
      data = await models.GarageApplications.findAll({
        where: {
        }
      })
    } catch (error) {
      throw new Error('FETCH_APPLICATION_FAILED')
    }
    return data
  }

  async PatchById ({ id, userId, fields = [] }) {
    let application
    try {
      application = await this.GetById({ id })
    } catch (error) {
      throw new Error('FETCH_APPLICATION_FAILED')
    }

    if (application.userId !== userId) {
      throw new Error('UPDATE_APPLICATION_FAILED_NOT_BELONGS_TO_THIS_USER')
    }

    let data
    try {
      data = await models.GarageApplications.update({
        ...fields
      }, {
        where: {
          userId,
          id
        }
      })
    } catch (error) {
      throw new Error('UPDATE_APPLICATION_FAILED')
    }
    return data
  }
}

module.exports = ApplicationService
