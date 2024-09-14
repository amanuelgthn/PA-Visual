import React from 'react'
import './DonutChart.scss'
import Image from 'next/image'

interface DonutChartProps {
  percentage: number
  investorsInCountry: string
  propertiesInEU: number
  propertiesInUS: number
}

const DonutChart: React.FC<DonutChartProps> = ({
  percentage,
  investorsInCountry,
  propertiesInEU,
  propertiesInUS,
}) => {
  return (
    <div className='donut-chart-wrapper'>
      <div className='left'>
        <h1>Property Trends</h1>
        <div
          className='donut'
          style={
            {
              '--percentage': `${percentage}%`,
            } as React.CSSProperties
          }
        >
          <div className='inner-circle'></div>
          <div className='center-text'>{percentage}%</div>
        </div>
        <p>Investors in {investorsInCountry}</p>
      </div>
      <div className='right'>
        <div className='card'>
          <div className='card-value'>
            <p>Properties in EU</p>
            <h3>+{propertiesInEU}%</h3>
          </div>
          <div>
            <Image
              src='/dashboard/vector1.png'
              alt='EU'
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className='card'>
          <div className='card-value'>
            <p>Properties in US</p>
            <h3>{propertiesInUS}%</h3>
          </div>
          <div>
            <Image
              src='/dashboard/vector2.png'
              alt='EU'
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonutChart
