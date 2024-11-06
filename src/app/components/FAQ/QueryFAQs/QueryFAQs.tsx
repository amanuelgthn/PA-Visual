'use client'

import React, { useState } from 'react'
import { FAQCategory, FAQData, FAQContent } from '@/app/Types/FAQ/FAQTypes'
import generalIcon from '../../../../../public/FAQ/General.svg'
import accountIcon from '../../../../../public/FAQ/Account.svg'
import billingIcon from '../../../../../public/FAQ/Billing.svg'
import technicalIcon from '../../../../../public/FAQ/Technical.svg'
import PopularFAQ from '../PopularFAQ/PopularFAQ'
import SearchBar from '../SearchBar/SearchBar'
import './QueryFAQs.scss'
import CategoryList from '../CategoryList/CategoryList'
import FAQItem from '../FAQItems/FAQItems'

const QueryFAQs = () => {
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
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryList FAQs={FAQs} setSelectedCategory={setSelectedCategory} />
        <button
          className='FAQ-Category-Backall'
          onClick={() => setSelectedCategory(null)}
        >
          Back to all
        </button>
        <FAQItem
          filteredFAQs={filteredFAQs}
          toggleVisibility={toggleVisibility}
        />
        <PopularFAQ
          topQuestions={topQuestions}
          toggleVisibility={toggleVisibility}
        />
      </div>
    </>
  )
}

export default QueryFAQs
