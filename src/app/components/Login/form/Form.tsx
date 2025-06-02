'use client'

import axios from 'axios'
import './Form.scss'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import Image from 'next/image'
import { useAuth } from '@/app/Utils/AuthContext'
import { loginUser } from '@/app/Utils/AuthLoginLogout'

interface FormData {
  email: string
  password: string
}
interface LoginRequest {
  identifier: string
  password: string
}

export async function createClientSession(userId: string, role: string) {
  const response = await axios.post('/api/session', { userId, role })
  return response.data
}

export async function getClientSession() {
  const response = await axios.get('/api/session')
  return response
}

export async function deleteClientSession() {
  await axios.delete('/api/session')
}

export const Form: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { setIsAuthenticated } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })

  const loginData: LoginRequest = {
    identifier: formData.email,
    password: formData.password,
  }
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
      console.log('Sending login request with:', loginData)
      const response = await loginUser(loginData)
      console.log(response)
      const session = createClientSession(
        response.username,
        response.id,
        response.role,
      )
      console.log('session', session)
      console.log('Login successful:', response.username)
      setIsLoggedIn(true)
      setIsAuthenticated(true)
      console.log('isLoggedIn', isLoggedIn)
      router.push('/')
    } catch (error) {
      console.error('Error during login:', error)
      setError(`Login Failed${error}`)

      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Error Response Data:', error.response.data)
          console.error('Error Response Status:', error.response.status)
          console.error('Error Response Headers:', error.response.headers)
          setError(
            error.response.data.error ||
              error.response.data.message ||
              'Login failed',
          )
        } else if (error.request) {
          console.error('Error Request:', error.request)
          setError('No response received from server. Please try again later.')
        } else {
          console.error('Error Message:', error.message)
          setError('An error occurred while making the request.')
        }
      } else if (error instanceof Error) {
        console.error('Unexpected Error:', error.message)
        setError('An unexpected error occurred.')
      } else {
        console.error('Unknown Error:', error)
        setError(error['error'])
      }
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
  if (isLoggedIn) {
    console.log('Successfully logged in')
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
