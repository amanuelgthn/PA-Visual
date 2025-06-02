'use client'

import React, { useState } from 'react'
import './ArticlesSubscribe.scss'

const ArticlesSubscribe = () => {
  const [email, setEmail] = useState('') // State to hold the email
  const [message, setMessage] = useState('') // State to display error or success message

  const handleSubscribe = async () => {
    if (!email) {
      setMessage('Please enter a valid email address')
      return
    }

    try {
      const response = await fetch(
        'https://api.dev.globalproperty-group.com/subscribe',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ email }),
        },
      )
      if (response.ok) {
        console.log('Subscribed successfully')
        setMessage('Subscribed successfully!')
        setEmail('') // clear the input
      } else {
        setMessage('Subscription failed, please try again')
      }
    } catch (error) {
      console.error('Error during subscription', error)
      console.log(error)
      setMessage('An error occurred, please try again')
    }
  }
  return (
    <>
      <div className='ArticlesSubscribe-container'>
        <div className='Articles-header'>
          <p className='Articles-title'>
            Stay updated with our latest insights
          </p>
        </div>
        <div className='Articles-input-email'>
          <form className='Articles-input-form'>
            <label htmlFor='mail'></label>
            <input
              type='email'
              id='email'
              className='input-email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className='btn-subscribe' onClick={handleSubscribe}>
              Subscribe
            </button>
          </form>
        </div>
        {message && <p>{message}</p>} {/* Display success or error message */}
      </div>
    </>
  )
}

export default ArticlesSubscribe
