'use client'

import React, { useState, useEffect, useRef } from 'react'
import '@fontsource/montserrat'
import '@fontsource/open-sans'
import './styles.css'

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log('Form data submitted:', data)
  }

  return (
    <div className='secondSection'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'></label>
          <input
            type='text'
            placeholder='Name'
            id='name'
            name='name'
            className='inputWindow'
            required
          />
        </div>
        <div>
          <label htmlFor='email'></label>
          <input
            type='email'
            placeholder='Email'
            id='email'
            name='email'
            className='inputWindow'
            required
          />
        </div>
        <div>
          <label htmlFor='phone'></label>
          <input
            type='tel'
            placeholder='Phone'
            id='phone'
            name='phone'
            className='inputWindow'
            required
          />
        </div>
        <div>
          <label htmlFor='message'></label>
          <input
            type='message'
            placeholder='Message'
            name='message'
            className='inputWindow'
            required
          />
        </div>
        <button type='submit' className='submit-button'>
          SUBSCRIBE NOW
        </button>
      </form>
    </div>
  )
}

export default function PopUpWindow() {
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  // Store the initial devicePixelRatio
  const initialDPR = useRef(window.devicePixelRatio || 1)

  useEffect(() => {
    const lastShown: string | null = localStorage.getItem('popupLastShown')
    const now = new Date()
    const daysSinceLastShown = lastShown
      ? (now.getTime() - new Date(lastShown).getTime()) / (1000 * 60 * 60 * 24)
      : Infinity

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const scrollPercentage = (scrollPosition / windowHeight) * 100

      if (scrollPercentage > 30 && daysSinceLastShown >= 3) {
        setIsPopupVisible(true)
        localStorage.setItem('popupLastShown', now.toISOString())
        window.removeEventListener('scroll', handleScroll)
      }
    }

    if (daysSinceLastShown >= 3) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Adjust scaling to maintain pop-up size across zoom levels
  useEffect(() => {
    const setScale = () => {
      const currentDPR = window.devicePixelRatio || 1
      const scale = initialDPR.current / currentDPR
      document.documentElement.style.setProperty(
        '--inverse-scale',
        scale.toString(),
      )
    }

    setScale() // Set initial scale
    window.addEventListener('resize', setScale)

    return () => window.removeEventListener('resize', setScale)
  }, [])

  // Add or remove class to disable scrolling
  useEffect(() => {
    if (isPopupVisible) {
      document.body.classList.add('popup-active')
    } else {
      document.body.classList.remove('popup-active')
    }
  }, [isPopupVisible])

  const closeWindow = () => {
    setIsPopupVisible(false)
  }

  if (!isPopupVisible) return null

  return (
    <section className='popUpWindow'>
      <div className='popUpWindowInner-wrapper'>
        <div className='popUpWindowInner'>
          <button className='exitButton' onClick={closeWindow}>
            x
          </button>

          <div className='leftContainer'>
            <video
              className='popUpWindowVideo'
              controls
              autoPlay
              loop
              muted
              playsInline
            >
              <source src='/PopUpWindow/backgroundVideo.mp4' type='video/mp4' />
              <source
                src='/PopUpWindow/backgroundVideo.webm'
                type='video/webm'
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className='rightContainer'>
            <div className='firstSection'>
              <h1>NOT READY TO START YOUR SEARCH YET?</h1>
              <p>
                No worries! We can keep you up to date on the market and add you
                to our subscription e-mail news!
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
