let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Answer Comment'

let schema = new Schema({
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
    answerId: {
        type: ObjectId,
        require: true
    }
})