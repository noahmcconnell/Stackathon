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
    type: Date,
    required: true
  },
  answerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Answer'
  }
});

module.exports = mongoose.model('AnswerComment', schema);
