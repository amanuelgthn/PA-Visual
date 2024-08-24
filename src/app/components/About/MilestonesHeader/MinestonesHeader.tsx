'use client'
import React, { useEffect, useState, useRef } from 'react'
import './MilestonesHeader.scss'

//testing faze do not use this component in production
//it will have changes in the future

export const MilestonesHeader = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dotPosition, setDotPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerTop =
          containerRef.current.getBoundingClientRect().top + window.scrollY
        const containerHeight = containerRef.current.offsetHeight
        const scrollY = window.scrollY + window.innerHeight / 2

        let newDotPosition = ((scrollY - containerTop) / containerHeight) * 100

        newDotPosition = Math.max(0, Math.min(96.7, newDotPosition))

        setDotPosition(newDotPosition)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const milestones = [
    {
      title: 'Launch of the AI-Based Analysis Program',
      content:
        'One of our most notable achievements was the development of our innovative AI-based analysis program. This system allows us to identify investment opportunities more effectively and accurately, setting a new standard in the industry.',
    },
    {
      title: 'Establishment of Strategic Partnerships',
      content:
        'We have forged key alliances with recognized real estate agencies and industry experts, enabling us to expand our network and offer our clients access to a wide variety of properties in global markets, including the U.S., U.K., and the EU.',
    },
    {
      title: 'International Expansion',
      content:
        'As we grew, we expanded our services internationally, allowing us to diversify our offerings and cater to a broader clientele, adapting to the specific needs of each market.',
    },
    {
      title: 'Industry Recognitions',
      content:
        'We have been recognized for our innovation and excellence in service, receiving awards and certifications that validate our commitment to quality and customer satisfaction.',
    },
  ]

  return (
    <div className='milestones-wrapper'>
      <h1 className='container-header'>
        Since our founding, Global Property has achieved several significant
        milestones that have marked our growth and evolution in the real estate
        sector:
      </h1>
      <div className='container-milestones' ref={containerRef}>
        <div className='content'>
          {milestones.map((milestone, index) => (
            <div key={index} className='milestone_content'>
              <h1 className='milestone_title'>{milestone.title}</h1>
              <p className='milestone_content_paragraph'>{milestone.content}</p>
            </div>
          ))}
        </div>
        <div className='follow-stick'></div>
        <div className='follow-dot' style={{ top: `${dotPosition}%` }}>
          <div className='background-dot'></div>
        </div>
      </div>
      <h1 className='container-header'>
        These milestones not only reflect our progress but also underscore our
        dedication to revolutionizing the real estate investment landscape,
        positioning us as a leader in the sector.
      </h1>
    </div>
  )
}
