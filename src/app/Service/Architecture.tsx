import React from 'react'
import './Architecture.css'
import img from './architecture.jpeg'

const Architecture = () => (
  <div className='architecture-container'>
    <div className='architecture'>
      <h1 className='architecture-title'>ARCHITECTURE AND INTERIOR DESIGN</h1>
      <div className='architecture-content'>
        <p className='architecture-body'>
          Create your dream space with our team of skilled architects and
          interior designers. From conceptualization to execution, we&apos;ll
          work closely with you to design and build a custom home that reflects
          your unique style and taste.
        </p>
      </div>
      <img
        src={img.src}
        alt='Architecture and Interior Design'
        className='architecture-image'
      />
      <div className='architecture-services'>
        <div className='architecture-item'>
          ✔ Architectural design and planning
        </div>
        <div className='architecture-item'>
          ✔ Interior space planning and layout
        </div>
        <div className='architecture-item'>
          ✔ Material and finish selection
        </div>
        <div className='architecture-item'>
          ✔ Project management and construction oversight
        </div>
      </div>
    </div>
  </div>
)

export default Architecture
