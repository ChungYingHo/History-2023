const express = require('express')
const router = express.Router()
const Rest = require('../../models/rest')

// detail
router.get('/:category/:id', (req, res) => {
    const id = req.params.id
    return Rest.findById(id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

// search
router.get('/search', (req, res) => {
    const keyword = req.query.keyword.toLowerCase().trim()
    return Rest.find()
    .lean()
    .then(restData =>{
        const restaurant = restData.filter(data =>{
            return data.name.toLowerCase().includes(keyword) || data.category.toLowerCase().includes(keyword)
        })
        res.render('index', { rest: restaurant, keyword })
    })
    .catch(error => console.log(error))
})

// create
router.get('/create', (req, res)=>{
    res.render('create')
})

router.post('/', (req, res) => {
    return Rest.create(req.body)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
})

// edit
router.get('/:category/:id/edit', (req, res)=>{
    const id = req.params.id
    return Rest.findById(id)
    .lean()
    .then(rest => res.render('edit', {rest}))
    .catch(error => console.log(error))
})

// delete
router.delete('/:category/:id', (req, res)=>{
    const id = req.params.id
    return Rest.findByIdAndDelete(id)
    .then(() => res.redirect('/'))
})



module.exports = router