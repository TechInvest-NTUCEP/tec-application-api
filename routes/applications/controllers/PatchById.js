const errorMessageMap = require('@errorMessageMap')

const responseHandler = require('@utils/responseHandlers')

const { Application } = require('@services')
const ApplicationService = new Application()

module.exports = async (ctx) => {
  const id = ctx.params.id
  const wantedData = ctx.request.body

  let data
  try {
    data = await ApplicationService.PatchById({
      id,
      userId: ctx.state.me.id,
      updateData: wantedData
    })
  } catch (error) {
    ctx.throw(errorMessageMap.APPLICATION.UPDATE_APPLICATION_FAILURE)
    return
  }

  responseHandler.success(ctx, 200, data)
}
