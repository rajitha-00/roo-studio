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
import { Grid, Typography } from "@mui/material";

export default function App() {
  return (
    <>
      
      <div className="background">
      <Grid container
     justifyContent="center"
     alignItems="center"
     spacing={1} 
    >
      <Grid item lg={8} md={8} sm={10} xs={12}>

        <div className="swiperHeader">
          <h1>Weddings</h1>

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
          </div>  
      </Grid>

      <Grid item lg={8} md={8} sm={10} xs={6}>
        <div className="swiperFooter">
          <Typography>That look on her face says,"now i know exactly how Disney's Cinderella felt 
         when she found her prince charming."</Typography>
        </div>
      </Grid>
        </Grid>
      </div>

      
    </>
  );
}
