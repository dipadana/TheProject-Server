const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const fileSchema = new Schema({
    url: {
        type: String,
        required: [true, 'URL Is Required']
    },
    user_id: {
        type: ObjectId
    },
    rating: [Number]
})


const File = mongoose.model('File', fileSchema)
module.exports = File