let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Answer'

let schema = new Schema({
    content: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true,
        ref:"User"
    },
    timestamp: {
        type: String,
        require: true
    },
    postId: {
        type: ObjectId,
        required: true,
        ref:"Post"
    }
})
module.exports = mongoose.model(schemaName,schema)
