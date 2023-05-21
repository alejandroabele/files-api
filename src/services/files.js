const FilesRepository = require('../repositories/files')

const filterByFileName = (data, fileName) => {
  if (!fileName) {
    return data
  }

  const filteredData = data.filter(item => item.file.includes(fileName))
  return filteredData
}
const getData = async (params) => {
  const files = new FilesRepository()

  const data = await files.findAll()
  if (params.fileName) {
    return filterByFileName(data, params.fileName)
  }
  return data
}

const listFiles = async () => {
  const files = new FilesRepository()

  return await files.list()
}

module.exports = { getData, listFiles }
