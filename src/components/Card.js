import { Grid } from '@mui/material'
import React from 'react'
import '../assets/scss/Home.css'
import { motion } from "framer-motion";
import P1 from '../assets/images/home/2.jpg'
import P2 from '../assets/images/home/3.jpg'
import P3 from '../assets/images/home/4.jpeg'
import P4 from '../assets/images/home/5.jpg'
import P5 from '../assets/images/home/6.jpg'
import P6 from '../assets/images/home/7.jpg'
import { Link } from 'react-router-dom';


const Card = () => {
  return (
    <>
    <div className="wrapper">

      <div className="innerWrapper">

        <Grid  
            container 
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1} 
            rowSpacing={4} 
            mt={5}
            mb={5}
            >
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className="card">
                <div className="cardTitle">
                  <h2>Photo Frames</h2>
                </div>
                <motion.div
                className="paper" 
                initial={{ scale: 0 }}
                animate={{ scale: 1.1 }}
                transition={{  delay: 0.3,
                  x: { duration: 1 },
                  default: { ease: "linear" } }}
                  style={{ backgroundImage:`url(${P1})` }}/>
                
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className="card">
                <div className="cardTitle">
                  <h2>Wedding Photography</h2>
                </div>
                <motion.div 
                className="paper"
                initial={{ scale: 0 }}
                animate={{ scale: 1.1 }}
                transition={{  delay: 0.5,
                  x: { duration: 1 },
                  default: { ease: "linear" } }}
                  style={{ backgroundImage:`url(${P2})` }}/>
                  
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className="card">
                <div className="cardTitle">
                  <h2>Cake Design</h2>
                </div>
                <motion.div 
                className="paper" 
                initial={{ scale: 0 }}
                animate={{ scale: 1.1 }}
                transition={{  delay: 0.7,
                  x: { duration: 1 },
                  default: { ease: "linear" } }}
                  style={{ backgroundImage:`url(${P3})` }}/>
              
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className="card">
                <div className="cardTitle">
                  <h2>Mugs Printing</h2>
                </div>
                <motion.div 
                className="paper"
                initial={{ scale: 0 }}
                animate={{ scale: 1.1 }}
                transition={{  delay: 0.9,
                  x: { duration: 1 },
                  default: { ease: "linear" } }}
                  style={{ backgroundImage:`url(${P4})` }}
                />
             
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className="card">
                <Link to="/gallery">

                  <motion.div 
                  className="paper"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.1 }}
                  transition={{  delay: 0.9,
                    x: { duration: 1 },
                    default: { ease: "linear" } }}
                    style={{ backgroundImage:`url(${P5})` }}
                  />
                </Link>
             
              </div>
            </Grid>
            {/* <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className="card">
                <Link to="/product">

                  <motion.div 
                  className="paper"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.1 }}
                  transition={{  delay: 0.9,
                    x: { duration: 1 },
                    default: { ease: "linear" } }}
                    style={{ backgroundImage:`url(${P6})` }}
                  />
                </Link>
             
              </div>
            </Grid> */}
        </Grid>
      </div>
    </div>
     
    </>
  )
}

export default Card
