'use client'

import React, { useState, useMemo } from 'react'
import '@fontsource/montserrat'
import './TermsAndConditionsComponent.scss'

const sectionData = [
  {
    title: 'Introduction',
    content: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad',
    ],
  },
  {
    title: 'Information Collection and Use',
    content: [
      'We accept no liability and will not be liable for any loss or damage arising directly or indirectly (including special, incidental or consequential loss or damage) from your use of this website, howsoever arising, including any loss, damage or expense arising from, but not limited to, any defect, error, imperfection, fault, mistake or inaccuracy with this website, its contents or associated services, or due to any unavailability of the website or any part thereof or any contents or associated services, where such events arose out of circumstances outside our reasonable control.',
    ],
  },
  {
    title: 'Disclosure of your information',
    content: [
      'We accept no liability and will not be liable for any loss or damage arising directly or indirectly (including special, incidental or consequential loss or damage) from your use of this website, howsoever arising, including any loss, damage or expense arising from, but not limited to, any defect, error, imperfection, fault, mistake or inaccuracy with this website, its contents or associated services, or due to any unavailability of the website or any part thereof or any contents or associated services, where such events arose out of circumstances outside our reasonable control.',
    ],
  },
  {
    title: 'General inquiries',
    content: [
      'We accept no liability and will not be liable for any loss or damage arising directly or indirectly (including special, incidental or consequential loss or damage) from your use of this website, howsoever arising, including any loss, damage or expense arising from, but not limited to, any defect, error, imperfection, fault, mistake or inaccuracy with this website, its contents or associated services, or due to any unavailability of the website or any part thereof or any contents or associated services, where such events arose out of circumstances outside our reasonable control.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We accept no liability and will not be liable for any loss or damage arising directly or indirectly (including special, incidental or consequential loss or damage) from your use of this website, howsoever arising, including any loss, damage or expense arising from, but not limited to, any defect, error, imperfection, fault, mistake or inaccuracy with this website, its contents or associated services, or due to any unavailability of the website or any part thereof or any contents or associated services, where such events arose out of circumstances outside our reasonable control.',
    ],
  },
]

const TermsAndConditionsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Create refs array using useMemo to prevent re-creation on every render
  const sectionRefs = useMemo(
    () => sectionData.map(() => React.createRef<HTMLHeadingElement>()),
    [],
  )

  const handleClick = (index: number) => {
    setActiveIndex(index)
    sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='TermsAndConditionsSection'>
      <div className='leftContainer'>
        <ul>
          {sectionData.map((section, index) => (
            <li
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => handleClick(index)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </div>

      <div className='rightContainer'>
        {sectionData.map((section, index) => (
          <div key={index}>
            <h1 ref={sectionRefs[index]}>{section.title}</h1>
            <ul>
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TermsAndConditionsSection
