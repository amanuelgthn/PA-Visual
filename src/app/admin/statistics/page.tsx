import React from 'react'
import './statistics.scss'
import PropertyTrends from '../components/Statistics/PropertyTrends/PropertyTrends'
import RevenueOverview from '../components/Statistics/RevenueOverview/RevenueOverview'
import PropertyAssociated from '../components/Statistics/PropertyAssociated/PropertyAssociated'
import RecentPaymments from '../components/Statistics/RecentPaymments/RecentPaymments'
import StatisticsSummary from '../components/Statistics/StatisticsSummary/StatisticsSummary'

const statisticPage = () => {
  return (
    <div className='statistic-wrapper'>
      <div className='section-1'>
        <StatisticsSummary />
        <PropertyTrends />
        <RecentPaymments />
      </div>
      <div className='section-2'>
        <PropertyAssociated />
        <RevenueOverview />
      </div>
    </div>
  )
}

export default statisticPage
