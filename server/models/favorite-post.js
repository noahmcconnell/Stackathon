let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Favorite Post'

let schema = new Schema({
    userId: {
        type: ObjectId,
        required: true,
        ref:"User"
    },
    postId: {
        type: ObjectId,
        required: true,
        ref:'Post'
    }
})
module.exports = mongoose.model(schemaName,schema)
