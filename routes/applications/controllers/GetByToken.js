const errorMessageMap = require('@errorMessageMap')

const responseHandler = require('@utils/responseHandlers')

const { Application } = require('@services')
const ApplicationService = new Application()

module.exports = async (ctx) => {
  const token = ctx.request.query.token

  let data
  try {
    data = await ApplicationService.GetByToken({
      token
    })
  } catch (error) {
    ctx.throw(errorMessageMap.APPLICATION.FETCH_APPLICATION_FAILURE)
  }

  responseHandler.success(ctx, 200, data)
}
