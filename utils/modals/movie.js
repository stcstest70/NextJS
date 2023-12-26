const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    des:{
        type: String,
        required:true
    },
});

const MovieModal = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

module.exports = MovieModal;