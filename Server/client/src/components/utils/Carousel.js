import React from "react";
import Carousel from "react-elastic-carousel";
import "./Carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 400, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CarouselSlider() {
  return (
      <div className="carousel">
        <h1>Up to 80% off | Bestselling home furniture</h1>
        <Carousel breakPoints={breakPoints}>
          <img src="/Images/menu.jpg" className="slider-img" alt="" />
          <img src="/Images/menu1.jpg" alt=""/>
          <img src="/Images/menu2.jpg" alt=""/>
          <img src="/Images/menu3.jpg" alt="" />
          <img src="/Images/menu4.jpg" alt=""/>
          <img src="/Images/menu8.jpg" alt=""/>
          <img src="/Images/menu6.jpg" alt=""/>
          <img src="/Images/menu7.jpg" alt=""/>
       </Carousel>
      </div>
  );
}
 
export default CarouselSlider;