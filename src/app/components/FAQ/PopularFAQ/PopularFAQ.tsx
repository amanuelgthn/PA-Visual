import { PopularFAQProps } from '@/app/Types/FAQ/FAQTypes.ts'
import React from 'react'
import DropDown from '../../../../../public/FAQ/DropDown.svg'
import PopUp from '../../../../../public/FAQ/PopUp.svg'

const PopularFAQ: React.FC<PopularFAQProps> = ({
  topQuestions,
  toggleVisibility,
}) => (
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
)

export default PopularFAQ
