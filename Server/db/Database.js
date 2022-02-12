var mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://localhost:27017/amazondb');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
} catch (error) {
    console.log(error);
}

module.exports = mongoose;