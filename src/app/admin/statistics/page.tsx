'use client'
import React, { useState } from 'react'
import './statistics.scss'
import PropertyTrends from '../components/Statistics/PropertyTrends/PropertyTrends'
// import RevenueOverview from '../components/Statistics/RevenueOverview/RevenueOverview'
// import PropertyAssociated from '../components/Statistics/PropertyAssociated/PropertyAssociated'
import RecentPaymments from '../components/Statistics/RecentPaymments/RecentPaymments'
import StatisticsSummary from '../components/Statistics/StatisticsSummary/StatisticsSummary'
import PaymentStatus from '../components/Statistics/PaymentStatus/PaymentStatus'
import Transaction from '../components/Statistics/Transaction/Transaction'

const StatisticPage: React.FC = () => {
  const [trends, setTrends] = useState([
    { label: 'Total Property', value: '1,243', percentage: '25%' },
    { label: 'Properties Sold', value: '387', percentage: '25%' },
    { label: 'Total Revenue', value: '$542M', percentage: '25%' },
    { label: 'Average Sale Price', value: '$1.4M', percentage: '25%' },
  ])

  const updateTrends = (year: string) => {
    if (year === '2024') {
      setTrends([
        { label: 'Total Property', value: '1,300', percentage: '30%' },
        { label: 'Properties Sold', value: '400', percentage: '20%' },
        { label: 'Total Revenue', value: '$600M', percentage: '10%' },
        { label: 'Average Sale Price', value: '$1.5M', percentage: '5%' },
      ])
    } else if (year === '2023') {
      setTrends([
        { label: 'Total Property', value: '1,200', percentage: '20%' },
        { label: 'Properties Sold', value: '350', percentage: '15%' },
        { label: 'Total Revenue', value: '$500M', percentage: '5%' },
        { label: 'Average Sale Price', value: '$1.3M', percentage: '10%' },
      ])
    } else {
      setTrends([
        { label: 'Total Property', value: '1,100', percentage: '10%' },
        { label: 'Properties Sold', value: '300', percentage: '5%' },
        { label: 'Total Revenue', value: '$400M', percentage: '0%' },
        { label: 'Average Sale Price', value: '$1.2M', percentage: '0%' },
      ])
    }
  }

  return (
    <div className='statistic-wrapper'>
      <div className='section-1'>
        <StatisticsSummary onYearChange={updateTrends} />
        <PropertyTrends trends={trends} />
        <RecentPaymments />
      </div>
      <div className='section-2'>
        <PaymentStatus />
        <Transaction />
        {/* <PropertyAssociated /> */}
        {/* <RevenueOverview /> */}
      </div>
    </div>
  )
}

export default StatisticPage
