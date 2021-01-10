const mongoose = require('mongoose')

const projSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    getTheCode: {
        type: String,
        required: true
    },
    projLink: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Project', projSchema)