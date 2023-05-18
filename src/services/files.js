const FilesRepository = require('../repositories/files')

const getData = async () => {
  const files = new FilesRepository()

  return await files.findAll()
}

module.exports = { getData }
