const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('movie', movieSchema);