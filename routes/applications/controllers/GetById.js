const errorMessageMap = require('@errorMessageMap')

const responseHandler = require('@utils/responseHandlers')

const { Application } = require('@services')
const ApplicationService = new Application()

module.exports = async (ctx) => {
  const id = ctx.params.id
  const me = ctx.state.me

  let data
  try {
    data = await ApplicationService.GetById({
      id,
      userId: me.id
    })
  } catch (error) {

  }

  responseHandler.success(ctx, 200, data)
}
