import React from 'react'
import Acquisitions from '../components/Service/Acquisitions/Acquisitions.tsx'
import Architecture from '../components/Service/Architecture/Architecture.tsx'
import OurServices from '../components/Service/OurServices/OurServices.tsx'
import RealEstate from '../components/Service/RealEstate/RealEstate.tsx'
import Relocation from '../components/Service/Relocation/Relocation.tsx'
import Management from '../components/Service/Management/Management.tsx'
import './Services.css'
import Testimonials from '../components/Service/Testimonials/Testimonials.tsx'
import Trademark from '../components/Service/Trademark/Trademark.tsx'

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
