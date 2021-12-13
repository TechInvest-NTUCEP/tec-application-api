const responseHandler = require('@utils/responseHandlers')
const errorMessageMap = require('@errorMessageMap')

const { Console, Auth } = require('@services')
const ConsoleService = new Console()
const AuthService = new Auth()

module.exports = async (ctx, next) => {
  const userId = ctx.params.userId
  const { name } = ctx.request.body

  if (!userId && !name) {
    ctx.throw(errorMessageMap.default.REQUIRED_FIELD_MISSING)
  }

  let editingUser
  try {
    editingUser = AuthService.GetUserById({
      id: userId
    })
  } catch (error) {
    ctx.throw(errorMessageMap.console.FETCH_USER_FAILED)
  }

  if (editingUser.isAdmin) {
    ctx.throw(errorMessageMap.console.PATCH_USER_FAILED_USER_IS_ADMIN)
  }

  try {
    await ConsoleService.PatchUserById({
      id: userId,
      name
    })
  } catch (error) {
    ctx.throw(errorMessageMap.console.UPDATE_USER_FAILED)
    return
  }

  try {
    editingUser = await AuthService.GetUserById({
      id: userId
    })
  } catch (error) {
    ctx.throw(errorMessageMap.console.FETCH_USER_FAILED)
  }

  responseHandler.success(ctx, 200, editingUser)
}
