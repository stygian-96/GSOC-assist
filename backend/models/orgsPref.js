const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orgsSchema = new Schema({
    org_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Organisation'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

module.exports = mongoose.model('OrgsPrefList', orgsSchema)