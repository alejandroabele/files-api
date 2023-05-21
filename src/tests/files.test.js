const chai = require('chai')
const chaiHttp = require('chai-http')
const { describe, it, before, after } = require('mocha')
const { port } = require('../config')
chai.use(chaiHttp)
const expect = chai.expect

describe('File API Test', () => {
  let server

  before((done) => {
    server = require('../')
    server.on('listening', () => {
      done()
    })
  })

  after((done) => {
    server.close(() => {
      done()
    })
  })
  describe('getFilesData', () => {
    it('should return status 200', (done) => {
      chai
        .request(`http://localhost:${port}`) // Especifica la URL de tu aplicación
        .get('/api/v1/files/data') // Especifica el endpoint que deseas probar
        .end((err, res) => {
          if (err) {
            return err
          }
          expect(res).to.have.status(200) // Verifica que el status sea 200
          done()
        })
    })
    it('should return files data in the expected format', (done) => {
      chai
        .request(`http://localhost:${port}`) // Especifica la URL de tu aplicación
        .get('/api/v1/files/data') // Especifica el endpoint que deseas probar
        .end((err, res) => {
          if (err) {
            return err
          }
          expect(res.body.payload).to.be.an('array')
          res.body.payload.forEach(element => {
            expect(element).to.have.property('file')
            expect(element).to.have.property('lines')
            expect(element.lines).to.be.an('array')
          })
          done()
        })
    })
  })

  describe('listFiles', () => {
    let server

    before((done) => {
      server = require('../')
      done()
    })

    after((done) => {
      server.close(() => {
        done()
      })
    })

    it('should return status 200', (done) => {
      chai
        .request(`http://localhost:${port}`) // Especifica la URL de tu aplicación
        .get('/api/v1/files/list') // Especifica el endpoint que deseas probar
        .end((err, res) => {
          if (err) {
            return err
          }
          expect(res).to.have.status(200) // Verifica que el status sea 200
          done()
        })
    })
    it('should return files data in the expected format', (done) => {
      chai
        .request(`http://localhost:${port}`) // Especifica la URL de tu aplicación
        .get('/api/v1/files/list') // Especifica el endpoint que deseas probar
        .end((err, res) => {
          if (err) {
            return err
          }
          expect(res.body.payload).to.be.an('array')
          done()
        })
    })
  })
})
