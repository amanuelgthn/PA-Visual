'use client'
import React from 'react'
import './SavedProperties.scss'

const SavedProperties = () => {
  const savedProperties = [
    {
      title: 'Modern Loft in SoMa',
      description: '1 bed, 1 bath | $750,000',
    },
    {
      title: 'Modern Loft in SoMa',
      description: '1 bed, 1 bath | $750,000',
    },
  ]

  return (
    <div className='saved-properties'>
      <h3>Saved Properties</h3>
      <div className='properties-list'>
        {savedProperties.map((property, index) => (
          <div className='property-item' key={index}>
            <div className='property-info'>
              <h4>{property.title}</h4>
              <p>{property.description}</p>
            </div>
            <div className='property-actions'>
              <button className='view-details'>View Details</button>
              <button className='remove'>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className='view-all'>
        <a href='#'>View all</a>
      </div>
    </div>
  )
}

export default SavedProperties
