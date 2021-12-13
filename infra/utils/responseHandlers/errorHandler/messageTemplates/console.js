module.exports = {
  FETCH_USER_FAILED: { code: 500, type: 'GENERAL_ERROR', message: 'FETCH_USER_FAILED' },
  PATCH_USER_FAILED_USER_IS_ADMIN: { code: 403, type: 'GENERAL_ERROR', message: 'PATCH_USER_FAILED_USER_IS_ADMIN' },
  UPDATE_USER_FAILED: { code: 500, type: 'GENERAL_ERROR', message: 'UPDATE_USER_FAILED' },
  DUPLICATED_USER_EMAIL: { code: 400, type: 'GENERAL_ERROR', message: 'DUPLICATED_USER_EMAIL' },
  CREATE_USER_FAILED: { code: 400, type: 'GENERAL_ERROR', message: 'DUPLICATED_USER_EMAIL' },

  FETCH_REVIEW_FAILED: { code: 500, type: 'GENERAL_ERROR', message: 'FETCH_REVIEW_FAILED' },
  ADD_REVIEW_CONTENT_FAILED: { code: 500, type: 'GENERAL_ERROR', message: 'ADD_REVIEW_CONTENT_FAILED' }
}