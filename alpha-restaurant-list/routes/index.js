const express = require('express')
const router = express.Router()

const home = require('./modules/home')
router.use('/', home)

const display = require('./modules/display')
router.use(display)

module.exports = router