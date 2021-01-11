const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orgSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    orgLink: {
        type: String,
        required: true
    },
    orgGsocLink:{
        type: String,
        required: true
    },
    noOfAppearance: {
        type: Number
    },
    yearsOfAppearance: {
        type: [String]
    },
    techStack: {
        type: [String]
    },
    noOfProjects: {
        type: Number
    },
    projetcs: {
        type: [mongoose.Schema.Types.ObjectId]
    }
})

exports.orgList2020 = mongoose.model('2020org', orgSchema)
exports.orgList2019 = mongoose.model('2019org', orgSchema)
exports.orgList2018 = mongoose.model('2018org', orgSchema)
exports.orgList2017 = mongoose.model('2017org', orgSchema)
exports.orgList2016 = mongoose.model('2016org', orgSchema)