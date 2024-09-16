'use client'

import React, { useState } from 'react'
import HeaderSection from '../components/TermsAndConditions/HeaderSection/HeaderSection'
import TermsAndConditions from '../components/TermsAndConditions/TermsAndConditions/TermsAndConditions'
import './TermsAndConditions.scss'

const ResetPassword: React.FC = () => {
  return (
    <>
      <section className='globalStyles'>
        <HeaderSection />
        <TermsAndConditions />
      </section>
    </>
  )
}

export default ResetPassword
