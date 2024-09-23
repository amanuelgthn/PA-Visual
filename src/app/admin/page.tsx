'use client'
import React from 'react'
import styles from '../admin/adminStyles/dashboard.module.css' // Import CSS module
import PerformanceOverView from './components/PerformanceOverview/PerformanceOverView'
import PropertyOverViewChart from './components/PropertyOverView/PropertyOverViewChart'
import RevenueOverViewChart from './components/RevenueOverView/RevenueOverView'
import RecentActivity from './components/RecentActivity/RecentActivity'
import DonutChart from './components/DonutChart/DonutChart'

const Admin = () => {
  const data = [
    {
      label: 'Total Properties',
      value: '1,245',
      percentageChange: 25,
      changeDirection: 'up',
    },
    {
      label: 'Properties Sold',
      value: 500,
      percentageChange: 25,
      changeDirection: 'up',
    },
    {
      label: 'Active Listings',
      value: 200,
      percentageChange: 25,
      changeDirection: 'down',
    },
    {
      label: 'Total Revenue',
      value: '$542M',
      percentageChange: 25,
      changeDirection: 'up',
    },
  ]
  const propertyOverViewData = {
    weekly: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [
        [5, 10, 7, 15], // Sold Property
        [15, 20, 25, 10], // Listed Property
      ],
    },
    monthly: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      data: [
        [30, 50, 40, 60, 45, 35, 65, 55, 60, 50, 70, 80], // Sold Property
        [60, 70, 65, 80, 70, 60, 80, 70, 75, 65, 85, 90, 100], // Listed Property
      ],
    },
    annually: {
      labels: ['2020', '2021', '2022', '2023'],
      data: [
        [400, 450, 500, 600], // Sold Property
        [600, 700, 800, 900], // Listed Property
      ],
    },
  }
  const revenueData = {
    weekly: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [500, 700, 1500, 2000, 1800, 1300, 1600], // Varying values
    },
    monthly: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      data: [
        1200, 1500, 1800, 1600, 2000, 2300, 2500, 2050, 1700, 1900, 2100, 2400,
      ], // Varying values
    },
    annually: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      data: [15000, 18000, 17500], // Varying values
    },
  }
  const recentActivityData = [
    {
      activityId: 1,
      activityName: 'New Property Listed: Luxury Villa in Malibu',
      activityDate: '2023-08-22T19:20:00',
    },
    {
      activityId: 2,
      activityName: 'Property sold: Penthouse in New York for $4.5M ',
      activityDate: '2023-08-21T15:45:00',
    },
    {
      activityId: 3,
      activityName: 'New user: Emma Thompson',
      activityDate: '2023-08-20T10:30:00',
    },
  ]
  return (
    <main className={styles.adminwrapper}>
      <PerformanceOverView pageType='dashboard' data={data} />
      <div className={styles.trends}>
        <PropertyOverViewChart dataSets={propertyOverViewData} />
        <RevenueOverViewChart dataSets={revenueData} />
      </div>
      <div className={styles.recentActivities}>
        <RecentActivity recentActivityData={recentActivityData} />
        <DonutChart
          percentage={68}
          investorsInCountry='UK'
          propertiesInEU={20}
          propertiesInUS={1.34}
        />
      </div>
    </main>
  )
}

export default Admin
