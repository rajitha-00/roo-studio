import { Grid } from '@mui/material'
import React from 'react'
import '../../assets/scss/Home.css'
import { motion } from "framer-motion";
import P1 from '../../assets/images/products/moreProduction/2.JPG'
import P2 from '../../assets/images/products/moreProduction/3.JPG'

import { Link } from 'react-router-dom';

const MoreProductsCard = () => {
  const handleMouseEnter = (event) => {
    event.currentTarget.style.backgroundImage = `url(${P2})`;
  };
  
  const handleMouseLeave = (event) => {
    event.currentTarget.style.backgroundImage = `url(${P1})`;
  };

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
                  <h2>Re Productions</h2>
                </div>
                <motion.div
                  className="paper"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.1 }}
                  transition={{
                    delay: 1,
                    x: { duration: 1 },
                    default: { ease: "linear" },
                  }}
                  style={{ backgroundImage: `url(${P1})` }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default MoreProductsCard;
