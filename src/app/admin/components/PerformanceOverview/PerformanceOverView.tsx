import React from 'react'
import { HiArrowTrendingDown, HiArrowTrendingUp } from 'react-icons/hi2'
import './PerformanceOverView.scss'
import { IoIosAddCircleOutline } from 'react-icons/io'
import Link from 'next/link'

type PerformanceData = {
  label: string
  value: string | number
  percentageChange: number
  changeDirection: string
}

type PerformanceOverViewProps = {
  data: PerformanceData[]
  pageType: 'dashboard' | 'property' | 'users-management'
}

const PerformanceOverView = ({ data, pageType }: PerformanceOverViewProps) => {
  return (
    <div className='totalsWraper'>
      {pageType === 'dashboard' ? (
        data?.map((item, index) => (
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
        ))
      ) : (
        <>
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
          {pageType === 'property' ? (
            <Link href='/admin/properties/add'>
              <div className='total add-new-property'>
                <IoIosAddCircleOutline
                  size={50}
                  color='rgba(226, 121, 27, 1)'
                />
                <h4>Add New Property</h4>
              </div>
            </Link>
          ) : (
            <Link href='/admin/users/add'>
              <div className='total add-new-property'>
                <IoIosAddCircleOutline
                  size={50}
                  color='rgba(226, 121, 27, 1)'
                />
                <h4>Add New User</h4>
              </div>
            </Link>
          )}
        </>
      )}
    </div>
  )
}

export default PerformanceOverView
