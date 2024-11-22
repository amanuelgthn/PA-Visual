'use client'

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { verifyEmail } from '../../services/Api'
import './verify.scss'

const VerifyEmailPage: React.FC = () => {
  const { token } = useParams()
  const router = useRouter()
  const [verificationMessage, setVerificationMessage] = useState<string | null>(
    null,
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verifyUserEmail = async () => {
      if (typeof token !== 'string') {
        setVerificationMessage('Invalid or missing token.')
        setLoading(false)
        return
      }

      try {
        const response = await verifyEmail(token)
        setVerificationMessage(
          response.message || 'Email verified successfully!',
        )
      } catch (error: unknown) {
        if (error instanceof Error) {
          setVerificationMessage(
            error.message || 'Verification failed. Please try again.',
          )
        } else {
          setVerificationMessage(
            'An unknown error occurred during verification.',
          )
        }
      } finally {
        setLoading(false)
      }
    }

    verifyUserEmail()
  }, [token])

  useEffect(() => {
    if (verificationMessage === 'Email verified successfully!') {
      const timer = setTimeout(() => {
        router.push('/Login')
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [verificationMessage, router])

  return (
    <div className='main'>
      <img
        src='/other_logo/proadvisorlogoFooter.png'
        className='mainLogo'
        alt='logo'
      />
      {loading ? (
        <h1>Verifying your email...</h1>
      ) : (
        <>
          <h1>{verificationMessage}</h1>
          {verificationMessage !== 'Email verified successfully!' && (
            <p>
              Go back to <a href='/Login'>login</a>
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default VerifyEmailPage
