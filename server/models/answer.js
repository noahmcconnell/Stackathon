const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  content: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  timestamp: {
    type: String,
    require: true
  },
  postId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Post'
  }
});

module.exports = mongoose.model('Answer', schema);
