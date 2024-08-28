import React from 'react'
import './Header.scss'

type JobHeaderProps = {
  JobTitle: string
  jobLocation: string
}

const JobHeader = ({ jobLocation, JobTitle }: JobHeaderProps) => {
  return (
    <header className='header'>
      <div className='header-buttons'>
        <img
          src='./icons/share-icon.png'
          alt='share-icon'
          width={15}
          height={15}
        />
        <img
          src='./icons/star-icon.png'
          alt='star-icon'
          width={15}
          height={15}
        />
        <span className='view-more-jobs'>
          <img
            src='./icons/view-more-icon.png'
            alt='viewMore-icon'
            width={15}
            height={15}
          />
          <p>View More Jobs</p>
        </span>
      </div>
      <h1>{JobTitle}</h1>
      <p>{jobLocation}</p>
    </header>
  )
}

export default JobHeader
