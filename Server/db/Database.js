const mongoose = require('mongoose');


const uri = "mongodb+srv://khushboo123:ukp123@cluster0.cfm7v.mongodb.net/amazondb?retryWrites=true&w=majority";

//Connection to Database
const conn = mongoose.connect(uri).then( (err) => {
  try {
    console.log("MonggoDb connected Yay")
  } catch (error) {
    console.error(err);
  }
})

module.exports = conn;