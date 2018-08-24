let Schema = mongoose.Schema
let mongoose = require('mongoose')
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