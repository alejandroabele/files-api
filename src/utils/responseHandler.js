const handleErrorResponse = (message) => {
  return {
    message,
    error: true
  }
}

const handleSuccessResponse = (data) => {
  return {
    message: 'OK',
    error: false,
    payload: data
  }
}

module.exports = {
  handleErrorResponse,
  handleSuccessResponse
}
