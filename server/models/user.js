const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', schema);
