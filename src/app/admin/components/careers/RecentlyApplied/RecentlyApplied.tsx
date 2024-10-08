import React from 'react'
import './RecentlyApplied.scss'
import { CiLocationOn } from 'react-icons/ci'
import Link from 'next/link'

const applications = [
  {
    jobTitle: 'Cloud Engineer',
    applicantName: 'Sam Wheeler',
    applicantEmail: 'sam.wheeler@example.com',
    location: 'Sample Address',
  },
  {
    jobTitle: 'Content Creator',
    applicantName: 'John Doe',
    applicantEmail: 'john.doe@example.com',
    location: 'Sample Address',
  },
  {
    jobTitle: 'Graphic Designer',
    applicantName: 'Jane Smith',
    applicantEmail: 'jane.smith@example.com',
    location: 'Sample Address',
  },
  {
    jobTitle: 'HR Assistant',
    applicantName: 'Emily Johnson',
    applicantEmail: 'emily.johnson@example.com',
    location: 'Sample Address',
  },
]

const RecentlyApplied = () => {
  return (
    <section className='card-wrapper'>
      <div className='applications-list'>
        <div className='card-header'>
          <h1>Recently Applied</h1>
        </div>
        <div className='card-title'>
          <h1>Job Position</h1>
          <h1>Applicant</h1>
        </div>

        {applications.map((application, index) => (
          <div key={index} className='application-item'>
            <div className='job-details'>
              <div className='job-info'>
                <Link href='#'>
                  <h4 className='job-title'>{application.jobTitle}</h4>
                </Link>
                <div className='job-location'>
                  <CiLocationOn color='rgba(255, 255, 255, 0.5)' size={15} />
                  <p>{application.location}</p>
                </div>
              </div>
            </div>
            <div className='applicant-details'>
              <p className='applicant-name'>{application.applicantName}</p>
              <p className='applicant-email'>{application.applicantEmail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentlyApplied
