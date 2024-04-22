const express = require('express')
const router = express.Router()
const Rest = require('../../models/rest')

router.get('/', (req, res)=>{
    Rest.find()
    .lean()
    .sort({_id: 'asc'})
    .then(rest => res.render('index', {rest}))
    .catch(error => console.log(error))
})

module.exports = router