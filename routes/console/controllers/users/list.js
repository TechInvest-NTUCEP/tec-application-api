const responseHandler = require('@utils/responseHandlers')
const errorMessageMap = require('@errorMessageMap')

const { Console } = require('@services')
const ConsoleService = new Console()

module.exports = async (ctx) => {
  const limit = typeof ctx.query.limit !== 'undefined' ? parseInt(ctx.query.limit) : 10
  let offset = typeof ctx.query.offset !== 'undefined' ? parseInt(ctx.query.offset) : 0
  offset = (offset - 1) * limit

  let users, count
  try {
    ({ count, rows: users } = await ConsoleService.ListUsers({
      offset,
      limit
    }))
  } catch (error) {
    ctx.throw(errorMessageMap.console.FETCH_USER_FAILED)
  }

  responseHandler.success(ctx, 200, {
    users,
    count
  })
}
