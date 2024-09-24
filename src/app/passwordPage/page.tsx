'use client'

import { ForgotPasswordForm } from '../components/passwordPage/ForgotPasswordForm/ForgotPasswordForm'
import { Followus } from '../components/Contact/Followus/Followus'
import './passwordPage.scss'

const ForgotPassword = () => {
  return (
    <div className='wrapper backgroundColor'>
      <div className='wrapper-assist'>
        <ForgotPasswordForm />
        <Followus />
      </div>
    </div>
  )
}

export default ForgotPassword
