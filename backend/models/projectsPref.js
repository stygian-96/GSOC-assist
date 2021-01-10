const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectsSchema = new Schema({
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

module.exports = mongoose.model('ProjPrefList', projectsSchema)