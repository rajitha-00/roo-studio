import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import '../../assets/scss/Mug_print.css'


import P1 from '../products/images/Cake/1.jpg'
import P2 from '../products/images/Cake/2.jpg'
import P3 from '../products/images/Cake/3.jpg'
import P4 from '../products/images/Cake/4.jpeg'



// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Grid, Typography } from "@mui/material";

export default function App() {
  return (
    <>
      <div className="background-frame">
    <Grid container
     justifyContent="center"
     alignItems="center"
     spacing={1} 
    >
      <Grid item lg={8} md={8} sm={10} xs={12}>

        <div className="swiperHeader">
          <h1>Cake Designs</h1>

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
                                  <div className="box-contact">Contact</div>
                              </SwiperSlide>
                              
                              <SwiperSlide>  
                                  <img src={P2} />
                                  <div className="box-contact">Contact</div>  
                              </SwiperSlide>
                              
                              <SwiperSlide> 
                                  <img src={P3} />
                                  <div className="box-contact">Contact</div>
                              </SwiperSlide>

                              <SwiperSlide> 
                                  <img src={P4} />
                                  <div className="box-contact">Contact</div>
                              </SwiperSlide>
                              
          
          
        </Swiper>
      </div>  
                  </Grid>
                  
                  <Grid item lg={8} md={8} sm={10} xs={6}>
        <div className="memory">
                          Celebration Cake Designs
                          <div className="color">
                              Customize cake designs
                          </div>

                          <div className="cake">
                              <br></br>
                              Thank your cake designs<br></br>
                              Guess you colors<br></br>
                              image your character<br></br>
                              we make your cake for <span className="you">you</span>  !
                          </div>
        </div>
      </Grid>

      
        </Grid>
        </div>

      
    </>
  );
}
