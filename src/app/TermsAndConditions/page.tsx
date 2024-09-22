'use client'

import HeaderSection from '../components/TermsAndConditions/HeaderSection/HeaderSection'
import TermsAndConditions from '../components/TermsAndConditions/TermsAndConditions/TermsAndConditions'
import ContactUs from '../components/TermsAndConditions/ContactUs/ContactUs'
import './TermsAndConditions.scss'

const TermsAndConditionsPage: React.FC = () => {
  return (
    <>
      <section className='globalStyles'>
        <div className='wrapper'>
          <div className='wrapper-assist'>
            <HeaderSection />
            <TermsAndConditions />
            <ContactUs />
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsAndConditionsPage
