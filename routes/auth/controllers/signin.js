
const helper = require('@helpers')
const errorMessageMap = require('@errorMessageMap')

const responseHandler = require('@utils/responseHandlers')

const { Auth } = require('@services')
const AuthService = new Auth()

module.exports = async (ctx) => {
  const {
    email,
    password
  } = ctx.request.body

  if (!email || !password) {
    ctx.throw(errorMessageMap.DEFAULT.REQUIRED_FIELD_MISSING)
  }

  let user
  try {
    user = await AuthService.GetUserByEmail({
      email
    })
  } catch (error) {
    ctx.throw(errorMessageMap.AUTH.AUTH_FAILED)
  }

  const hashedPassword = helper.password.hash(password)
  let token

  if (user) {
    if (hashedPassword === user.password) {
      token = await helper.token.issue(user.id)
    } else {
      ctx.throw(errorMessageMap.AUTH.AUTH_FAILED)
    }
  }

  if (!user) {
    ctx.throw(errorMessageMap.AUTH.AUTH_FAILED)
  }

  responseHandler.success(ctx, 200, {
    token
  })
}
