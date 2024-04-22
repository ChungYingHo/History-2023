const mongoose = require('mongoose')
const seed = require('./restaurant.json').results
const Rest = require('../rest')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
    console.log('mongoDB errored!')
})

db.once('open', ()=>{
    console.log('mongoDB connected!')
    for(let i = 0; i < seed.length; i++){
        Rest.create({
            name: `${seed[i].name}`,
            category:`${seed[i].category}`,
            location: `${seed[i].location}`,
            phone: `${seed[i].phone}`,
            map: `${seed[i].google_map}`,
            rating: `${seed[i].rating}`,
            image: `${seed[i].image}`,
            description: `${seed[i].description}`,
        })
    }
    console.log('Done')
})
