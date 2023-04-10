import { Grid } from '@mui/material'
import React from 'react'

const SectionContactus = () => {
  return (
    <>
      <div className="wrapper">
              <div className="innerWrapper-contact">
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
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                          <h1> contact </h1>
                      </Grid>
                      
            </Grid >

        </div>
          </div>
          
    </>
  )
}

export default SectionContactus
