'use client'

import HeaderSection from '../components/TermsAndConditions/HeaderSection/HeaderSection'
import TermsAndConditions from '../components/TermsAndConditions/TermsAndConditions/TermsAndConditions'
import ContactUs from '../components/TermsAndConditions/ContactUs/ContactUs'
import './TermsAndConditions.scss'

const TermsAndConditionsPage: React.FC = () => {
  return (
    <>
      <section className='globalStyles'>
        <HeaderSection />
        <TermsAndConditions />
        <ContactUs />
      </section>
    </>
  )
}

export default TermsAndConditionsPage
