import DashboardAuthForm from '@/app/components/DashboardAuth/AuthModal/DashboardAuthForm'
import React from 'react'

const page = () => {
  return (
    <DashboardAuthForm
      formType='password-reset'
      isOpen={true}
      title='Forgot Password'
      note={
        "Enter your email address below. We'll send you instructions to reset your password."
      }
    />
  )
}

export default page
