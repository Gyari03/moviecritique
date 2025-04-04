const {mongoose} = require('../config/db');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment:{
        type: String,
        required: true
    },
    score:{
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    movie:{
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;