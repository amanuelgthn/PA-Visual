'use client'

import React, { useState } from 'react'
import ForgotPasswordForm from '../components/passwordPage/ForgotPasswordForm/ForgotPasswordForm'
import ForgotPasswordImage from '../components/passwordPage/ForgotPasswordImage/ForgotPasswordImage'
import FollowUsNavigation from '../components/passwordPage/FollowUsNavigation/FollowUsNavigation'
import PopUpWindow from '../components/passwordPage/PopUpWindow/PopUpWindow'
import './passwordPage.scss'

const ForgotPassword: React.FC = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false)

  const handleResetPassword = () => {
    setIsPopUpVisible(true)
  }

  const handleClosePopUp = () => {
    setIsPopUpVisible(false)
  }

  return (
    <div className='wrapper backgroundColor'>
      <div className='wrapper-assist'>
        <section className='forgotPasswordForm'>
          <div className='formContainer'>
            <div className='headerContainer'>
              <h1 className='forgotPasswordTitle'>FORGOT PASSWORD</h1>
              <p className='forgotPasswordDescription'>
                Enter your email address below. We&apos;ll send you instructions
                to reset your password.
              </p>
            </div>
            <ForgotPasswordForm handleResetPassword={handleResetPassword} />
          </div>
          <ForgotPasswordImage />
        </section>
        {isPopUpVisible && (
          <div className='ConfirmationPopUpWindow'>
            <PopUpWindow onClose={handleClosePopUp} />
          </div>
        )}
      </div>
      <FollowUsNavigation />
    </div>
  )
}

export default ForgotPassword
