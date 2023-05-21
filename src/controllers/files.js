
const { getData: getDataService, listFiles: listFilesService } = require('../services/files')
const { handleSuccessResponse, handleErrorResponse } = require('../utils/responseHandler')

const getData = (req, res) => {
  getDataService(req.query)
    .then((data) => {
      res.status(200).json(handleSuccessResponse(data))
    })
    .catch((error) =>
      res.status(error.code || 500).json(handleErrorResponse(error.message))
    )
}
const listFiles = (req, res) => {
  listFilesService(req.query)
    .then((data) => {
      res.status(200).json(handleSuccessResponse(data))
    })
    .catch((error) =>
      res.status(error.code || 500).json(handleErrorResponse(error.message))
    )
}

module.exports = {
  getData,
  listFiles
}
