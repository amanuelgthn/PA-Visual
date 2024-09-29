import React from 'react'
import CareersHeader from '../components/Careers/CareersHeader/CareersHeader'
import CareersSection from '../components/Careers/CareersSection/CareersSection'
import './careersglobalstyles.scss'

const Careers = () => {
  return (
    <section className='globalStyles'>
      <CareersHeader />
      <CareersSection />
    </section>
  )
}

export default Careers
