import React from 'react'
import { CategoryListProps, FAQCategory } from '@/app/Types/FAQ/FAQTypes'

const CategoryList: React.FC<CategoryListProps> = ({
  FAQs,
  setSelectedCategory,
}) => (
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
)
export default CategoryList
