'use client'
import React, { FC, useState } from 'react'
import './form.scss'

export const Form: FC = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    // Simulating a form submission with a 2 second delay before alerting the user
    // This is where you would send the form data to the backend for storage and processing
    // will be implemented when the backend is connected

    setTimeout(() => {
      setLoading(false)
      alert('Form submitted successfully')

      setFormData({
        name: '',
        lastname: '',
        email: '',
        message: '',
      })
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='name-lastname'>
        <div className='inside-container'>
          <label htmlFor='name'>First name</label>
          <input
            type='text'
            placeholder='Jane'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='inside-container'>
          <label htmlFor='lastname'>Last name</label>
          <input
            type='text'
            placeholder='Doe'
            name='lastname'
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className='email-container'>
        <div className='inside-container'>
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
      </div>

      <div className='message-container'>
        <div className='inside-container'>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            placeholder='Enter your question or message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
      </div>

      <div className='button-container'>
        <button type='submit' disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}
