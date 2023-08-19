const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    medication: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('Patient', patientSchema)