const { Router } = require('express')
const { getData, listFiles } = require('../controllers/files')
const router = Router()

router.get('/files/data', (req, res, next) => { getData(req, res) }
    /* #swagger.parameters['fileName'] = {
            in: "query",
            description: "filter by fileName" ,
    } */
    /* #swagger.responses[200] = {
     description: 'Files Success',
     schema: { $ref: '#/definitions/FilesSuccess' }
 } */
)
router.get('/files/list', (req, res, next) => {
    listFiles(req, res)
 /* #swagger.responses[200] = {
     description: 'Files Success',
     schema: { $ref: '#/definitions/FilesListSuccess' }
 } */})

module.exports = router
