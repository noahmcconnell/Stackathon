let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Vote'

let schema = new Schema({
    user: {
        type: ObjectId,
        required: true
    },
    post: {
        type: ObjectId,
        required: true
    },
    direction: {
        type: 0,
        required: true
    }
})