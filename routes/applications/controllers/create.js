const errorMessageMap = require('@errorMessageMap')

const responseHandler = require('@utils/responseHandlers')

const { Application } = require('@services')
const ApplicationService = new Application()

module.exports = async (ctx) => {
  const me = ctx.state.me

  let newApp
  try {
    newApp = await ApplicationService.Create({
      userId: me.id
    })
  } catch (error) {
    ctx.throw(errorMessageMap.APPLICATION.CREATE_APPLICATION_FAILURE)
  }
  responseHandler.success(ctx, 200, newApp)
}
