const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


//User Schema
const UserSchema = new mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirmpassword:{
        type: String,
        required: true
    }    
});

UserSchema.pre('save' ,async function(next){
        this.password = await bcrypt.hash(this.password,10)
        this.confirmpassword = await bcrypt.hash(this.confirmpassword,10)
    next();
 });

const User =  mongoose.model('User',UserSchema);

module.exports =  User;



//Hash the PASSOWoRD //this ke saath array function work nhi krtaa

//To call by id
// module.exports.getUserByid = function(id,callback){
//     User.findById(id,callback);
// }

// module.exports.getUserByName = function(username,callback){
//     const query = {username : username}
//     User.findOne(query,callback);
// }