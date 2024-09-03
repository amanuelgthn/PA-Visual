import React from 'react'
import './RealEstate.css'

const RealEstate = () => (
  <div className='realestate-container'>
    <div className='realestate'>
      <h1 className='realestate-title'>REAL ESTATE INVESTMENT ADVISORY</h1>
      <p className='realestate-body'>
        Maximize your real estate investments with our expert investment
        advisory services. Our team of investment specialists will help you
        identify lucrative opportunities, analyze potential risks, and develop a
        tailored investment strategy to meet your financial goals
      </p>
      <div className='realestate-services'>
        <div className='realestate-item'>Investment property analysis</div>
        <div className='realestate-item'>Risk assessment and mitigation</div>
        <div className='realestate-item'>
          Portfolio diversification strategy
        </div>
        <div className='realestate-item'>Rental property management</div>
      </div>
    </div>
  </div>
)

export default RealEstate
