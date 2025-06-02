'use client'
import React, { useEffect, useState } from 'react'

type VerifyTokenClientProps = {
  token: string
}

export default function VerifyTokenClient({ token }: VerifyTokenClientProps) {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading',
  )
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    // Simulate an API call to verify the token. Replace with your real logic.
    async function verify() {
      try {
        // e.g. await fetch(`/api/verify?token=${token}`)
        // For now, just fake a delay:
        await new Promise((r) => setTimeout(r, 1000))

        // if everything went well:
        setStatus('success')
        setMessage(`Token "${token}" verified successfully!`)
      } catch (err) {
        setStatus('error')
        setMessage(`Failed to verify token: ${String(err)}`)
      }
    }

    verify()
  }, [token])

  if (status === 'loading') {
    return (
      <div>
        <h2>Verifying token…</h2>
        <p>Please wait.</p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div>
        <h2 style={{ color: 'red' }}>Verification Failed</h2>
        <p>{message}</p>
      </div>
    )
  }

  // status === 'success'
  return (
    <div>
      <h2 style={{ color: 'green' }}>Verification Successful</h2>
      <p>{message}</p>
    </div>
  )
}
