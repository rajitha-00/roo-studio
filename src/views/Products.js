import React from 'react'
import Hero from '../components/products/Hero'
import Photo_frame from '../components/products/Photo_frame'
import Mug_print from '../components/products/Mug_print'


const Products = () => {
  return (
    <>
      <div className="container">
        <Hero />
        <Photo_frame />
        <Mug_print/>
        
      </div>
    </>
  )
}

export default Products
