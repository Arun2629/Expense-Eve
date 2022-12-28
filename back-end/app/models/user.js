const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Budget = require('./budget')
const {isEmail} = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        validate: {
            validator: function(value){
                return isEmail(value)
            },
            message: function(){
                return 'invalid email format'
            }
        }

    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 16,
    }
}, {timestamps: true})

//middleware
userSchema.pre('save', function(next) {
    const user = this

    bcrypt.genSalt(10)
        .then((salt) => {
            bcrypt.hash(user.password, salt)
                .then((encrypted) => {
                    user.password = encrypted
                    next()
                })
        })

})

userSchema.post('save', function(doc) {
    const user = doc
    const body = {
        userId: user._id
    }

    const budget = new Budget(body)

    budget.save()

})

const User = mongoose.model("User", userSchema)

module.exports = User
