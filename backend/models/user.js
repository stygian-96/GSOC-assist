const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        githubId: {
            type: String,
            required: true
        },
        profile_avatar: {
            type: String,
            required: true
        },
        // techStack: {
        //     type: [String],
        //     required: false,
        // },
        // orgs_prefList: {
        //     type: [mongoose.Schema.Types.ObjectId],
        //     required: false,
        // }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
