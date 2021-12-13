const errorMessageMap = require('@errorMessageMap')

module.exports = async (ctx, next) => {
  const user = ctx.state.me
  if (!user.isAdmin) {
    ctx.throw(errorMessageMap.AUTH.IDENTITY_CHECK_FAILED)
  }
  await next()
}
