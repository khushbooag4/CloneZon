import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Error() {
    return (
        <>
           <div className="error-container">
              <img src="Images/logo1.jpg" alt="img" />
              <div className="error-text">
                 <h1>Looking for something?</h1>
                  <p>We're sorry. The Web address you entered is not a functioning page on our site</p>
                  <br />
                  <h2>Go to Amazon.in's <Link to ="/">Home</Link> Page</h2>
              </div>
           </div>
        </>
    )
}

export default Error
