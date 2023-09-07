const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
//   this.confirmpassword = await bcrypt.hash(this.confirmpassword, 10);
  next();
});

//Token
UserSchema.method.generateAuthToken = async function () {
  try {
    let token = jwt.sign(
      { _id: this._id },
      "4H699958924EBF5752RAA4B19393E",
      async (err, token) => {
        this.tokens = this.token.concat({ token: token });
        await this.save();
        return token;
      }
    );
  } catch (err) {
    console.error(err);
  }
};
const User = mongoose.model("User", UserSchema);

module.exports = User;

//Hash the PASSOWoRD //this ke saath array function work nhi krtaa

//To call by id
// module.exports.getUserByid = function(id,callback){
//     User.findById(id,callback);
// }

// module.exports.getUserByName = function(username,callback){
//     const query = {username : username}
//     User.findOne(query,callback);
// }
