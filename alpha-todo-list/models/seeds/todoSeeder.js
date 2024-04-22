// 資料庫連線
const mongoose = require('mongoose')
const Todo = require('../todo')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
    console.log('mongoDB errored!')
})

// 產生種子資料
db.once('open', () => {
    console.log('mongoDB connected!')
    for(let i = 0; i < 10; i++){
        Todo.create({name: `name-${i}`})
    }
    console.log('Done!')
})

