'use client'
import React, { FC, useState } from 'react'
import { useRouter } from 'next/navigation'
import { registerUser } from '../../../services/Api'
import { isEmailValid, isPasswordValid } from '../../../Utils/Validation'
import Image from 'next/image'
import './Form.scss'

export const Form: FC = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [termsAccepted, setTermsAccepted] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!termsAccepted) {
      alert('Please accept the terms and conditions to proceed.')
      return
    }

    if (!isEmailValid(formData.email)) {
      alert('Invalid email format')
      return
    }

    if (!isPasswordValid(formData.password)) {
      alert('Password must be at least 8 characters long')
      return
    }

    setLoading(true)

    try {
      await registerUser({
        email: formData.email,
        username: formData.name,
        password: formData.password,
      })

      localStorage.setItem(
        'pendingVerification',
        JSON.stringify({
          email: formData.email,
          username: formData.name,
          timestamp: Date.now(),
        }),
      )

      setFormData({ name: '', email: '', password: '' })
      setTermsAccepted(false)
      router.push('/users/verify/email')
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message.includes('already registered')) {
          alert('This email is already registered. Please log in instead.')
        } else {
          alert(error.message || 'An error occurred while registering')
        }
      } else {
        alert('An unknown error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  const navigateToTerms = () => {
    router.push('/TermsAndConditions')
  }

  const handleGoogleSignIn = () => {
    window.location.href = '/auth/google' //will need to update this
  }

  const handleAppleSignIn = () => {
    window.location.href = '/auth/apple' // will need to update this
  }

  return (
    <form onSubmit={handleSubmit} className='form-signup'>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          placeholder='Jane'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='email@janesfakedomain.net'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className='terms-conditions'>
        <input
          type='checkbox'
          id='terms'
          name='terms'
          checked={termsAccepted}
          onChange={handleCheckboxChange}
          required
        />
        <label htmlFor='terms'> I agree to the </label>
        <button type='button' className='terms-link' onClick={navigateToTerms}>
          terms & policy
        </button>
      </div>

      <div className='button-container'>
        <button type='submit' disabled={loading}>
          {loading ? 'Loading...' : 'Sign Up'}
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
          />
          Sign in with Apple
        </button>
      </div>
      <h3 className='login'>
        Have an account? <a href='/Login'>Log in</a>
      </h3>
    </form>
  )
}
