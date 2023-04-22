import { Box, Button, FormControl, Grid, TextField } from '@mui/material'
import React from 'react'
import '../../assets/scss/Contact.css'
import SendIcon from '@mui/icons-material/Send';

const SectionContactus = () => {
  return (
    <>
      <div className="wrapper">
        <div className="innerWrapper-contact">
          
          
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
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <div className='sendEmail'>
                <div className='title'>
                  <h2> Contact <span>Us</span>  </h2>
                </div>
                <Box
                
                  >
                  <FormControl fullWidth >
                    <div className="textBoxContainer">

                      <TextField 
                      className='textBox' 
                      placeholder='Name'
                      variant="outlined" />
                    </div>    
                    <div className="textBoxContainer">
                      <TextField
                      className='textBox'
                      type='email'
                      placeholder='Email'    
                      variant="outlined" />
                    </div>      
                    <div className="textBoxContainer">
                      <TextField 
                      className='textBox'
                      placeholder='Message Title'    
                      variant="outlined" />
                    </div>
                    <div className="textBoxContainer">
                      <TextField
                        className='textBox'
                        placeholder='Type Your Message Here...'    
                        variant="outlined" 
                        multiline
                        rows={4}
                      />
                    </div>
                    <div className="btnBoxContainer">
                      <div>

                          <Button 
                          className='SendButton'
                          variant="contained" endIcon={<SendIcon />}>
                            Send
                          </Button>
                      </div>
                    </div>
                  </FormControl>

                </Box>
              </div>
            </Grid>
                      
          </Grid >

        </div>
      </div>
          
    </>
  )
}

export default SectionContactus
