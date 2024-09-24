'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import PopUpWindow from '../PopUpWindow/PopUpWindow'
import './Form.scss'

interface FormData {
  email: string
}

export const Form: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({ email: '' })
  const [isPopUpVisible, setIsPopUpVisible] = useState(false)

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
      // simulate API call with 2 second delay
      //will be replaced with actual API call in production
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Reset form data
      setFormData({ email: '' })

      // Show modal on successful form submission
      setIsPopUpVisible(true)
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Error:', err.message)
        setError('Failed to change password. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleClosePopUp = () => {
    setIsPopUpVisible(false)
    router.replace('/') // use replace to prevent going back
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='change-form'>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
            placeholder='email@janesfakedomain.net'
          />
        </div>
        <div className='button-container'>
          <button
            type='submit'
            className='btn'
            disabled={loading}
            aria-label={
              loading ? 'Form is submitting' : 'Submit to change password'
            }
          >
            {loading ? 'Loading...' : 'Change Password'}
          </button>
        </div>
        {error && <p className='error'>{error}</p>}

        <a href='/Login' className='link'>
          Go Back to Login
        </a>
      </form>

      {isPopUpVisible && (
        <div className='ConfirmationPopUpWindow'>
          <PopUpWindow onClose={handleClosePopUp} />
        </div>
      )}
    </>
  )
}
