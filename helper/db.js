const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://user:c1995_1062@ds245512.mlab.com:45512/chdb1', { useNewUrlParser: true })
    mongoose.connection.on('open', () => {
        console.log('Great.');
    });

    mongoose.connection.on('error', (err) => {
        console.log('Error', err);
    });

    mongoose.Promise = global.Promise;

}