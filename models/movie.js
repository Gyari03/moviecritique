const {mongoose} = require('../config/db');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Title:{
        type: String,
        required: true,
    },
    Genre:{
        type: String,
        required: true,
    },
    Director:{
        type: String,
        required: true,
    },
    Score:{
        type: Number,
        default: 0,
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;