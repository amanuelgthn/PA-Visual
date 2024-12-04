'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
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
  const [isPopupVisible, setIsPopupVisible] = useState(false) //Line declares a piece of state, isPopupVisible, which is a boolean. The initial state is false, meaning the pop-up is not visible when the component is first rendered.

  useEffect(() => {
    const lastShown: string | null = localStorage.getItem('popupLastShown') //This line retrieves a value from localStorage associated with the key 'popupLastShown'. This value represents the last time the pop-up was shown.

    const now = new Date() //This creates a Date object representing the current date and time, stored in the variable now.

    const daysSinceLastShown = lastShown
      ? (now.getTime() - new Date(lastShown).getTime()) / (1000 * 60 * 60 * 24)
      : Infinity //This calculates the number of days since the pop-up was last shown.

    const handleScroll = () => {
      //This defines a function, handleScroll, which will be called whenever the user scrolls on the page. It calculates how far the user has scrolled as a percentage of the total page height and checks if the conditions to show the pop-up are met.
      const scrollPosition = window.scrollY //scrollPosition stores the current vertical scroll position of the page in pixels.
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight //windowHeight is the total scrollable height of the page. It’s calculated by subtracting the viewport height (window.innerHeight) from the total height of the document (document.documentElement.scrollHeight).

      const scrollPercentage = (scrollPosition / windowHeight) * 100 //This calculates the percentage of the page that has been scrolled.

      if (scrollPercentage > 30 && daysSinceLastShown >= 3) {
        setIsPopupVisible(true)
        localStorage.setItem('popupLastShown', now.toISOString())
        window.removeEventListener('scroll', handleScroll) // If the user has scrolled more than 30% of the page and the pop-up hasn't been shown in the last 3 days, the pop-up is made visible
      }
    }

    if (daysSinceLastShown >= 3) {
      window.addEventListener('scroll', handleScroll) // If the pop-up hasn't been shown for at least 3 days, the handleScroll function is added as an event listener for the scroll event. This ensures that the pop-up logic will be checked when the user scrolls.
    }

    return () => window.removeEventListener('scroll', handleScroll) //The return function is a cleanup function that removes the scroll event listener when the component is unmounted. This prevents potential memory leaks.
  }, [])

  const closeWindow = () => {
    setIsPopupVisible(false) //This function sets isPopupVisible to false, hiding the pop-up when the user closes it (typically by clicking a close button).
  }

  if (!isPopupVisible) return null //If isPopupVisible is false, the component returns null, meaning nothing is rendered. This prevents the pop-up from showing when it's not supposed to be visible.

  return (
    <section className='popUpWindow'>
      <div className='popUpWindowInner'>
        <button className='exitButton' onClick={closeWindow}>
          x
        </button>

        <div className='leftContainer'>
          <Image
            src='/popUpWindowProperty.jpg'
            width={0}
            height={0}
            sizes='40vw'
            style={{ width: '100%', height: '100%' }}
            className='popUpWindowImage'
            alt='popUpWindowImage'
            priority
          />
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
    </section>
  )
}
