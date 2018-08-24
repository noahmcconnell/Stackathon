let Schema = mongoose.Schema
let mongoose = require('mongoose')
let ObjectId = Schema.Types.ObjectId
let schemaName = 'User'

let schema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})