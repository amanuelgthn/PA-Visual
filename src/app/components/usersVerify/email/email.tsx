'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { checkVerificationStatus, verifyEmail } from '../../../services/Api'
import './email.scss'

const VerifyEmailPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [verificationStatus, setVerificationStatus] = useState<
    'pending' | 'success' | 'error'
  >('pending')
  const [isAuthorized, setIsAuthorized] = useState(false)

  const token = searchParams.get('token')
  const username = searchParams.get('username')

  useEffect(() => {
    if (!token && !username) {
      router.push('/')
      return
    }

    setIsAuthorized(true)

    if (token) {
      const handleTokenVerification = async () => {
        try {
          await verifyEmail(token)
          setVerificationStatus('success')
          setTimeout(() => {
            router.push('/login')
          }, 3000)
        } catch (error) {
          setVerificationStatus('error')
          console.error('Verification error:', error)
        }
      }
      handleTokenVerification()
    } else if (username) {
      const checkStatus = async () => {
        try {
          const response = await checkVerificationStatus(username)
          if (response.isVerified) {
            setVerificationStatus('success')
            setTimeout(() => {
              router.push('/login')
            }, 3000)
          }
        } catch (error) {
          console.error('Status check error:', error)
        }
      }

      checkStatus()
      const interval = setInterval(checkStatus, 5000)
      return () => clearInterval(interval)
    }
  }, [token, username, router])

  const renderContent = () => {
    switch (verificationStatus) {
      case 'success':
        return (
          <div className='verification-success'>
            <h1>Email Verified Successfully!</h1>
            <p>You will be redirected to login in a few seconds...</p>
          </div>
        )
      case 'error':
        return (
          <div className='verification-error'>
            <h1>Verification Failed</h1>
            <p>
              There was an error verifying your email. Please try again or
              contact support.
            </p>
          </div>
        )
      default:
        return (
          <div className='verification-pending'>
            <h1>Verify Your Email</h1>
            <p>
              Please check your email and click the verification link we sent
              you.
            </p>
            <div className='loading-indicator'>
              <div className='spinner'></div>
              <p>Waiting for verification...</p>
            </div>
          </div>
        )
    }
  }

  return isAuthorized ? (
    <div className='verify-email-page'>
      <div className='verify-email-container'>{renderContent()}</div>
    </div>
  ) : null
}

export default VerifyEmailPage
