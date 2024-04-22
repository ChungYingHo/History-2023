const express = require('express')
const router = express.Router()
const Todo = require('../../models/todo')

// create function
router.get('/todo-list/create', (req, res)=>{
    res.render('create')
})

router.post('/todo-list', (req, res)=>{
    const {name, description} = req.body
    return Todo.create({name: name, description: description})
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// display detail
router.get('/todo-list/:id', (req, res) =>{
    const id = req.params.id
    Todo.findById(id)
    .lean()
    .then(todo => res.render('detail', {todo}))
    .catch(error => console.log(error))
})

router.post('/todo-list/:id', (req, res) =>{
    const id = req.params.id
    const isDone = req.body.isDone

    return Todo.findById(id)
    .then(todo => {
        todo.isDone = isDone === 'on'
        return todo.save()
    })
    .catch(error => console.log(error))
})

// edit function
router.get('/todo-list/:id/edit', (req, res)=>{
    const id = req.params.id
    Todo.findById(id)
    .lean()
    .then(todo => res.render('edit', {todo}))
    .catch(error => console.log(error))
})

router.put('/todo-list/:id', (req, res)=>{
    const id = req.params.id
    const {name, description, isDone} = req.body

    return Todo.findById(id)
    .then(todo => {
        todo.name = name
        todo.description = description
        todo.isDone = isDone === 'on'
        return todo.save()
    })
    .then(() => res.redirect(`/todo-list/${id}`))
    .catch(error => console.log(error))
})

// delete function
router.delete('/todo-list/:id', (req, res) =>{
    const id = req.params.id
    return Todo.findById(id)
    .then(todo => todo.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router