const { Router } = require('express')
const { getData } = require('../controllers/files')
const router = Router()

router.get('/files/data', (req, res, next) => { getData(req, res) })

module.exports = router
