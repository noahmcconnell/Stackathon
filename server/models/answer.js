let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Answer'

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
    postId: {
        type: ObjectId,
        require: true
    }
})