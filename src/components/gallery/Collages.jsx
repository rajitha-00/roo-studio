import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import '../../assets/scss/Collages.css'
import '../../assets/scss/Gallery.css'

import P1 from '../assets/images/gallery/1.jpg'
import P2 from '../assets/images/gallery/2.jpg'
import P3 from '../assets/images/gallery/3.jpg'
import P4 from '../assets/images/gallery/4.jpg'
import P5 from '../assets/images/gallery/5.jpg'



// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Grid, Typography } from "@mui/material";

export default function App() {
  return (
    <>
    <Grid container
     justifyContent="center"
     alignItems="center"
     spacing={1} 
    >
      <Grid item lg={8} md={8} sm={10} xs={12}>

        <div className="swiperHeader">
          <h1>Collage</h1>

        </div>
      </Grid>
      <Grid item lg={8} md={8} sm={10} xs={12}>
      <div className="containerSwip">
      
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
          pagination={false}
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
      </div>  
      </Grid>
      <Grid item lg={8} md={8} sm={10} xs={6}>
        <div className="swiperFooter">
          <Typography>Collect your memory like a 'collage' feel free to Contact Studio roo </Typography>
        </div>
      </Grid>
    </Grid>

      
    </>
  );
}
