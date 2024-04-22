const express = require('express')
const router = express.Router({mergeParams: true})

const home = require('./modules/home')
router.use('/', home)

const todoList = require('./modules/todoList')
router.use(todoList)

module.exports = router