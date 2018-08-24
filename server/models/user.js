let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'User'

let schema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    
})
module.exports = mongoose.model(schemaName,schema)