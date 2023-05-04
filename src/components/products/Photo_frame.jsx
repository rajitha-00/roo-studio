import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import '../../assets/scss/Product_img.css'


import P1 from '../products/images/1.JPG'
import P2 from '../products/images/2.jpg'
import P3 from '../products/images/3.jpg'
import P4 from '../products/images/4.JPG'



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
          <h1>Photo Frames</h1>

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
                  <img src={P2} />
                  <h3 className="fB">Hanging wall photo frames</h3>
                  <h6 className="fB2">Choose your frame size
                    <br></br>20 * 24
                    <br></br>16 * 20
                    <br></br>12 * 15
                    <br></br>11 * 14
                    
                  </h6>
                  <h6 className="fB3">Choose Your Colour </h6>
                  <div className="box-w"></div>
                  <div className="box-B"></div>
                  <div className="box-Br"></div>
                  <div className="box-text">Imagine Your Need</div>
                  <div className="box-contact">Contact</div>
                  
                  
                </SwiperSlide>
                



                <SwiperSlide>
                  
                  <img src={P1} />
                  <h3 className="fB">Hanging wall photo frames</h3>
                  <h6 className="fB2">Choose your frame size
                    <br></br>10 * 12
                    <br></br>8 * 10
                    <br></br>5 * 10
                    <br></br>8 * 8
                  </h6>
                  <h6 className="fB3">Choose Your Colour </h6>
                  <div className="box-w"></div>
                  <div className="box-B"></div>
                  <div className="box-Br"></div>
                  <div className="box-text">Imagine Your Need</div>
                  <div className="box-contact">Contact</div>

                </SwiperSlide>
                
                <SwiperSlide>
                  
                  <img src={P3} />
                  
                  <h3 className="fB">Hanging wall photo frames</h3>
                  <h6 className="fB2">Choose your frame size
                    <br></br>10 * 12
                    <br></br>8 * 10
                    <br></br>5 * 10
                    <br></br>8 * 8
                  </h6>
                  <h6 className="fB3">Choose Your Colour </h6>
                  <div className="box-w"></div>
                  <div className="box-B"></div>
                  <div className="box-Br"></div>
                  <div className="box-text">Imagine Your Need</div>
                  <div className="box-contact">Contact</div>
                  
                </SwiperSlide>
                
                <SwiperSlide>
                  
                  <img src={P4} />
                  <h3 className="fB">Hanging wall photo frames</h3>
                  <h6 className="fB2">Choose your frame size
                    <br></br>10 * 12
                    <br></br>8 * 10
                    <br></br>5 * 10
                    <br></br>8 * 8
                  </h6>
                  <h6 className="fB3">Choose Your Colour </h6>
                  <div className="box-w"></div>
                  <div className="box-B"></div>
                  <div className="box-Br"></div>
                  <div className="box-text">Imagine Your Need</div>
                  <div className="box-contact">Contact</div>
                  
                </SwiperSlide>
                
          
          
        </Swiper>
      </div>  
      </Grid>
        </Grid>
        </div>

      
    </>
  );
}
