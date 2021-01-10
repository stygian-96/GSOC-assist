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
    noOfAppearance: {
        type: Number
    },
    yearsOfAppearance: {
        type: [String]
    },
    noOfProjects: {
        type: Number
    },
    projetcs: {
        type: [mongoose.Schema.Types.ObjectId]
    }
})

module.exports = mongoose.model('Organisation', orgSchema)