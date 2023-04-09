import React from 'react'
import video from '../../assets/loaders/homeBg.mp4'
const Hero = () => {
  return (
    <>
    <div className="heroContainer">
        <div className="heroBg">
        <video className='video' autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        </div>
    </div>
    </>
  )
}

export default Hero
