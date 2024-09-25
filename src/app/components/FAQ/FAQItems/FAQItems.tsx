import React from 'react'
import {
  FAQCategory,
  FAQContent,
  FAQItemProps,
} from '@/app/Types/FAQ/FAQTypes.ts'
import DropDown from '../../../../../public/FAQ/DropDown.svg'
import PopUp from '../../../../../public/FAQ/PopUp.svg'

const FAQItem: React.FC<FAQItemProps> = ({
  filteredFAQs,
  toggleVisibility,
}) => {
  const groupedFAQs = filteredFAQs.reduce(
    (acc, { category, content }) => {
      if (!acc[category]) acc[category] = []
      acc[category].push(content)
      return acc
    },
    {} as Record<FAQCategory, FAQContent[]>,
  )
  return (
    <div className='FAQ-answers'>
      <ul className='FAQ-answer-listing'>
        {Object.keys(groupedFAQs).map((categoryKey) => {
          const categoryFAQs = groupedFAQs[categoryKey as FAQCategory]
          return (
            <div className='FAQ-answer-lists' key={categoryKey}>
              <h3 className='FAQ-Category-answers-Name'>{categoryKey}</h3>{' '}
              {/* Render the category name once */}
              {categoryFAQs.map((content, index) => {
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
                          ? '1px solid rgba(224, 224, 224, 0.5)'
                          : 'none',
                      }}
                    >
                      <p className='FAQ-question-content'>{content.Question}</p>
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
  )
}

export default FAQItem
