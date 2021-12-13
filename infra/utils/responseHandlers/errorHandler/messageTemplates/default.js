module.exports = {
  BAD_REQUEST: { code: 400, type: 'SERVER_ERROR', message: 'BAD_REQUEST' },
  NOT_FOUND: { code: 404, type: 'GENERAL_ERROR', message: 'NOT_FOUND' },
  REQUIRED_FIELD_MISSING: { code: 400, type: 'GENERAL_ERROR', message: 'REQUIRED_FIELD_MISSING' }
}
