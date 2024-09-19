'use client'

import React, { useState } from 'react'
import { StaticImageData } from 'next/image'
import DropDown from '../../../../../public/FAQ/DropDown.svg'
import PopUp from '../../../../../public/FAQ/PopUp.svg'
import generalIcon from '../../../../../public/FAQ/General.svg'
import accountIcon from '../../../../../public/FAQ/Account.svg'
import billingIcon from '../../../../../public/FAQ/Billing.svg'
import technicalIcon from '../../../../../public/FAQ/Technical.svg'
import './QueryFAQs.scss'

const QueryFAQs = () => {
  type FAQCategory = 'General' | 'Account' | 'Billing' | 'Technical'

  type FAQContent = {
    Question: string
    Answer: string
    Visibility: boolean
    Visited: number
  }

  type FAQData = {
    category: string
    content: FAQContent[]
    icon: StaticImageData
  }

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | null>(
    null,
  )
  const [FAQs, setFAQs] = useState<Record<FAQCategory, FAQData>>({
    General: {
      category: 'General',
      content: [
        {
          Question: 'What is Global Property Real Estate?',
          Answer: `Global Property Real Estate is a leading real estate company specializing in residential, commercial, and industrial properties.`,
          Visibility: false,
          Visited: 300,
        },
        {
          Question: 'How do I create an account?',
          Answer: `Global Property Real Estate is a leading real estate company specializing in residential, commercial, and industrial properties.`,
          Visibility: false,
          Visited: 290,
        },
      ],
      icon: generalIcon,
    },
    Account: {
      category: 'Account',
      content: [
        {
          Question: 'How do I reset my password?',
          Answer: `To reset your password, click on the 'Forgot Password' link on the login page.`,
          Visibility: false,
          Visited: 270,
        },
        {
          Question: 'How do I update my account information?',
          Answer: `Log into your account and navigate to the 'Profile' or 'Account Settings' section.`,
          Visibility: false,
          Visited: 234,
        },
      ],
      icon: accountIcon,
    },
    Billing: {
      category: 'Billing',
      content: [
        {
          Question: 'What payment methods do you accept?',
          Answer: `We accept various payment methods including credit/debit cards, PayPal, and bank transfers.`,
          Visibility: false,
          Visited: 280,
        },
        {
          Question: 'How can I view my billing history?',
          Answer: `Log into your account and go to the 'Billing' or 'Transactions' section.`,
          Visibility: false,
          Visited: 234,
        },
      ],
      icon: billingIcon,
    },
    Technical: {
      category: 'Technical Support',
      content: [
        {
          Question: 'How do I troubleshoot login issues?',
          Answer: `If you're having trouble logging in, first ensure you're using the correct email and password.`,
          Visibility: false,
          Visited: 234,
        },
        {
          Question: 'What should I do if I encounter an error on the website?',
          Answer: `If you encounter an error, try refreshing the page or clearing your browser cache.`,
          Visibility: false,
          Visited: 234,
        },
      ],
      icon: technicalIcon,
    },
  })

  const toggleVisibility = (
    faqCategory: FAQCategory,
    originalIndex: number,
  ) => {
    setFAQs((prevFAQs) => ({
      ...prevFAQs,
      [faqCategory]: {
        ...prevFAQs[faqCategory],
        content: prevFAQs[faqCategory].content.map((item, i) =>
          i === originalIndex
            ? { ...item, Visibility: !item.Visibility }
            : item,
        ),
      },
    }))
  }

  const getTopQuestions = () => {
    const allQuestions: {
      content: FAQContent
      category: FAQCategory
      originalIndex: number
    }[] = []

    // Flatten the content of all categories and keep track of the original index and category
    Object.entries(FAQs).forEach(([category, faqData]) => {
      faqData.content.forEach((question, i) => {
        allQuestions.push({
          content: question,
          category: category as FAQCategory,
          originalIndex: i,
        })
      })
    })

    // Sort questions by 'Visited' in descending order and take the top 4
    return allQuestions
      .sort((a, b) => b.content.Visited - a.content.Visited)
      .slice(0, 4) // Top 4
  }

  // Function to filter FAQs based on the search term and keep the original index
  const getFilteredFAQs = () => {
    if (!selectedCategory) {
      // If no category is selected, show all FAQs from all categories
      return Object.keys(FAQs).reduce(
        (
          acc: { category: FAQCategory; content: FAQContent }[],
          categoryKey,
        ) => {
          const category = categoryKey as FAQCategory
          const filteredContent = FAQs[category].content.filter(
            ({ Question }) =>
              Question.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          return [
            ...acc,
            ...filteredContent.map((content) => ({ category, content })),
          ]
        },
        [],
      )
    }
    // If a category is selected, filter within that category
    return FAQs[selectedCategory].content
      .filter(({ Question }) =>
        Question.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .map((content) => ({ category: selectedCategory, content }))
  }

  const filteredFAQs = getFilteredFAQs() // Get FAQs based on selected category and search term
  const topQuestions = getTopQuestions() // top 4 popular questions

  return (
    <>
      <div className='QueryFAQs-container'>
        <input
          type='search'
          className='QueryFAQ-input'
          placeholder='Search FAQs...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update the search term state
        />
        <div className='FAQ-Category'>
          <ul className='FAQ-Category-listing'>
            {Object.keys(FAQs).map((key) => {
              const categoryKey = key as FAQCategory // Explicitly cast key as FAQCategory
              return (
                <li key={categoryKey} className='FAQ-Category-lists'>
                  <button
                    className='FAQ-Category-button'
                    onClick={() => setSelectedCategory(categoryKey)}
                  >
                    {/* Set selected category on click */}
                    <img
                      className='FAQ-category-icon'
                      src={FAQs[categoryKey].icon.src}
                      alt={`${FAQs[categoryKey].category} icon`}
                    />
                    <h3 className='FAQ-Category-Name'>
                      {FAQs[categoryKey].category}
                    </h3>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <button
          className='FAQ-Category-Backall'
          onClick={() => setSelectedCategory(null)}
        >
          Back to all
        </button>
        <div className='FAQ-answers'>
          <ul className='FAQ-answer-listing'>
            {Object.keys(
              filteredFAQs.reduce((acc, { category }) => {
                if (!acc[category]) acc[category] = true
                return acc
              }, {}),
            ).map((categoryKey) => {
              const categoryFAQs = filteredFAQs.filter(
                ({ category }) => category === categoryKey,
              ) // Group FAQs by category
              return (
                <div className='FAQ-answer-lists' key={categoryKey}>
                  <h3 className='FAQ-Category-answers-Name'>{categoryKey}</h3>{' '}
                  {/* Render the category name once */}
                  {categoryFAQs.map(({ content }, index) => {
                    const isLastquestion = index === categoryFAQs.length - 1
                    const isFirstquestion = index === 0
                    return (
                      <div key={index} className='FAQ-item'>
                        <button
                          className='FAQ-question'
                          id='FAQ-dropdown'
                          onClick={() => toggleVisibility(categoryKey, index)}
                          style={{
                            borderRadius:
                              !content.Visibility && isLastquestion
                                ? '0 0 30px 30px'
                                : '0',
                            borderBottom: isFirstquestion
                              ? '1px solid rgba(224, 224, 224, 0.5) !important'
                              : 'none',
                          }}
                        >
                          <p className='FAQ-question-content'>
                            {content.Question}
                          </p>
                          <img
                            className='dropdown-icon'
                            src={content.Visibility ? PopUp.src : DropDown.src}
                            alt='dropDown'
                          />
                        </button>
                        <p
                          className='FAQ-answer'
                          style={{
                            display: content.Visibility ? 'block' : 'none',
                          }}
                        >
                          {content.Answer}
                        </p>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </ul>
        </div>

        <div className='FAQ-Popular'>
          <h3 className='FAQ-popular-header'>Popular Questions</h3>
          <ul className='FAQ-Popular-listing'>
            {topQuestions.map(({ content, category, originalIndex }, index) => {
              const isLast = index === topQuestions.length - 1
              return (
                <div key={index} className='FAQ-popular-item'>
                  <button
                    className='FAQ-popular-question'
                    onClick={() => toggleVisibility(category, originalIndex)} // Use the original category and index
                    style={{
                      borderBottom: !isLast
                        ? '1px solid rgba(224, 224, 224, 0.5)'
                        : 'none',
                    }}
                  >
                    <p className='FAQ-popular-content'>{content.Question}</p>
                    <img
                      className='dropdown-icon'
                      src={content.Visibility ? PopUp.src : DropDown.src}
                      alt='dropDown'
                    />
                  </button>
                  <p
                    className='FAQ-popular-answer'
                    style={{
                      display: content.Visibility ? 'block' : 'none',
                      borderRadius:
                        content.Visibility && isLast ? '0 0 30px 30px' : '0',
                    }}
                  >
                    {content.Answer}
                  </p>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default QueryFAQs
