import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import '../../assets/scss/Collages.css'

import P1 from '../images/Family/FAMILY1.jpg'
import P2 from '../images/Family/FAMILY2.jpg'
import P3 from '../images/Family/FAMILY3.jpg'
import P4 from '../images/Family/FAMILY4.jpg'




// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <h2>Family</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={P1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P4} />
        </SwiperSlide>
        
          </Swiper>
          <br></br>
          <h1>Capture your Family Moments !
              <br></br>
              there are,<br></br> Forever Memorable
          </h1>
      <br></br>
      <br></br>
      <br></br>

      
    </>
  );
}
