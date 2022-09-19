import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
   
    return (
        <>
        <nav>
          <div className="navbar">
              <Link to='/'>
                <img src="/Images/logo.jpg" alt="" className="nav-logo"/>
              </Link>
              <div>
                  <div className="location">
                     <i className="fas fa-map-marker-alt fa-lg"></i>
                     <div>
                     <span className="subtext">Hello</span>
                     <h4>Select your address</h4>
                     </div>
                  </div>
             </div>
              <div className="search">
                 <input type="text" className="search"></input>
                 <i className="fas fa-search fa-lg" ></i>
              </div>
              <div>
              
                 <div className="location">
                 
                     <button><img src="/Images/india.png" className="india-img dropbtn" alt=""/></button>
                     <i class="fas fa-caret-down"></i>
                  
                  </div>
             </div>
              <div>
                  <div className="location">
                     <Link to="/auth" className="link">
                     <p className="subtext">Hello,Sign in</p>
                     <h4>Accounts & Lists</h4>
                     </Link>
                     <i class="fas fa-caret-down"></i>
                  </div>
             </div>
             <div>
                  <div className="location">
                     <div>
                     <p className="subtext">Return</p>
                     <h4>&Orders</h4>
                     </div>
                     
                  </div>
             </div>
             <div>
                  <div className="location">
                     <img className="cart-img" src="/Images/cart.jpg" alt="" />
                  </div>
             </div>

                
          </div>
       
       
       <header className="header">
              <div className="subtext">
                    <i className="fas fa-bars"></i>
                    <p>All</p>
              </div>
              <div className="subtext">
                    <p>Mobiles</p>
              </div>
              <div className="subtext">
                    <p>BestSellers</p>
              </div>
              <div className="subtext">
                    <p>Fashion</p>
              </div>
              <div className="subtext">
                    <p>Electronics</p>
              </div>
              <div className="subtext">
                    <p>CustomerService</p>
              </div>
              <div className="subtext">
                    <p>AmazonPay</p>
              </div>
              <div className="subtext">
                    <p>Prime</p>
                    <i class="fas fa-caret-down"></i>
              </div>
              <div className="subtext">
                    <p>Today'sDeals</p>
                
              </div>
              <div className="subtext">
                    <p>NewReleases</p>
              </div>
              <div className="subtext">
                    <p>Computers</p>
              </div>
              <div className="subtext">
                    <p>Home&Kitchen</p>
              </div>
              

              <div>
              <div className="header-img">
                   <img src="/Images/bellbottom.jpg" alt="" />
              </div>
              </div>
       </header>
       </nav> 
       </>
    )
}

export default Navbar
