import { Box, Button, Grid } from '@mui/material'
import '../../assets/scss/Slide.css'
import React from 'react'
import Collages from './Collages'

const Slide = () => {
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
              <div className='galleryBTN' > 
              <div className='nameG' >
                          <h2>Gallery</h2>
                </div>
                <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTextField-root': { width: '25ch' },
            }}
          >
                <Button variant="outlined">Collages</Button>
                <Button variant="outlined">Weddings</Button>
                <Button variant="outlined">Family</Button>

                  </Box>
                     </div>     
 
                      </Grid>
          </Grid >
          
        </div>
      </div>
      
      <Collages />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
          
    </>
  )
}

export default Slide
