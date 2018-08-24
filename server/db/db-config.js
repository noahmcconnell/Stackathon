let mongoose = require('mongoose')
const connectionString = 'mongodb://mtd1996:chewman3125@ds018498.mlab.com:18498/stackathon'
let connection = mongoose.connection

mongoose.connection(connectionString, {
    userNewUrlParster: true
})

connection.on('error', err => {
    console.log("ERROR: ", err)
})

connection.once('open', () => {
    console.log("Connected to Database")
})