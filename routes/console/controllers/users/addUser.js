const responseHandler = require('@utils/responseHandlers')
const errorMessageMap = require('@errorMessageMap')
const helper = require('@helpers')

const { Auth } = require('@services')
const AuthService = new Auth()

module.exports = async (ctx, next) => {
  const {
    name,
    email,
    password
  } = ctx.request.body

  if (!name || !email || !password) {
    ctx.throw(errorMessageMap.default.REQUIRED_FIELD_MISSING)
  }

  let checkUser
  try {
    checkUser = await AuthService.GetUserByEmail({
      email
    })
  } catch (error) {
    ctx.throw(errorMessageMap.console.FETCH_USER_FAILED)
  }

  if (checkUser) {
    ctx.throw(errorMessageMap.console.DUPLICATED_USER_EMAIL)
  }

  const hashedPassword = helper.password.hash(password)

  let createUser
  try {
    createUser = await AuthService.Signup({
      name,
      email,
      password: hashedPassword
    })
  } catch (error) {
    ctx.throw(errorMessageMap.auth.CREATE_USER_FAILED)
  }

  responseHandler.success(ctx, 200, {
    createUser
  })
}
