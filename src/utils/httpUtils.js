
const axios = require('axios')
const { externalApi } = require('../config')
// Crear una instancia de axios con la configuración deseada
const instanceExternalApi = axios.create({
  baseURL: externalApi.baseUrl, // URL base de la API
  timeout: 5000, // Tiempo máximo de espera para una solicitud en milisegundos
  headers: {
    'Content-Type': 'application/json',
    authorization: externalApi.token
    // Tipo de contenido para las solicitudes
    // Otros encabezados personalizados que puedas necesitar
  }
})

module.exports = { instanceExternalApi }
