'use client'
import React from 'react'
import styles from '../components/careers/dashboard.module.css'
import PerformanceOverView from '../components/careers/PerformanceOverview/PerformanceOverView'
import JobsList from '../components/careers/JobsList/JobsList'
import RecentlyApplied from '../components/careers/RecentlyApplied/RecentlyApplied'
import RecentlyStatusChanged from '../components/careers/RecentlyStatusChanged/RecentlyStatusChanged'
import Applied from '../components/careers/Applied/Applied'
import Categories from '../components/careers/Categories/Categories'

const Careers = () => {
  const data = [
    {
      label: 'Views',
      value: '1,245',
      percentageChange: 25,
      changeDirection: 'up',
    },
    {
      label: 'Applied',
      value: 500,
      percentageChange: 25,
      changeDirection: 'up',
    },
    {
      label: 'Jobs pending',
      value: 200,
      percentageChange: 25,
      changeDirection: 'down',
    },
  ]

  return (
    <main className={styles.adminwrapper}>
      <PerformanceOverView pageType='dashboard' data={data} />
      <div className={styles.trends}>
        <JobsList />
      </div>
      <div className={styles.allstyles}>
        <div className={styles.statistics}>
          <RecentlyApplied />
          <RecentlyStatusChanged />
        </div>
        <div className={styles.statistics1}>
          <Applied />
          <Categories />
        </div>
      </div>
      <div className={styles.recentActivities}></div>
    </main>
  )
}

export default Careers
