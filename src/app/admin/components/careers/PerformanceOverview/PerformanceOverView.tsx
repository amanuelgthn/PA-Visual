import React from 'react'
import './PerformanceOverView.scss'

type PerformanceData = {
  label: string
  value: string | number
  percentageChange: number
  changeDirection: 'up' | 'down'
}

type PerformanceOverViewProps = {
  pageType: 'dashboard' | 'property'
  data?: PerformanceData[]
}

const PerformanceOverView = ({ pageType, data }: PerformanceOverViewProps) => {
  return (
    <section className='globalStyles'>
      <section className='summaryTitle'>
        {pageType === 'dashboard' ? 'Dashboard' : 'Property'}
      </section>
      <div className='totalsWrapper'>
        {pageType === 'dashboard' &&
          data?.map((item, index) => (
            <div key={index} className='dataItem'>
              <p>{item.label}</p>
              <p>{item.value}</p>
              <p>
                {item.percentageChange}% {item.changeDirection}
              </p>
            </div>
          ))}
      </div>
    </section>
  )
}

export default React.memo(PerformanceOverView)
