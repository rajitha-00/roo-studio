import React from 'react'
import Slide from './Slide'
import Collages from './Collages'
import Weddings from './Weddings'
import Family from './Family'

const SectionGallery = () => {
  return (
    <>
      <div className="wrapper">
        <div className="innerWrapper-gallery">
          <Slide />
          <Collages />
          <Weddings />
          <Family />
        </div>
      </div>
    </>
  )
}

export default SectionGallery
