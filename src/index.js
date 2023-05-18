const express = require('express')
const app = express()
const { port } = require('./config')
const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')
const filesRoutes = require('./routes/files')

app.get('/', (req, res) => {
  res.send('Welcome api')
})

app.use(express.json())
app.use('/api/v1', filesRoutes)
const swaggerOptions = {
  swaggerDefinition: require("./docs/swagger.json"), // swagger definition
  apis: [], // path where API specification are written
};
app.use(
"/api-doc",
swaggerUI.serve,
swaggerUI.setup(swaggerJSDoc(swaggerOptions))
);

const server = app.listen(port, () => {
  console.log('Server listening on port', port)
})

module.exports = server
