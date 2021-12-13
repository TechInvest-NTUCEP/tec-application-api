const responseHandler = require('@utils/responseHandlers')
const errorMessageMap = require('@errorMessageMap')

const { Review } = require('@services')
const ReviewService = new Review()

module.exports = async (ctx) => {
  let data
  try {
    data = await ReviewService.GetReviewRequestsByReviewerId({
      id: ctx.state.me.id
    })
  } catch (error) {
    ctx.throw(errorMessageMap.console.FETCH_REVIEW_FAILED)
  }
  responseHandler.success(ctx, 200, {
    data
  })
}
