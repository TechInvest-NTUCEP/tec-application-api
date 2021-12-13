const responseHandler = require('@utils/responseHandlers')
const errorMessageMap = require('@errorMessageMap')

const { Console } = require('@services')
const ConsoleService = new Console()

module.exports = async (ctx) => {
  let data
  try {
    data = await ConsoleService.GetReviews()
  } catch (error) {
    ctx.throw(errorMessageMap.console.FETCH_REVIEW_FAILED)
  }
  responseHandler.success(ctx, 200, {
    data
  })
}
