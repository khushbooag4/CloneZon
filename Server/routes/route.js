const express = require('express');
const router = express.Router();
const {emailValidate , passwordValidate} = require('../auth/validate');
const register = require('../auth/register');
const conn  = require('../db/Database');
const User = require('../models/User');
const bcrypt = require('bcryptjs');


//router.post('/register',validateChecks,register);

router.post('/register' , async(req,res) => {
    const {username,email , password , confirmpassword} = req.body;
    try {
        if(
            typeof email === 'string' &&
            typeof password === 'string' &&
            typeof confirmpassword === 'string' &&
             email.length > 0 &&
             password.length > 8 &&
             confirmpassword === password &&
             emailValidate(email) &&
             passwordValidate(password) )
             {
                 console.log("Intials check done");
             }
             //Stoing Data in the DataBASE
            const userExist = await User.findOne({email : email});
            
            if(userExist){
                return res.status(401).send("Email exists"); 
                }
            const user = new User({username, email , password, confirmpassword});
            console.log(user);
            await user.save();
            
        } 
        catch (err) {
        console.log(err);
       }   
})

router.post('/auth', async(req,res) => {
     console.log(req.body);
     try {
         const { email , password} = req.body;
         if(email && password && emailValidate(email) && passwordValidate(password)){
              const userLogin = await User.findOne({email : email});
              console.log(userLogin.password);
              //res.json({message: "User signup Success"})
              const isMatch = await bcrypt.compare(password, userLogin.password, (err) => {
                 if (err)
                     console.error(err);
                 console.log("Login form Validation");
             })
         }
         else{
             res.status(401).send("Enter Correct Details")
         }
     } catch (err) {
         console.error(err);
     }

});

router.get('/details',(req,res) => {
    res.send('Router')
});

router.get('/validate',(req,res) => {
    res.send('Router')
});



module.exports = router;