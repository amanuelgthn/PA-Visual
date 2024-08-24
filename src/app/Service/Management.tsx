import React from 'react'
import './Management.css'

const Management = () => (
  <div className='management-container'>
    <div className='management'>
      <h1 className='management-title'>PROPERTY MANAGEMENT</h1>
      <div className='management-content'>
        <p className='management-body'>
          Ensure the long-term success of your real estate investment with our
          professional property management services. From tenant screening to
          maintenance and repairs, we&apos;ll handle all aspects of property
          management so you can enjoy hassle-free ownership.
        </p>
      </div>
      <div className='management-services'>
        <div className='management-item'>
          ✔Tenant screening and lease management
        </div>
        <div className='management-item'>✔Rent collection and accounting</div>
        <div className='management-item'>✔Material and finish selection</div>
        <div className='management-item'>
          ✔Property inspections and reporting
        </div>
      </div>
    </div>
  </div>
)

export default Management
