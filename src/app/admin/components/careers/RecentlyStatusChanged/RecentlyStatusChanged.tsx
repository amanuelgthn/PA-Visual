import React from 'react'
import './RecentlyStatusChanged.scss'
import { CiLocationOn } from 'react-icons/ci'
import Link from 'next/link'

const getCurrentDate = () => {
  const date = new Date()
  return date.toLocaleDateString()
}

const jobStatusChanges = [
  {
    jobTitle: 'Cloud Engineer',
    status: 'Activated',
    date: getCurrentDate(),
    location: 'Sample Address',
  },
  {
    jobTitle: 'Content Creator',
    status: 'Deactivated',
    date: getCurrentDate(),
    location: 'Sample Address',
  },
  {
    jobTitle: 'Graphic Designer',
    status: 'Activated',
    date: getCurrentDate(),
    location: 'Sample Address',
  },
  {
    jobTitle: 'HR Assistant',
    status: 'Deactivated',
    date: getCurrentDate(),
    location: 'Sample Address',
  },
]

const getStatusStyle = (status: string) => ({
  color: status === 'Activated' ? '#05FF00' : 'rgba(255, 255, 255, 1)',
})

const RecentlyStatusChanged = () => {
  return (
    <section className='card-wrapper'>
      <div className='status-list'>
        <div className='card-header'>
          <h1>Recently Status Changed</h1>
        </div>
        <div className='card-title'>
          <h1>Job Title</h1>
          <h1>Status</h1>
        </div>

        {jobStatusChanges.map((job, index) => (
          <div key={index} className='status-item'>
            <div className='job-details'>
              <div className='job-info'>
                <Link href='#'>
                  <h4 className='job-title'>{job.jobTitle}</h4>
                </Link>
                <div className='job-location'>
                  <CiLocationOn color='rgba(255, 255, 255, 0.5)' size={15} />
                  <p>{job.location}</p>
                </div>
              </div>
            </div>
            <div className='status-details'>
              <p className='status-text' style={getStatusStyle(job.status)}>
                {job.status}
              </p>
              <p className='status-date'>{job.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentlyStatusChanged
