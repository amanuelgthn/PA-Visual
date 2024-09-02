import DashboardAuthForm from '@/app/admin/components/DashboardAuth/AuthModal/DashboardAuthForm'
import React from 'react'

const page = () => {
  return (
    <DashboardAuthForm
      formType='login'
      isOpen={true}
      title='Welcome to Global Property'
      note={''}
    />
  )
}

export default page
