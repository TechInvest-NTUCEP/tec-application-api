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
      throw new Error('CREATE_APPLICATION_FAILURE')
    }

    return data
  }

  async GetAllByUserId ({ userId, preview = false }) {
    let selectedFields
    if (preview) {
      selectedFields = {
        attributes: ['name', 'id', 'createdAt']
      }
    }

    let data
    try {
      data = await models.GarageApplications.findAll({
        where: {
          userId
        },
        ...selectedFields,
        order: [
          ['createdAt', 'DESC']
        ]
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

  async PatchById ({ id, userId, updateData }) {
    let application
    try {
      application = await this.GetById({ id, userId })
    } catch (error) {
      throw new Error('FETCH_APPLICATION_FAILED')
    }

    if (application.userId !== userId) {
      throw new Error('UPDATE_APPLICATION_FAILED_NOT_BELONGS_TO_THIS_USER')
    }

    let data
    try {
      data = await models.GarageApplications.update({
        updatedAt: new Date().toISOString(),
        ...updateData
      }, {
        where: {
          userId,
          id
        },
        returning: true,
        plain: true
      })
    } catch (error) {
      throw new Error('UPDATE_APPLICATION_FAILED')
    }

    if (data[0] === 0) {
      throw new Error('UPDATE_APPLICATION_FAILED')
    }

    return data
  }
}

module.exports = ApplicationService
