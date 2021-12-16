const errorMessageMap = require('@errorMessageMap')

const responseHandler = require('@utils/responseHandlers')

const { Application } = require('@services')
const ApplicationService = new Application()

module.exports = async (ctx) => {
  const id = ctx.params.id
  const me = ctx.state.me

  let data
  try {
    data = await ApplicationService.GetShareToken({
      id,
      userId: me.id
    })
  } catch (error) {
    ctx.throw(errorMessageMap.APPLICATION.FETCH_APPLICATION_FAILURE)
  }

  responseHandler.success(ctx, 200, data)
}
