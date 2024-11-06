'use client'

import React from 'react'
import './faq.scss'
import FAQHeader from '../components/FAQ/FAQHeader/FAQHeader'
import QueryFAQs from '../components/FAQ/QueryFAQs/QueryFAQs'
import { ContactHeader } from '../components/Home/ContactHeader/ContactHeader'

const page = () => (
  <div className='FAQ-container'>
    <div className='wrapper'>
      <div className='wrapper-assist'>
        <FAQHeader />
        <QueryFAQs />
        <ContactHeader />
      </div>
    </div>
  </div>
)

export default page
