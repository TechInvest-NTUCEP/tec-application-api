const responseHandler = require('@utils/responseHandlers')
const errorMessageMap = require('@errorMessageMap')

const { Review } = require('@services')
const ReviewService = new Review()

module.exports = async (ctx) => {
  const reviewId = ctx.params.reviewId
  const { content } = ctx.request.body

  let data
  try {
    data = await ReviewService.AddReviewContent({
      id: reviewId,
      userId: ctx.state.me.id,
      content
    })
  } catch (error) {
    ctx.throw(errorMessageMap.console.ADD_REVIEW_CONTENT_FAILED)
  }
  responseHandler.success(ctx, 200, {
    data
  })
}
