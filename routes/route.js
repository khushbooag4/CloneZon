const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { emailValidate, passwordValidate } = require("../auth/validate");
const User = require("../models/User");
const bcrypt = require("bcrypt");

//router.post('/register',validateChecks,register);

router.post("/register", async (req, res) => {
  const { username, email, password, confirmpassword } = req.body;
  try {
    if (
      typeof email === "string" &&
      typeof password === "string" &&
      typeof confirmpassword === "string" &&
      email.length > 0 &&
      password.length > 6 &&
      confirmpassword === password &&
      emailValidate(email) &&
      passwordValidate(password)
    ) {
      console.log("Intials check done");
    }
    //Stoing Data in the DataBASE
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(401).send("Email exists");
    } else {
      const user = new User({ username, email, password, confirmpassword });
      console.log(user);
      await user.save();
      res.json("User Added");
    }
  } catch (err) {
    console.log(err);
  }
});
//Login the user
router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    if (
      email &&
      password &&
      emailValidate(email) &&
      passwordValidate(password)
    ) {
      const userLogin = await User.findOne({ email: email });
      console.log(userLogin , "data")
      if (userLogin) {
        const isMatch = await bcrypt.compare(password, userLogin.password);
        if (!isMatch) {
          res.status(200).send("Enter Correct Login Details");
        }
        //Token for JWT
        const token = jwt.sign(
          { userLogin },
          "4H699958924EBF5752RAA4B19393E",
          (err, token) => {
            console.log({ token: token });
          }
        );
        res.cookie("jwttoken", token, {
          //  expires = new Date(Date.now() + 2798000000),
          httpOnly: true,
        });
        console.log({ message: "User signup Success" });
        res.redirect("/");
      } else {
        res.status(401).send("Login Details Not Exists");
        res.json("Not Validated");
      }
    }
  } catch (err) {
    console.error(err);
  }
});

router.get("/details", (req, res) => {
  res.send("Router");
});

router.get("/validate", (req, res) => {
  res.send("Router");
});

//Logout Delte the account from the database
//@route DELELTE
//@desc /register:id //name //password
router.delete("/register/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) =>
      user.remove().then(() => {
        res.json("Account Successfully Deleted");
      })
    )
    .catch((err) => res.status(404).json("Invalid Id"));
});

module.exports = router;
