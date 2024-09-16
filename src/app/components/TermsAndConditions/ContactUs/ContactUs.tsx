'use client'

import React from 'react'
import '@fontsource/montserrat'
import './ContactUs.scss'

const ContactUsSection: React.FC = () => {
  return (
    <section className='ContactUs'>
      <h2 className='title'>CONTACT US</h2>
      <div className='followsection-divider'></div>
      <p className='description'>
        We are here to help you achieve your real estate goals. Reach out to us
        today and discover the exceptional service that sets Property Advisor
        apart.
      </p>
      <button className='getInTouch'>GET IN TOUCH</button>
    </section>
  )
}

export default ContactUsSection
