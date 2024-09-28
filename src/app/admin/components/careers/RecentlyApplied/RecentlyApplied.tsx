import React from 'react'
import './RecentlyApplied.scss'
import { CiLocationOn } from 'react-icons/ci'
import Link from 'next/link'

const RecentlyApplied = () => {
  return (
    <section className='card-wrapper'>
      <div className='property-list'>
        <div className='card-header'>
          <h1>Recently Applied</h1>
        </div>
        <div className='card-title'>
          <h1>Job position</h1>
          <h1>Applicant</h1>
        </div>
        {/* Placeholder content since no data is needed */}
        <div className='property-item'>
          <div className='property-details'>
            <div className='property-info'>
              <Link href='#'>
                <h4 className='property-name'>Job position</h4>
              </Link>
              <div className='property-location'>
                <CiLocationOn color='rgba(255, 255, 255, 0.5)' size={15} />
                <p>Sample Address</p>
              </div>
            </div>
          </div>
          <div className='client-details'>
            <p className='client-name'>Client Name</p>
            <p className='client-email'>client@example.com</p>
          </div>
        </div>
        {/* You can duplicate the .property-item block to add more entries if needed */}
      </div>
    </section>
  )
}

export default RecentlyApplied
