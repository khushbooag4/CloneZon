import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <div>
            <Link to = '/'><img src="/Images/logo1.jpg" className="logo" alt="" /></Link>
            <div className="container">
             <div className="details">
               <h1>Sign-In</h1>
               <label htmlFor="textF">Email or mobile phone number</label>
               <input id="textF" type="email" value="" />
               <button className="btn">Continue</button>
               <p>By Continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.
                </span></p>
               <br />
               <Link className="help" href="#">Need help?</Link>
             </div>
            <hr />
            <Link to="/register"><button className="account btn" type="submit">Create your Amazon Account</button></Link>
            <hr />

            <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
           </div>
        </div>
    )
}

export default SignIn;
