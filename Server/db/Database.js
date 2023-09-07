var mongoose = require("mongoose");
require("dotenv").config();

try {
  mongoose.connect(
    "mongodb+srv://khushboo123:ukp123@cluster0.cfm7v.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
} catch (error) {
  console.log(error);
}

module.exports = mongoose;
