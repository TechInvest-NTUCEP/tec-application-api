const errorMessageMap = require('@errorMessageMap')

module.exports = async (ctx, next) => {
  try {
    await next()
    if (ctx.status === 404) {
      const getErrorMessage = errorMessageMap.default.NOT_FOUND
      ctx.status = getErrorMessage.code
      ctx.body = {
        status: 'FAILED',
        type: getErrorMessage.type,
        message: getErrorMessage.message
      }
    }
  } catch (error) {
    if (!error.code || !error.message) {
      const getErrorMessage = errorMessageMap.default.BAD_REQUEST
      ctx.status = getErrorMessage.code
      ctx.body = {
        status: 'FAILED',
        type: getErrorMessage.type,
        message: getErrorMessage.message
      }
    }
    ctx.status = error.code || 500
    ctx.body = {
      status: 'FAILED',
      type: error.type,
      message: error.message
    }
    ctx.app.emit('error', error, ctx)
  }
}
