let mongoose = require('mongoose')
let Schema = mongoose.Schema
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
    categoryId: {
        type: ObjectId,
        require: ObjectId
    },
    correctAnswerId: null
})