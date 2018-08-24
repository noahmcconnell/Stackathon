let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Post'

let schema = new Schema({
    name: {
        type: String,
        require: true
    }
})