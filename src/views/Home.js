import React from 'react'
import Hero from '../components/home/Hero'
import SectionHome from '../components/home/SectionHome'
import { Grid ,Button} from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Hero/>
      <SectionHome/>
      <Grid container
      justifyContent="center"
      alignItems="center"
      >
       

        <Button
        className='btnPrimary'
        >
           <Link to="/moreProducts">

          More Products
           </Link>

        </Button>
       
      </Grid>
    </>
  )
}

export default Home
