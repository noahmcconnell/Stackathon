let Schema = mongoose.Schema
let mongoose = require('mongoose')
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Post'

let schema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    userId: {
        type: ObjectId
    },
    timestamp: {
        type: ObjectId
    },
    correctAnswerId: null
})