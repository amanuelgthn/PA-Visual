'use client'

import React, { Suspense } from 'react'
import VerifyEmailPage from '../../../components/usersVerify/email/email'

const VerifyEmailWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailPage />
    </Suspense>
  )
}

export default VerifyEmailWrapper
