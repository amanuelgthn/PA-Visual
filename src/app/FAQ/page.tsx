'use client'

import React from 'react'
import './faq.scss'
import FAQHeader from '../components/FAQ/FAQHeader/FAQHeader.tsx'
import QueryFAQs from '../components/FAQ/QueryFAQs/QueryFAQs.tsx'
import { ContactHeader } from '../components/Home/ContactHeader/ContactHeader.tsx'

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
