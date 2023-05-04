import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import '../../assets/scss/Mug_print.css'


import P1 from '../products/images/mug/1.JPG'
import P2 from '../products/images/mug/2.JPG'
import P3 from '../products/images/mug/3.jpg'
import P4 from '../products/images/mug/color/1.jpg'
import P5 from '../products/images/mug/color/2.jpg'
import P6 from '../products/images/mug/color/3.png'




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
          <h1>Mug Printing</h1>

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
                              
          
          
        </Swiper>
      </div>  
                  </Grid>
                  
        <Grid item lg={8} md={8} sm={10} xs={6}>
        <div className="memory">
                          Memory mugs
                          <div className="color">
                              Choose your feel Colour
                          </div>
                      </div>
                      <div className="mugColor">
                          <br></br>
                          <img src={P4} width={50} height={50} />
                          
                      </div>
                      <div className="color">
                              Black mug
                      </div>
                      
                      <div className="mugColor-w">
                          <br></br>
                          <img src={P5} width={55} height={55} />
                          
                      </div>
                      <div className="color-White">
                              White mug
                      </div>
                      <div className="magic-mug">
                          <br></br>
                          <img src={P6} width={55} height={55} />  
                      </div>
                      <div className="color-magic">
                              Magic mug
                      </div>
        </Grid>
      
        </Grid>
        </div>

      
    </>
  );
}
