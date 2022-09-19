import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import {Card} from 'antd';
import './Header.css';
import CarouselSlider from '../utils/Carousel';
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import Slider from '../utils/Slider';

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
                   <h1>Up to 70% off | Electronics clearance store</h1>
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
               </div>
            </div>
            </Card>
            <Slider />
            {/* Scrollable Carousel */}
            <img src="/Images/middle.jpg" alt="" className="middle-img" />
            
            <CarouselSlider />
            <br />
            <br />
            <Card>
            <div className="card">
                <div className="sub-card">
                   <h1>Start a hobby in photography</h1>
                   <div className="img1">
                   <img src="/Images/slider-main3.jpg" alt="" />
                   </div>
                   <Link href="#">See More</Link>
                 </div>
                <div className="sub-card">
                   <h1>Up to 60% off | Top deals on Stationery supplies</h1>
                   <div className="img1">
                   <img src="/Images/slider-main2.jpg" alt="" />
                   </div>
                   <Link href="#">See More</Link>
                </div>
                <div className="sub-card">
                   <h1>JOIN PRIME today at ₹999/year</h1>
                   <div className="img1">
                   <img src="/Images/slider-main.jpg" alt="" />
                   </div>
                   <Link href="#">See More</Link>
                </div>
                <div className="sub-card">
                 <h1>Topmost Collection to make wedding special</h1>
                   <div className="img1">
                   <img src="/Images/slider-main1.jpg" alt="" />
                   </div>
                   <Link href="#">See More</Link>
                </div></div></Card>
                <footer><Footer /></footer>
               </div>
               {/* <Footer /> */}
          </>
    )
}

export default Header
