import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Grid } from '@mui/material';
const Footer = () => {
  return (
    <>
    <Grid 
    container
    justifyContent='center'
    alignItems='center'
    >
        <Grid item lg={2} md={4} sm={4} xs={5}> 
        
            <div className="footer">
                <div className="footerBody">
                    <div className="iconContainer">
                        <div className="iconButton">
                            <WhatsAppIcon/>
                        </div>
                        <div className="iconButton">
                            <InstagramIcon/>
                        </div>
                        <div className="iconButton">
                            <FacebookIcon/>
                        </div>
                    </div>
                    <div className="credits">
                        <p>All Rights Reserved</p>
                    </div>
                    <div className="buildBy">@Powered by Raptor Solution</div>
                </div>
            </div>
        </Grid>
    </Grid>
      
      
      

    </>
  )
}

export default Footer
