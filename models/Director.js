const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directorSchema = new Schema({
    name: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('director', directorSchema);