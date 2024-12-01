'use client'
import axios from 'axios'
import './Form.scss'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import Image from 'next/image'

interface FormData {
  email: string
  password: string
}
interface LoginRequest {
  identifier: string
  password: string
}

// Set up the base URL using environment variables
const API = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL || 'https://globalpropertyapi.com',
  headers: {
    'x-api-key':
      process.env.NEXT_PUBLIC_API_KEY || process.env.NEXT_PUBLIC_API_KEY_2,
  },
})

const loginUser = async (data: LoginRequest) => {
  try {
    const response = await API.post('users/login', data)
    console.log(response.data)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data
    }
    console.log(error)
    throw new Error('Unexpected error occurred')
  }
}

export const Form: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
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

    console.log('API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL)
    console.log('API Key:', process.env.NEXT_PUBLIC_API_KEY)

    try {
      console.log('Sending login request with:', loginData)
      const response = await loginUser(loginData)

      // console.log('Login successful:', response);

      const token = response.token
      //create login session for user
      localStorage.setItem('token', token) // Save the JWT token
      localStorage.setItem('user', JSON.stringify(response.user)) // Optionally save user info
      // const userResponse = await API.get('/users', {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      // const user = userResponse.data; // Assume the user data includes the username
      // console.log('User details fetched:', user);
      setIsLoggedIn(true)
      console.log(`IsLogged in${isLoggedIn}`)
      router.push('/')
    } catch (error: unknown) {
      console.error('Error during login:', error)

      // if (axios.isAxiosError(error)) {
      //   if (error.response) {
      //     setError(error.response.data.message || 'Login failed');
      //   } else if (error.request) {
      //     setError('No response received from server. Please try again later.');
      //   } else {
      //     setError('An error occurred while making the request.');
      //   }
      // } else {
      //   setError('Unexpected error occurred. Please try again.');
      // }
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
