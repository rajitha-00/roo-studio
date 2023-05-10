import React from 'react'
import Hero from '../components/products/Hero'
import Photo_frame from '../components/products/Photo_frame'
import Mug_print from '../components/products/Mug_print'
import Cake_design from '../components/products/Cake_design'


const Products = () => {
  return (
    <>
      <div className="container">
        <Hero />
        <Photo_frame />
        <Mug_print />
        <Cake_design/>
        
      </div>
    </>
  )
}

export default Products
