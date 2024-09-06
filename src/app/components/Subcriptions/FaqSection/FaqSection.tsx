import React, { useState } from 'react'
import './FaqSection.scss'

const FaqSection = () => {
  const faqItems = [
    {
      question: "What's the most frequently asked question?",
      answer:
        'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
    },
    {
      question: 'How about a second one?',
      answer: 'Answer for the second question.',
    },
    {
      question: 'And a third?',
      answer: 'Answer for the third question.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number): void => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <div className='faq-wrapper'>
      <h1>Heading for FAQs</h1>
      {faqItems.map((item, index) => (
        <div key={index} className='faq-item'>
          <div className='faq-question' onClick={() => toggleFAQ(index)}>
            <h2>{item.question}</h2>
            <span>{openIndex === index ? '−' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className='faq-answer'>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FaqSection
