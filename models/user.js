const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const validate = require('mongoose-validator')
const { hashPassword } = require('../helpers/bcrypt')

const isEmail =
[
    validate({
        validator: 'isEmail',
        message: 'Email Format Is Incorrect',
        httpStatus: 400
    })
]

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email Is Required'],
        validate: isEmail
    },
    password: {
        type: String,
        required: [true, 'Password Is Required']
    }
})

userSchema.pre('save', function(next) {
    this.password = hashPassword(this.password)
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User