let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Favorite Post'

let schema = new Schema({
    userId: {
        type: ObjectId,
        require: true
    },
    postId: {
        type: ObjectId,
        require: true
    }
})