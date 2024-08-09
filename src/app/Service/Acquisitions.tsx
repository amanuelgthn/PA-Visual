import React from 'react'
import './Acquisitions.css'

const Acquisitions = () => (
  <div className='acquisitions-container'>
    <div className='acquisitions'>
      <h1 className='acquisitions-title'>PROPERTY SALES AND ACQUISITIONS</h1>
      <p className='acquisitions-body'>
        Whether you&apos;re buying or selling a luxury property, our experienced
        real estate advisors are here to guide you through the process. From
        identifying the perfect property to negotiating the best deal,
        we&apos;ll ensure a seamless and successful transaction from start to
        finish.
      </p>
      <div className='acquisitions-services'>
        <div className='service-item'> ✔️Property search and selection</div>
        <div className='service-item'>
          {' '}
          ✔️Market analysis and pricing strategy
        </div>
        <div className='service-item'>
          {' '}
          ✔️Negotiation and closing assistance
        </div>
        <div className='service-item'> ✔️Property marketing and promotion</div>
      </div>
    </div>
  </div>
)

export default Acquisitions
