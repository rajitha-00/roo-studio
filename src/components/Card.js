import React from 'react'
import '../assets/scss/Home.css'
const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="paper">
            <div 
            className="oneBgImg"
            style={{
            backgroundImage: `url(${props.photo_icon})`
            }}>

            </div>
        </div>
      </div>
    </>
  )
}

export default Card
