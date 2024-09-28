import React from 'react'
import './RecentlyStatusChanged.scss'
import { CiLocationOn } from 'react-icons/ci'
import Link from 'next/link'

const RecentlyStatusChanged = () => {
  return (
    <main className='card-wrapper'>
      <div className='property-list'>
        <div className='card-header'>
          <h1>Recently status changed</h1>
        </div>
        <div className='card-title'>
          <h1>Job title</h1>
          <h1>Status</h1>
        </div>
        {/* Placeholder content since no data is needed */}
        <div className='property-item'>
          <div className='property-details'>
            <div className='property-info'>
              <Link href='#'>
                <h4 className='property-name'>Job title</h4>
              </Link>
              <div className='property-location'>
                <CiLocationOn color='rgba(255, 255, 255, 0.5)' size={15} />
                <p>Sample Address</p>
              </div>
            </div>
          </div>
          <div className='client-details'>
            <p className='client-name'>Status</p>
            <p className='client-name'>Date</p>
          </div>
        </div>
        {/* You can duplicate the .property-item block to add more entries if needed */}
      </div>
    </main>
  )
}

export default RecentlyStatusChanged
