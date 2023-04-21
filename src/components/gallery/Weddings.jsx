import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import '../../assets/scss/Collages.css'

import P1 from '../images/Wedding/W1.jpeg'
import P2 from '../images/Wedding/W2.jpeg'
import P3 from '../images/Wedding/W3.jpeg'




// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <h2>Weddings</h2>
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
        
          </Swiper>
         <h1>That look on her face says, <br></br>"now i know exactly how Disney's Cinderella felt when she found her prince charming." </h1>
      <br></br>
      <br></br>
      <br></br>

      
    </>
  );
}
