'use client'

import React, { useState, useRef } from 'react'
import '@fontsource/montserrat'
import './TermsAndConditionsComponent.scss'

const HeaderSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // To track active list item

  // Refs for the <h1> elements to scroll to when corresponding list item is clicked
  const sectionRefs = [
    useRef<HTMLHeadingElement>(null),
    useRef<HTMLHeadingElement>(null),
    useRef<HTMLHeadingElement>(null),
    useRef<HTMLHeadingElement>(null),
  ]

  // Handler for clicking on a list item
  const handleClick = (index: number) => {
    setActiveIndex(index)

    // Scroll to the corresponding <h1> using ref
    sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='TermsAndConditionsSection'>
      <div className='leftContainer'>
        <ul>
          {/* Mapping over the list items */}
          {['Privacy Policy', 'Terms of use', 'User Content', 'Security'].map(
            (item, index) => (
              <li
                key={index}
                className={activeIndex === index ? 'active' : ''} // Add 'active' class if the item is clicked
                onClick={() => handleClick(index)} // Call handleClick when clicked
              >
                {item}
              </li>
            ),
          )}
        </ul>
      </div>

      <div className='rightContainer'>
        {/* Assign each <h1> a ref to be used for scrolling */}
        <h1>Introduction</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad
        </p>

        <h1 ref={sectionRefs[0]}>Information Collection and Use</h1>
        <p>
          We accept no liability and will not be liable for any loss or damage
          arising directly or indirectly (including special, incidental or
          consequential loss or damage) from your use of this website, howsoever
          arising, including any loss, damage or expense arising from, but not
          limited to, any defect, error, imperfection, fault, mistake or
          inaccuracy with this website, its contents or associated services, or
          due to any unavailability of the website or any part thereof or any
          contents or associated services, where such events arose out of
          circumstances outside our reasonable control.
        </p>

        <h1 ref={sectionRefs[1]}>Disclosure of your information</h1>
        <p>
          We accept no liability and will not be liable for any loss or damage
          arising directly or indirectly (including special, incidental or
          consequential loss or damage) from your use of this website, howsoever
          arising, including any loss, damage or expense arising from, but not
          limited to, any defect, error, imperfection, fault, mistake or
          inaccuracy with this website, its contents or associated services, or
          due to any unavailability of the website or any part thereof or any
          contents or associated services, where such events arose out of
          circumstances outside our reasonable control.
        </p>

        <h1 ref={sectionRefs[2]}>General inquiries</h1>
        <p>
          We accept no liability and will not be liable for any loss or damage
          arising directly or indirectly (including special, incidental or
          consequential loss or damage) from your use of this website, howsoever
          arising, including any loss, damage or expense arising from, but not
          limited to, any defect, error, imperfection, fault, mistake or
          inaccuracy with this website, its contents or associated services, or
          due to any unavailability of the website or any part thereof or any
          contents or associated services, where such events arose out of
          circumstances outside our reasonable control.
        </p>

        <h1 ref={sectionRefs[3]}>Data Security</h1>
        <p>
          We accept no liability and will not be liable for any loss or damage
          arising directly or indirectly (including special, incidental or
          consequential loss or damage) from your use of this website, howsoever
          arising, including any loss, damage or expense arising from, but not
          limited to, any defect, error, imperfection, fault, mistake or
          inaccuracy with this website, its contents or associated services, or
          due to any unavailability of the website or any part thereof or any
          contents or associated services, where such events arose out of
          circumstances outside our reasonable control.
        </p>
      </div>
    </section>
  )
}

export default HeaderSection
