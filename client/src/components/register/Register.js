import React,{useState} from 'react';
import './Register.css';
import { Link, useHistory } from 'react-router-dom';

function Register() {
   const history  = useHistory();
   const[user,setUser] = useState({
     name: "" , email : "" , password: "" , confirmpassword : ""
   });
   console.log(user);
   let name,value;
   const handleInputs = (e) => {
        e.preventDefault();
        console.log(e);
        name = e.target.name;
        value = e.target.value;
      setUser({...user, [name] : value});

   };
    const handleChange = async(e) => {
      e.preventDefault();
      const { name , email , password , confirmpassword} = user;
      
      const res = await fetch("/register",{
        method : "POST",
        headers: {
         "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username" : name,
            "email": email,
            "password": password,
            "confirmpassowrd":confirmpassword
        })
      });
      const data = await res.json;
      if(data.status === 401 || !data){
        window.alert("User Successfully NOT Registered");
        console.log("Invalid")
      }
      else{
        window.alert("User Successfully Registered");
        console.log("Invalid")

        history.push("/auth");
      }
    };

    return (
        <div>
            <Link to = '/'><img src="/Images/logo1.jpg" className="logo" alt=" " /></Link>
            <div className="container">
             <div className="details">
               <h1>Create Your Account</h1>
               <form method="POST">
               <label htmlFor="textF">Name</label>
               <input id="textF" type="email" value={user.name} 
                onChange = {handleInputs} name="name" />
               <br />
               <label htmlFor="textF">Email Address</label>
               <input id="textF" type="email" value={user.email} 
                onChange = {handleInputs} name="email" />
               <br />
               <label htmlFor="textF">Password</label>
               <input id="textF" type="password" value={user.password} 
                onChange = {handleInputs} name="password" />
               <br />
               <label htmlFor="textF">Confirm Password</label>
               <input id="textF" type="password" value={user.confirmpassword} 
                onChange = {handleInputs} name="confirmpassword" />
               </form>
               <button className="btn" onClick={handleChange}>Continue</button>
               <p>By Continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.
                </span></p>
               <br />
               <Link className="help" href="#">Need help?</Link>
            
             </div>
           </div>
        </div>
    )
}

export default Register;

