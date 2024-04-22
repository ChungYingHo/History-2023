const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    map: {
        type: String
    },
    rating: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
})

module.exports = mongoose.model('Rest', restSchema)