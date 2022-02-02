var mongoose = require('mongoose');

try {
    mongoose.connect(process.env.DATABASE_URL);

    var db = mongoose.connection;
    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
} catch (error) {
    console.log(error);
}

module.exports = mongoose;