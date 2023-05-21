const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })
const { port } = require('./config')
const doc = {
  info: {
    title: 'Files APi',
    description: 'Description'
  },
  host: `localhost:${port}/api/v1`,
  schemes: ['http'],
  definitions: {
    FilesSuccess: {
      message: "OK",
      error: false,
      payload: [
        {
          file: "test3.csv",
          lines: [
   
            {
              text: "IomOkTTyZpjeHFlORteOWdhdffdI",
              number: "938",
              hex: "f88e2bc90896ba815f74371489256f42"
            },
        
          ]
        }
      ]
    },
    FilesListSuccess: {
      message: "OK",
      error: false,
      payload: [
        'test1.csv',
        'test2.csv'
      ]
    }
  }

}

const outputFile = './docs/swagger.json'
const endpointsFiles = ['./routes/files']
swaggerAutogen(outputFile, endpointsFiles, doc)
