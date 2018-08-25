const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
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
    type: Number,
    required: true,
    default: Date.now
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: Schema.Types.ObjectId,
    ref: 'Category'
  },
  correctAnswerId: {
    type: Schema.Types.ObjectId,
    ref: 'CorrectAnswer',
    required: false
  }
});

module.exports = mongoose.model('Post', schema);
