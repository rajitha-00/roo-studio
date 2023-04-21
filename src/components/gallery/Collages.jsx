import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import '../../assets/scss/Collages.css'

import P1 from '../assets/images/gallery/1.jpg'
import P2 from '../assets/images/gallery/2.jpg'
import P3 from '../assets/images/gallery/3.jpg'
import P4 from '../assets/images/gallery/4.jpg'
import P5 from '../assets/images/gallery/5.jpg'



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <h2>Collage</h2>
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
        <SwiperSlide>
          <img src={P5} />
        </SwiperSlide>
        
      </Swiper>
      <br></br>
      <h1>Collect your memory like a 'collage' feel free to <br></br>Contact Studio roo </h1>
      <br></br>
      <br></br>

      
    </>
  );
}
