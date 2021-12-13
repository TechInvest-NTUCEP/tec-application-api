const models = require('@models')

const helper = require('@helpers')
const errorMessageMap = require('@errorMessageMap')

module.exports = async (ctx, next) => {
  const token = ctx.header.authorization

  let tokenData
  try {
    tokenData = await helper.token.verify(token)
  } catch (error) {
    ctx.throw(errorMessageMap.AUTH.AUTH_FAILED)
    return
  }

  let userData
  try {
    userData = await models.Users.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: tokenData.data.id
      }
    })
  } catch (error) {
    ctx.throw(errorMessageMap.AUTH.AUTH_FAILED)
    return
  }

  userData = JSON.parse(JSON.stringify(userData))
  if (!userData) {
    ctx.throw(errorMessageMap.AUTH.AUTH_FAILED)
    return
  }

  ctx.state.me = userData

  await next()
}
