'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { checkVerificationStatus } from '../../../services/Api'
import './email.scss'

const VerifyEmailPage: React.FC = () => {
  const searchParams = useSearchParams()
  const router = useRouter() // Use the useRouter hook for navigation
  const username = searchParams.get('username') || ''
  const [verified, setVerified] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!username) {
      setError('No username provided.')
      setLoading(false)
      return
    }

    const intervalId = setInterval(async () => {
      try {
        const data = await checkVerificationStatus(username)
        setVerified(data.isVerified)

        if (data.isVerified) {
          clearInterval(intervalId)
          setTimeout(() => {
            router.push('/Login')
          }, 3000)
        }
      } catch {
        setError('Failed to fetch verification status.')
        clearInterval(intervalId)
      } finally {
        setLoading(false)
      }
    }, 5000)

    return () => clearInterval(intervalId)
  }, [username, router])

  if (loading) {
    return <div className='verify-email-container'>Loading...</div>
  }

  if (error) {
    return <div className='verify-email-container'>{error}</div>
  }

  return (
    <div className='verify-email-container'>
      <img src='/logo/logo.svg' alt='Global Property Logo' />
      {verified ? (
        <div className='verification-success verify'>
          <h1>Email Verified Successfully!</h1>
          <p>You will be redirected to login in a few seconds...</p>
        </div>
      ) : (
        <div className='verification-pending verify'>
          <h1>Verify Your Email</h1>
          <p>
            Please check your email and click the verification link we sent you.
          </p>
          <div className='loading-indicator'>
            <div className='spinner'></div>
            <p>Waiting for verification...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default VerifyEmailPage
