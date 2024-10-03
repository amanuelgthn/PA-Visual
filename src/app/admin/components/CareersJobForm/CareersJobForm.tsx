'use client'
import React from 'react'
import styles from '../components/careers/dashboard.module.css'
import PerformanceOverView from '../careers/PerformanceOverview/PerformanceOverView'
import JobsList from '../careers/JobsList/JobsList'

const CareersJobForm = () => {
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
      <div className={styles.recentActivities}></div>
    </main>
  )
}

export default CareersJobForm
