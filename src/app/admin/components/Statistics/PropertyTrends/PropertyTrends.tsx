import React from 'react'
import './PropertyTrends.scss'

const propertyTrends = [
  { label: 'Total Property', value: '1,243', percentage: '25%' },
  { label: 'Properties Sold', value: '387', percentage: '25%' },
  { label: 'Total Revenue', value: '$542M', percentage: '25%' },
  { label: 'Average Sale Price', value: '$1.4M', percentage: '25%' },
]

const PropertyTrends = () => {
  return (
    <div className='property-trends'>
      {propertyTrends.map((trend, index) => (
        <div key={index} className='trend-card'>
          <h3>{trend.label}</h3>
          <div className='trend-value'>
            <span>{trend.value}</span>
            <div className='trend-percentage'>
              <span>↑ {trend.percentage}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PropertyTrends
