const { instanceExternalApi } = require('../utils/httpUtils')
class FilesRepository {
  async findAll () {
    const files = await getExternalFiles()
    const parsedDataFiles = []
    for (const file of files) {
      const dataFile = await getExternalFile(file)
      parsedDataFiles.push({
        file,
        lines: parsedFileToJson(dataFile)
      })
    }

    return parsedDataFiles
  }

  async list () {
    return getExternalFiles()
  }
}

module.exports = FilesRepository

const parsedFileToJson = (data) => {
  if (data) {
    const lines = data.split('\n')
    lines.shift()
    return lines.map((line) => {
      const [, text, number, hex] = line.split(',')
      return { text, number, hex }
    })
  }
  return []
}
const getExternalFiles = async () => {
  try {
    const { data } = await instanceExternalApi.get('/secret/files')
    return data.files
  } catch (error) {

  }
  return []
}
const getExternalFile = async (file) => {
  try {
    const { data } = await instanceExternalApi.get(`/secret/file/${file}`)
    return data
  } catch (error) {

  }
  return ''
}
