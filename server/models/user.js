let mongoose = require('mongoose')
let Schema = mongoose.Schema
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