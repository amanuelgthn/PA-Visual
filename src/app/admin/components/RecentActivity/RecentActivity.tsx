import React from 'react'
import './RecentActivity.scss'
import Image from 'next/image'
import { Button } from 'antd'
type RecentActivityData = {
  activityId: number
  activityName: string
  activityDate: string
}

type RecentActivityProps = {
  recentActivityData: RecentActivityData[]
}

const RecentActivity = ({ recentActivityData }: RecentActivityProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }
    return date.toLocaleDateString('en-US', options).replace(',', '')
  }
  return (
    <div className='activity-wraper'>
      <div className='title-button'>
        <h2>Recent Activity</h2>
        <Button type='link' className='view-all'>
          {' '}
          View All
        </Button>
      </div>
      <div className='activity'>
        {recentActivityData.map((activity) => (
          <div key={activity.activityId} className='activity-container'>
            <div className='activity-img'>
              {activity.activityName.includes('New Property') ? (
                <Image
                  width={20}
                  height={20}
                  src='/dashboard/home.png'
                  alt='new property'
                />
              ) : activity.activityName.includes('Property sold') ? (
                <Image
                  width={20}
                  height={20}
                  src='/dashboard/money.png'
                  alt='property sold'
                />
              ) : activity.activityName.includes('New user') ? (
                <Image
                  width={20}
                  height={20}
                  src='/dashboard/new-user.png'
                  alt='new user'
                />
              ) : null}
            </div>
            <div className='activity-info'>
              <h3>{activity.activityName}</h3>
              <p>{formatDate(activity.activityDate)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity
