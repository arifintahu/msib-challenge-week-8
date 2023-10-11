const { Router } = require('express')
const {logControllers} = require("../controllers")
const { logging } = require("../middlewares");

const router = Router()
router.get('/', [logging] ,(req, res) => {
    logControllers.getLogs(req, res)
})

router.get('/:id', [logging] ,(req, res) => {
    logControllers.getLogById(req, res)
})

module.exports = router