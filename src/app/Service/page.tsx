import React from 'react'
import Acquisitions from '../components/Service/Acquisitions/Acquisitions'
import Architecture from '../components/Service/Architecture/Architecture'
import OurServices from '../components/Service/OurServices/OurServices'
import RealEstate from '../components/Service/RealEstate/RealEstate'
import Relocation from '../components/Service/Relocation/Relocation'
import Management from '../components/Service/Management/Management'
import './Services.css'
import Testimonials from '../components/Service/Testimonials/Testimonials'
import Trademark from '../components/Service/Trademark/Trademark'

const Service = () => (
  <div className='Service-Page-container'>
    <div className='wrapper'>
      <div className='wrapper-assist'>
        <OurServices />
        <Acquisitions />
        <RealEstate />
        <Architecture />
        <Management />
        <Relocation />
        <Testimonials />
      </div>
      <Trademark />
    </div>
  </div>
)

export default Service
