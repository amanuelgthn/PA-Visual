import React from 'react'
import './Relocation.css'

const Relocation = () => (
  <div className='relocation-container'>
    <div className='relocation'>
      <h1 className='relocation-title'>RELOCATION SERVICES</h1>
      <div className='relocation-content'>
        <div className='relocation-content-body'>
          <p className='relocation-body'>
            Make your move seamless with our comprehensive relocation services.
            Whether you&apos;re relocating for work or lifestyle reasons, our
            team will handle all the details to ensure a smooth transition to
            your new home.
          </p>
        </div>
        <div className='relocation-services'>
          <div className='relocation-item'>
            ✔Destination orientation and area tours
          </div>
          <div className='relocation-item'>
            ✔ Home search and rental assistance
          </div>
          <div className='relocation-item'>
            ✔ School placement and education consulting
          </div>
          <div className='relocation-item'>
            ✔ Settling-in support and concierge services
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Relocation
