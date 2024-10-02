'use client'

import './Form.scss'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import Image from 'next/image'

interface FormData {
  email: string
  password: string
}

export const Form: FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert('Login successful')

      // it will be needed to configure the login API endpoint

      setFormData({
        email: '',
        password: '',
      })

      router.push('/') // Navigate after successful login
    } catch (err) {
      console.error('Login error:', err)
      setError('Failed to login. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Google Sign-In
  const handleGoogleSignIn = () => {
    window.location.href = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_URL ?? '#'
  }

  // Apple Sign-In
  const handleAppleSignIn = () => {
    window.location.href = process.env.NEXT_PUBLIC_APPLE_OAUTH_URL ?? '#'
  }

  return (
    <form onSubmit={handleSubmit} className='form-login' noValidate>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          placeholder='email@janesfakedomain.net'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          aria-required='true'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
          aria-required='true'
        />
      </div>

      <div className='forgot-password-container'>
        <div className='remember-me'>
          <input type='checkbox' id='remember-me' name='remember-me' />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        <a className='forgot-button' href='/passwordPage'>
          Forgot Password?
        </a>
      </div>

      {error && <p className='error-message'>{error}</p>}

      <div className='button-container'>
        <button type='submit' disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </div>

      <hr className='line' />
      <h4 className='or'>Or</h4>

      <div className='social-signin-container'>
        <button
          type='button'
          className='google-signin-btn'
          onClick={handleGoogleSignIn}
        >
          <Image
            src={'/icons/google.svg'}
            alt='Google Icon'
            width={20}
            height={20}
            loading='lazy'
          />
          Sign in with Google
        </button>
        <button
          type='button'
          className='apple-signin-btn'
          onClick={handleAppleSignIn}
        >
          <Image
            src={'/icons/apple.svg'}
            alt='Apple Icon'
            width={20}
            height={20}
            loading='lazy'
          />
          Sign in with Apple
        </button>
      </div>

      <h3 className='login'>
        Don&apos;t have an account? <a href='/UserSignup'>Sign Up</a>
      </h3>
    </form>
  )
}
