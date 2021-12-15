const errorMessageMap = require('@errorMessageMap')

const responseHandler = require('@utils/responseHandlers')

const { Application } = require('@services')
const ApplicationService = new Application()

module.exports = async (ctx) => {
  const me = ctx.state.me
  const preview = ctx.request.query.preview

  let data
  try {
    data = await ApplicationService.GetAllByUserId({
      userId: me.id,
      preview
    })
  } catch (error) {
    ctx.throw(errorMessageMap.APPLICATION.FETCH_APPLICATION_FAILURE)
  }

  responseHandler.success(ctx, 200, data)
}
