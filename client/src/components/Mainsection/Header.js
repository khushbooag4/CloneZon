import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import {Card} from 'antd';
import './Header.css';
import CarouselSlider from '../utils/Carousel';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Header() {
    const data = [
      {
        image:"/Images/screenshot.jpg",
        alt:"",
      },
      {
        image:"/Images/screenshot1.jpg",
        alt:"",
      },
      {
        image:"/Images/screenshot2.jpg",
        alt:"",
      },
      {
        image:"/Images/screenshot4.jpg",
        alt:"",
      },
      {
        image:"/Images/screenshot5.jpg",
        alt:"",
      },

    ];
    return (
      <>
      <div style= {{width :"100%"}}>
        {/* <div><span></span></div> */}
        <Carousel 
          data={data}
          time={5000}
          width="100%"
          height="500px"
          automatic={true}
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={false}
          thumbnailWidth="100px"
          style={{
            // maxHeight: "500px",
            objectFit: "contain",
            margin: "px auto",
            width:"100%",
            padding:"0 20px"
          }}
          />
          <Card>
            <div className="card">
                <div className="sub-card">
                  {/* <div className="card-details"> */}
                   <h1>Up to 70% off | Electronics</h1>
                   <h1>clearance store</h1>
                   <div className="img">
                   <img src="/Images/Laptop1.jpg" alt="" />
                   </div>
                   <Link href="#">See More</Link>
                 </div>
          
                <div className="sub-card">
                   <h1>Festive latest launches</h1><br />
                   <div className="img">
                   <img src="/Images/Laptop.jpg" alt="" />
                   </div>
                   <Link href="#">See More</Link>
                </div>
                <div className="sub-card">
                <h1>Revamp your home in style</h1>
                   <div className="img">
                   <img src="/Images/La.jpg" alt="" />
                   </div>
                   <Link href="#">See More</Link>
                </div>
                <div className="sub-card">
                   <div>
                      <h1>Sign in for your best experience</h1>
                      <button className="btn">Sign in securely</button>
                   </div>
                   {/* <img src="" alt="" /> */}

                {/* </div> */}
            </div>
            </div>

            </Card>
           
            {/* Scrollable Carousel */}
            <img src="/Images/middle.jpg" alt="" className="middle-img" />
            <CarouselSlider />
            <br />
            <br />
            <div className="footer">
               <Footer />
            </div>
             </div>
          </>
    )
}

export default Header
