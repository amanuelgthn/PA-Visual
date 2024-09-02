import DashboardAuthForm from '@/app/components/DashboardAuth/AuthModal/DashboardAuthForm'
import React from 'react'

const SignUpPage = () => {
  return (
    <DashboardAuthForm
      formType='signup'
      isOpen={true}
      title='Create an Account'
      note={'Create, explore, and experience websites beyond imagination.'}
    />
  )
}

export default SignUpPage
