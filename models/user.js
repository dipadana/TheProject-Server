const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const validate = require('mongoose-validator')

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
        required: [true, 'Email Is Required'],
        validate: isEmail
    },
    password: {
        type: String,
        required: [true, 'Password Is Required']
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User