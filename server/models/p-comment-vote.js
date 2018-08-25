const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  postCommentId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'PostComment'
  },
  direction: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('pCommentVote', schema);
