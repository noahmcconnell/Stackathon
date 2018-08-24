const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        require: true,
        ref:"User"
    },
    timestamp: {
        type: Date,
        require: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        required: Schema.Types.ObjectId,
        ref:"Category"

    },
    correctAnswerId: {
        type: Schema.Types.ObjectId,
        ref: 'CorrectAnswer',
        required: false
    }
});

module.exports = mongoose.model('Post', schema);