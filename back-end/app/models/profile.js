const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({

        name: {
            type: String,

        },
        avatar: {
            type: String
        },
        occupation: {
            type: String
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    
}, {timestamps: true})


const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile