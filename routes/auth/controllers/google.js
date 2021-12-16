const config = require('config')
const { OAuth2Client } = require('google-auth-library')

const errorMessageMap = require('@errorMessageMap')
const responseHandler = require('@utils/responseHandlers')
const helpers = require('@helpers')

const { Auth } = require('@services')
const AuthService = new Auth()

const clientId = config.get('google.clientId')

module.exports = async (ctx) => {
  const { idToken } = ctx.request.body
  if (!idToken) {
    ctx.throw(errorMessageMap.AUTH.AUTH_FAILED)
  }
  const client = new OAuth2Client(clientId)

  let ticket
  try {
    ticket = await client.verifyIdToken({
      idToken,
      audience: clientId
    })
  } catch (error) {
    ctx.throw(errorMessageMap.AUTH.ACCOUNT_CREATE_FAILURE)
  }
  const authData = ticket.getPayload()
  const {
    email,
    name
  } = authData

  let user
  try {
    user = await AuthService.GetUserByEmail({ email })
  } catch (error) {
    ctx.throw(errorMessageMap.AUTH.ACCOUNT_CREATE_FAILURE)
  }
  user = JSON.parse(JSON.stringify(user))

  if (!user) {
    const newUserData = {
      email,
      name
    }

    if (email.endsWith('ntu.edu.tw')) {
      // 臺大帳號可以直接 Verified
      newUserData.isNTU = true
      newUserData.NTUId = email.split('@')[0]
    }

    try {
      user = await AuthService.Create({ newUserData })
    } catch (error) {
      ctx.throw(errorMessageMap.AUTH.ACCOUNT_CREATE_FAILURE)
    }

    user = JSON.parse(JSON.stringify(user))
  }

  let token
  try {
    token = await helpers.token.issue(user.id)
  } catch (error) {
    ctx.throw(errorMessageMap.AUTH.ACCOUNT_CREATE_FAILURE)
  }

  responseHandler.success(ctx, 200, {
    token
  })
}
