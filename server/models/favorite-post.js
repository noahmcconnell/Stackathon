const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  postId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Post'
  }
});

module.exports = mongoose.model('FavoritePost', schema);
