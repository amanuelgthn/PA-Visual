'use client'

import './Form.scss'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
// import { useAuth } from '@/app/Utils/AuthContext.tsx'
import Image from 'next/image'

interface FormData {
  email: string
  password: string
}

const Form: FC = () => {
  // const [isLoggedIn, setIsLoggedIn] = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })

  // const [rememberMe, setRememberMe] = useState(false)

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // const handleRememberMechange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setRememberMe(e.target.checked);
  // }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `https://globalpropertyapi.com/users/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Ensure correct capitalization
          },
          body: JSON.stringify({
            identifier: formData.email,
            password: formData.password, // Ensure the key matches the expected API key ("password" instead of "Password")
            rememberMe,
          }),
        },
      )
      console.log(`response status: ${response}`)
      // Check if the response is OK
      if (!response.ok) {
        console.log(`Error: ${response.status} ${response.statusText}`)
        try {
          const errorData = await response.json() // Parse error details if available
          console.log('Error Response Body:', errorData)

          // Display the error message on the page
          setError(
            errorData.error ||
              errorData.message ||
              'An error occurred. Please try again.',
          )
        } catch {
          setError('An unexpected error occurred.')
        }
        return
      }

      // Parse and log successful response
      const data = await response.json()
      console.log('Success Response:', data)
      alert('login successful')
      setIsLoggedIn(true)
      router.push('/')
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

export default Form
