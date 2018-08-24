let Schema = mongoose.Schema
let mongoose = require('mongoose')
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Post'

let schema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    userId: {
        type: ObjectId,
        require: true
    },
    timestamp: {
        type: ObjectId,
        require: true
    },
    correctAnswerId: null
})