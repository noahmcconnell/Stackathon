const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  AnswerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Answer'
  },
  direction: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('answerVote', schema);
