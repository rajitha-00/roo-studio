import { Box, Button, Grid, TextField } from '@mui/material'
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
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={1} 
                    rowSpacing={4} 
                    mt={5}
                    mb={5}
                  >
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className='sendEmail'>
              <div className='title'>
                <h2> Contact <span>Us</span>  </h2>
              </div>
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTextField-root': { width: '25ch' },
            }}
          >
      
                  <TextField label={'Your Name'} id="margin-none" className='textfield' />
                  
      
                  <TextField label={'Email'} id="margin-dense" margin="dense" />
                  
      
                  <TextField label={'Write a subject'} id="margin-normal" margin="normal" />

                  <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
<br></br>
                  <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
                  

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
