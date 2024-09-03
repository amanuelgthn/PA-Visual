'use client'

import React, { useEffect, useState } from 'react'
import image1 from '../../../../../public/Service/Person1.png'
import image2 from '../../../../../public/Service/Person2.png'
import image3 from '../../../../../public/Service/Person3.png'
import image4 from '../../../../../public/Service/Person4.jpg'
import './Testimonials.css'
import PrevIcon from '../../../../../public/Service/prev_icon.svg'
import NextIcon from '../../../../../public/Service/next_icon.svg'

const Testimonials = () => {
  const quotes = [
    {
      text: `Global Property helped us sell our luxury villa in Marbella quickly and for top dollar.
                Their marketing expertise and negotiation skills were instrumental in closing the deal. We couldn't
                be happier with the outcome.`,
      outcome: 'Sold above asking price within 30 days of listing.',
      image: image1,
      name: 'John and Emily Smith',
    },
    {
      text: `Global Property helped us sell our luxury villa in Marbella quickly and for top dollar.
                Their marketing expertise and negotiation skills were instrumental in closing the deal. We couldn't
                be happier with the outcome.`,
      outcome: 'Sold above asking price within 30 days of listing.',
      image: image2,
      name: 'Tony Button',
    },
    {
      text: `Global Property made the sale of our penthouse in Miami a seamless experience.
                    Their market insights and strong negotiation skills were key to securing an excellent deal.
                    We're extremely satisfied with how it turned out.`,
      outcome: 'Sold at full asking price in just 25 days.',
      image: image3,
      name: 'Michael and Sarah Johnson',
    },
    {
      text: `We entrusted Global Property with selling our city loft in London, and they delivered beyond
                    our expectations. Their expertise in marketing luxury properties and their sharp negotiation approach
                    ensured a successful sale.`,
      outcome: 'Sold above asking price within 15 days of listing.',
      image: image4,
      name: 'Amanda Martinez',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [animate, setAnimate] = useState(false)

  const triggerAnimation = () => {
    setAnimate(true)
    setTimeout(() => setAnimate(false), 5000)
  }
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1,
    )
    triggerAnimation()
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1,
    )
    triggerAnimation()
  }
  // Auto-slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000) // Change every 5 seconds
    return () => clearInterval(intervalId) // Cleanup the interval on component unmount
  }, [currentIndex])

  // Calculate the three visible images around the current index
  const visibleImages = [
    quotes[(currentIndex - 1 + quotes.length) % quotes.length], // Image to the left
    quotes[currentIndex], // Active image in the middle
    quotes[(currentIndex + 1) % quotes.length], // Image to the right
  ]

  return (
    <>
      <div className='testimonials-container'>
        <div className='testimonials-title-container'>
          <h1 className='testimonials-title'>CLIENT TESTIMONIALS</h1>
        </div>
        <div
          className={`testimonials-body ${animate ? 'fade-in' : 'fade-out'}`}
        >
          <p>{quotes[currentIndex].text}</p>
          <p>Outcome: {quotes[currentIndex].outcome}</p>
        </div>
        <div
          className={`testimonials-owner ${animate ? 'fade-in' : 'fade-out'}`}
        >
          <h1 className='testimonials-owner-title'>
            {quotes[currentIndex].name}
          </h1>
        </div>
        <div className='testimonials-thumbnail'>
          <div
            className={`testimonials-owner-image ${animate ? 'fade-in' : 'fade-out'}`}
          >
            {visibleImages.map((quote, index) => (
              <img
                id='testimonials-image'
                key={index}
                src={quote.image.src}
                className={index === 1 ? 'active' : ''}
                onClick={() =>
                  setCurrentIndex(
                    (currentIndex + index - 1 + quotes.length) % quotes.length,
                  )
                }
                alt='testimonials-image'
              />
            ))}
          </div>
        </div>
        <div className='handle-buttons'>
          <button className='testimonials-prev' onClick={handlePrev}>
            <img src={PrevIcon.src} alt='Previous' />
          </button>
          <button className='testimonials-next' onClick={handleNext}>
            <img src={NextIcon.src} alt='Next' />
          </button>
        </div>
      </div>
    </>
  )
}

export default Testimonials
