
const { getData: getDataServices } = require('../services/files')
const { handleSuccessResponse, handleErrorResponse } = require('../utils/responseHandler')

const getData = (req, res) => {
  getDataServices(req.body)
    .then((data) => {
      res.status(200).json(handleSuccessResponse(data))
    })
    .catch((error) =>
      res.status(error.code || 500).json(handleErrorResponse(error.message))
    )
}

module.exports = {
  getData
}
