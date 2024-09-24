'use client'
import React from 'react'
import styles from '../components/careers/dashboard.module.css'
import PerformanceOverView from '../components/careers/PerformanceOverview/PerformanceOverView'
import JobsList from '../components/careers/JobsList/JobsList'

const Admin = () => {
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
    {
      label: 'Add new job',
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

export default Admin
