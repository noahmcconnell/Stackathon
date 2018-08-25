const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true
      },
      post: {
        type: Schema.Types.ObjectId,
        required: true
      },
      direction: {
        type: Boolean,
        required: true
      }
});

module.exports = mongoose.model('postVote', schema);