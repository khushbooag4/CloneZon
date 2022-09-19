const {emailValidate , passwordValidate} = require('./validate');


const validateChecks = (res,req) => {
    const {email , password , confirmpassword} = req.body;
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
             return true;
         }
    else{
        return false;
    }
};

module.exports = validateChecks;