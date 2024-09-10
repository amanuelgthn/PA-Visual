import './DescriptionCards.scss'
import React from 'react'

interface DescriptionCardProps {
  title: string
  description: string
  subHeaders: string[]
}

export const DescriptionCard: React.FC<DescriptionCardProps> = ({
  title,
  description,
  subHeaders,
}) => {
  return (
    <div className='des_card'>
      <div className='title-section'>
        <h1>{title}</h1>
      </div>
      <div className='paragraph-section'>
        <p>{description}</p>
      </div>
      <div className='additional-info-section'>
        {subHeaders.map((header, index) => (
          <div className='sub-cards-headers' key={index}>
            {header}
          </div>
        ))}
      </div>
    </div>
  )
}
