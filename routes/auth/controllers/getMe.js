
const responseHandler = require('@utils/responseHandlers')

module.exports = async (ctx, next) => {
  const me = ctx.state.me
  responseHandler.success(ctx, 200, me)
}
