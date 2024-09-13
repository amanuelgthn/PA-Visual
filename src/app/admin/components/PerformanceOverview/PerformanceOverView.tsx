import React from 'react'
import { HiArrowTrendingDown, HiArrowTrendingUp } from 'react-icons/hi2'
import './PerformanceOverView.scss'
type PerformanceData = {
  label: string
  value: string | number
  percentageChange: number
  changeDirection: string
}

type PerformanceOverViewProps = {
  data: PerformanceData[]
}

const PerformanceOverView = ({ data }: PerformanceOverViewProps) => {
  return (
    <div className='totalsWraper'>
      {data?.map((item, index) => (
        <div key={index} className='total'>
          <h4 className='totalsTitle'>{item.label}</h4>

          <div className='valueWrapper'>
            <h3 className='value'>{item.value}</h3>
            {item.changeDirection === 'up' ? (
              <span className='up'>
                <HiArrowTrendingUp
                  size={20}
                  style={{ color: 'rgba(31, 215, 60, 1)' }}
                />
                {item.percentageChange}%
              </span>
            ) : (
              <span className='down'>
                <HiArrowTrendingDown
                  size={20}
                  style={{ color: 'rgba(235, 5, 5, 1)' }}
                />
                {item.percentageChange}%
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PerformanceOverView
