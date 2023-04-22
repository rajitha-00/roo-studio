import { Box, Button, Grid } from '@mui/material'
import '../../assets/scss/Gallery.css'
import React from 'react'

const Slide = () => {
  return (
    <>

      <Grid
        container 
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1} 
        rowSpacing={4} 
        mt={5}
        mb={5}
      >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className="btnWrapper">

            <div className='galleryBTN' >   
              <Button variant="outlined">Collages</Button>   
            </div> 
            <div className="galleryBTN">
            
              <Button variant="outlined">Weddings</Button>
            </div>  
            <div className="galleryBTN">
              <Button variant="outlined">Family</Button>

            </div>  
          </div>
        </Grid>
      </Grid >
      
    </>
  )
}

export default Slide
