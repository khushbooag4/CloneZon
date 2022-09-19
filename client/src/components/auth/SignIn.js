import React,{useState} from 'react';
import './SignIn.css';
import { Link, useHistory} from 'react-router-dom';

function SignIn() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPass] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();
        
        const res = await fetch("/register",{
          method : "POST",
          headers: {
           "Content-Type": "application/json"
          },
          body: JSON.stringify({
              "email": email,
              "password": password,
          })
        });
        const data = await res.json;
        if(data.status === 401 || !data){
          window.alert("User Successfully NOT Registered");
          console.log("Invalid")
        }
        else{
          window.alert("Login Successfully");
          console.log("Invalid")
  
          history.push("/");
        }
      };
    return (
        <div>
            <Link to = '/'><img src="/Images/logo1.jpg" className="logo" alt="" /></Link>
            <div className="container">
             <form method = "POST" className="details">
               <h1>Sign-In</h1>
               <label htmlFor="textF">Email or mobile phone number</label>
               <input id="textF" type="email" value={email} name="email" autoComplete="on" onChange={(e) => setEmail(e.target.value)}/>
               <label htmlFor="textF1">Enter Password</label>
               <input id="textF1" type="password" value={password} name="password"
               onChange={(e) => setPass(e.target.value)} />
               <button className="btn" onClick={handleLogin}>Continue</button>
               <p>By Continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.
                </span></p>
               <br />
               <Link className="help" href="#">Need help?</Link>
             </form>
            <hr />
            <Link to="/add"><button className="account btn" type="submit">Create your Amazon Account</button></Link>
            <hr />

            <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
           </div>
        </div>
    )
}

export default SignIn;
