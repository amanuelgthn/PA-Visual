import React from 'react'
import CareersHeader from '../components/Careers/CareersHeader/CareersHeader'
import CareersJobPositions from '../components/Careers/CareersJobPositions/CareersJobPositions'
import './careersglobalstyles.scss'

const Careers = () => {
  return (
    <section className='globalStyles'>
      <CareersHeader />
      <CareersJobPositions />
    </section>
  )
}

export default Careers
