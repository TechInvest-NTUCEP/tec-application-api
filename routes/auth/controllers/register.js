
const helper = require('@helpers')
const errorMessageMap = require('@errorMessageMap')

const responseHandler = require('@utils/responseHandlers')

const { Auth } = require('@services')
const AuthService = new Auth()

module.exports = async (ctx) => {
  const {
    name,
    email,
    password
  } = ctx.request.body

  if (!name || !email || !password) {
    ctx.throw(errorMessageMap.DEFAULT.REQUIRED_FIELD_MISSING)
  }

  let user
  try {
    user = await AuthService.GetUserByEmail({
      email
    })
  } catch (error) {
    ctx.throw(errorMessageMap.AUTH.CREATE_USER_FAILED)
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
    let createUser
    try {
      createUser = await AuthService.Signup({
        name,
        email,
        password: hashedPassword
      })
    } catch (error) {
      ctx.throw(errorMessageMap.AUTH.CREATE_USER_FAILED)
    }

    if (createUser) {
      token = await helper.token.issue(createUser.id)
    }
  }

  responseHandler.success(ctx, 200, {
    token
  })
}
