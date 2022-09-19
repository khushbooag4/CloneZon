var mongoose = require("mongoose");

try {
  mongoose.connect(
    "mongodb+srv://khushboo:1234@onair.bb9ktly.mongodb.net/?retryWrites=true&w=majority"
  );

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
} catch (error) {
  console.log(error);
}

module.exports = mongoose;
