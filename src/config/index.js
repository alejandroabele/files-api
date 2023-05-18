require('dotenv').config()
module.exports = {
  port: process.env.PORT || 9000,

  externalApi: {
    baseUrl: 'https://echo-serv.tbxnet.com/v1',
    token: 'Bearer aSuperSecretKey'
  }

}
