import React from 'react'
import './JobInfo.scss'

type JobInfoProps = {
  jobInfo: {
    jobId: string
    jobCategory: string
    jobPostDate: string
    jobSchedule: string
    joblocation: string
    jobPayRange: string
    jobTitle: string
    jobOverview: string
  }
  onClose: () => void
}

const JobInfo = ({ jobInfo }: JobInfoProps) => {
  const jobDetails = [
    { label: 'Job Identification', value: jobInfo.jobId },
    { label: 'Job Category', value: jobInfo.jobCategory },
    { label: 'Posting Date', value: jobInfo.jobPostDate },
    { label: 'Job Schedule', value: jobInfo.jobSchedule },
    {
      label: 'Locations',
      value: (
        <>
          <img
            src='../icons/location-icon.png'
            alt='Location Icon'
            width={10}
            height={10}
          />{' '}
          {jobInfo.joblocation}
        </>
      ),
    },
    { label: 'Pay Range', value: jobInfo.jobPayRange },
  ]
  return (
    <main className='job-info-wrapper'>
      <h1 style={{ textAlign: 'center' }}>JOB INFO</h1>

      {jobDetails.map((jobDetail, index) => (
        <div key={index} className='info'>
          <div className='label'>{jobDetail.label}</div>
          <div className='value'>{jobDetail.value}</div>
        </div>
      ))}
    </main>
  )
}

export default JobInfo
