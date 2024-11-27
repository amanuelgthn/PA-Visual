'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { checkVerificationStatus, verifyEmail } from '../../../services/Api'
import './email.scss'

// should be an error in backend this will be needed to debug

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
    const pendingVerification = localStorage.getItem('pendingVerification')
    const verificationData = pendingVerification
      ? JSON.parse(pendingVerification)
      : null

    const hasValidParams = token || username

    const isVerificationValid =
      verificationData &&
      Date.now() - verificationData.timestamp < 24 * 60 * 60 * 1000

    if (!verificationData || !isVerificationValid) {
      router.push('/')
      return
    }

    if (!hasValidParams) {
      setIsAuthorized(true)
      return
    }

    setIsAuthorized(true)

    if (token) {
      const handleTokenVerification = async () => {
        try {
          await verifyEmail(token)
          setVerificationStatus('success')
          localStorage.removeItem('pendingVerification')
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
            localStorage.removeItem('pendingVerification')
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
          <div className='verification-success verify'>
            <h1>Email Verified Successfully!</h1>
            <p>You will be redirected to login in a few seconds...</p>
          </div>
        )
      case 'error':
        return (
          <div className='verification-error verify'>
            <h1>Verification Failed</h1>
            <p>
              There was an error verifying your email. Please try again or
              contact support.
            </p>
          </div>
        )
      default:
        return (
          <div className='verification-pending verify'>
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
      <div className='verify-email-container'>
        <img src='/logo/logo.svg' alt='Global property logo' />
        {renderContent()}
      </div>
    </div>
  ) : null
}

export default VerifyEmailPage
