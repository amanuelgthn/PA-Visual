import React from 'react'
import Acquisitions from './Acquisitions.tsx'
import Architecture from './Architecture.tsx'
import OurServices from './OurServices.tsx'
import RealEstate from './RealEstate.tsx'
import Relocation from './Relocation.tsx'
import Management from './Management.tsx'
import './Services.css'
import Testimonials from './Testimonials.tsx'
import Trademark from './Trademark.tsx'

const Service = () => (
  <div className='Service-Page-container'>
    <OurServices />
    <Acquisitions />
    <RealEstate />
    <Architecture />
    <Management />
    <Relocation />
    <Testimonials />
    <Trademark />
  </div>
)

export default Service
