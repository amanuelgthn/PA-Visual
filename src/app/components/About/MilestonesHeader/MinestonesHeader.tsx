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

        const newDotPosition =
          ((scrollY - containerTop) / containerHeight) * 100

        if (newDotPosition >= 0 && newDotPosition <= 100) {
          setDotPosition(newDotPosition)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='container' ref={containerRef}>
      <div className='content'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Quisque vitae eros nec sem vestibulum condimentum.</p>
        <p>Nulla facilisi. Proin sit amet vehicula odio.</p>
        <p>Suspendisse potenti. Curabitur vulputate sagittis lectus.</p>
        <p>
          Duis convallis, nisi id lacinia scelerisque, lectus magna laoreet
          nisi.
        </p>
        <p>Sed auctor augue vitae nisl tincidunt, eget lacinia ex luctus.</p>
        <p>Etiam id mi non lorem feugiat interdum.</p>
        <p>Aliquam erat volutpat. Cras vel ex eros.</p>
        <p>In hac habitasse platea dictumst.</p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada.
        </p>
      </div>
      <div className='dot' style={{ top: `${dotPosition}%` }} />
    </div>
  )
}
