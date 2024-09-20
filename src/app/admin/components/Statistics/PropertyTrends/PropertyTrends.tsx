import React from 'react'
import './PropertyTrends.scss'

interface PropertyTrend {
  label: string
  value: string
  percentage: string
}

interface PropertyTrendsProps {
  trends: PropertyTrend[]
}

const PropertyTrends: React.FC<PropertyTrendsProps> = ({ trends }) => {
  return (
    <div className='property-trends'>
      {trends.map((trend, index) => (
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
