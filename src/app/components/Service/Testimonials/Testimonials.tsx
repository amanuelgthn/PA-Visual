'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image' // Using Next.js Image component
import image1 from '../../../../../public/Service/Person1.png'
import image2 from '../../../../../public/Service/Person2.png'
import image3 from '../../../../../public/Service/Person3.png'
import image4 from '../../../../../public/Service/Person4.jpg'
import image5 from '../../../../../public/Service/Person5.jpg'
import PrevIcon from '../../../../../public/Service/prev_icon.svg'
import NextIcon from '../../../../../public/Service/next_icon.svg'
import './Testimonials.css'

const Testimonials = () => {
  const quotes = [
    {
      text: `Investing in a luxury penthouse in Eixample was a transformative experience. The vibrant cultural 
              scene and stunning architecture drew me to the area. After purchasing, I renovated the space to 
              enhance its appeal. Within three years, I sold it for a 30% profit, capitalizing on the growing 
              demand for high-end properties. The entire process was seamless, thanks to a knowledgeable real 
              estate agent who understood the local market.`,
      Success: `A couple bought a historic villa in Gràcia, which they converted into a vacation rental. By 
                leveraging Barcelona's booming tourism, they achieved a 50% increase in rental income within 
                two years, demonstrating the city's strong appeal to international travelers.`,
      image: image1,
      Location: 'Barcelona, Spain',
    },
    {
      text: `Selling my luxury beachfront property in Viña del Mar was surprisingly straightforward. The market 
              was hot, and I received multiple offers above the asking price within weeks. With the help of an 
              experienced agent, I closed the sale in under a month, allowing me to reinvest in another property. 
              The entire experience exceeded my expectations!`,
      Success: `An investor purchased a luxury apartment in Santiago. With the rise of remote work, they rented 
                it out to expatriates, achieving an annual rental yield of 8%. The property’s value appreciated 
                significantly, reflecting the increasing demand for upscale rentals in urban areas.`,
      image: image2,
      Location: 'Chile',
    },
    {
      text: `The luxury market in Miami is incredibly vibrant! I sold my waterfront condo in Brickell in less than 
              two weeks, thanks to the high demand from international buyers. The sale price exceeded my expectations, 
              allowing me to invest in another property. The entire process was efficient and rewarding.`,
      Success: `A couple renovated a luxury home in Coral Gables and listed it as a short-term rental. Within a year, 
                they reported a 40% increase in property value and significant rental income, benefiting from Miami’s year-round tourism and strong rental market.`,
      image: image3,
      Location: 'Miami, Florida',
    },
    {
      text: `Investing in a luxury apartment in Downtown Dubai was a game-changer for my finances. The property’s 
              value soared due to major developments and events like Expo 2020. I sold it for a 60% profit in just
              two years, which was beyond my expectations. The entire process was smooth, and I felt well-informed 
              at every step.`,
      Success: `An investor acquired a villa in Palm Jumeirah, turning it into a luxury rental. With the growing 
                expat community, they enjoyed a consistent 12% rental yield, showcasing Dubai's appeal in the 
                global luxury market.`,
      image: image4,
      Location: 'Dubai, UAE',
    },
    {
      text: `Purchasing a luxury apartment in Santiago has proven to be one of my best investment decisions. 
              The growing demand for high-end rentals allowed me to achieve excellent rental yields while the 
              property appreciated in value. Working with a knowledgeable agent made the process seamless and 
              enjoyable`,
      Success: `After acquiring a luxury apartment, the investor capitalized on the influx of expatriates and
                tourists in Santiago, resulting in a rental yield of 10% annually. The property’s value increased 
                significantly, reflecting the city's expanding real estate market.`,
      image: image5,
      Location: 'Santiago, Chile',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const triggerAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1000)
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

  useEffect(() => {
    const autoSlideInterval = 5000
    const intervalId = setInterval(() => {
      handleNext()
    }, autoSlideInterval)

    return () => clearInterval(intervalId)
  }, [currentIndex])

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index)
    triggerAnimation()
  }

  const visibleImages = [
    quotes[(currentIndex - 1 + quotes.length) % quotes.length],
    quotes[currentIndex],
    quotes[(currentIndex + 1) % quotes.length],
  ]

  return (
    <div className='testimonials-container'>
      <div className='testimonials-title-container'>
        <h1 className='testimonials-title'>CLIENT TESTIMONIALS</h1>
      </div>

      <div className={`testimonials-body ${isAnimating ? 'fade-in' : ''}`}>
        <p>{quotes[currentIndex].text}</p>
        <p className='testimonial-sucess'>Success Story</p>
        <p className='testimonial-sucess-story'>
          {quotes[currentIndex].Success}
        </p>
      </div>

      <div className={`testimonials-owner ${isAnimating ? 'fade-in' : ''}`}>
        <h1 className='testimonials-owner-title'>
          {quotes[currentIndex].Location}
        </h1>
      </div>

      <div className='testimonials-thumbnail'>
        <div className='testimonials-owner-image'>
          {visibleImages.map((quote, index) => (
            <div
              key={index}
              className={`testimonial-thumbnail-item ${index === 1 ? 'active' : ''}`}
              onClick={() =>
                handleThumbnailClick(
                  (currentIndex + index - 1 + quotes.length) % quotes.length,
                )
              }
            >
              <Image
                src={quote.image}
                alt={`${quote.Location} testimonial`}
                width={100}
                height={100}
                className={`testimonial-image ${index === 1 ? 'active' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='handle-buttons'>
        <button className='testimonials-prev' onClick={handlePrev}>
          <Image src={PrevIcon} alt='Previous' width={30} height={30} />
        </button>
        <button className='testimonials-next' onClick={handleNext}>
          <Image src={NextIcon} alt='Next' width={30} height={30} />
        </button>
      </div>
    </div>
  )
}

export default Testimonials
