import { Grid } from '@mui/material'
import React from 'react'
import '../assets/scss/Home.css'
import { motion } from "framer-motion";


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
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <div className="card">
                <motion.div
                className="paper" 
                initial={{ scale: 0 }}
                animate={{ scale: 1.1 }}
                transition={{  delay: 0.3,
                  x: { duration: 1 },
                  default: { ease: "linear" } }}
                style={{ backgroundImage:`url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}/>
                
              </div>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <div className="card">
                <motion.div 
                className="paper"
                initial={{ scale: 0 }}
                animate={{ scale: 1.1 }}
                transition={{  delay: 0.5,
                  x: { duration: 1 },
                  default: { ease: "linear" } }}/>
               
              </div>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <div className="card">
                <motion.div 
                className="paper" 
                initial={{ scale: 0 }}
                animate={{ scale: 1.1 }}
                transition={{  delay: 0.7,
                  x: { duration: 1 },
                  default: { ease: "linear" } }}
                 style={{ backgroundImage:`url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}/>
              
              </div>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <div className="card">
                <motion.div 
                className="paper"
                initial={{ scale: 0 }}
                animate={{ scale: 1.1 }}
                transition={{  delay: 0.9,
                  x: { duration: 1 },
                  default: { ease: "linear" } }}
                />
             
              </div>
            </Grid>
        </Grid>
      </div>
    </div>
     
    </>
  )
}

export default Card
