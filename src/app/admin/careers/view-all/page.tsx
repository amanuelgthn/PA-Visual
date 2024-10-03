'use client'
import React, { useState, useEffect, useRef } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './view-all.scss'

interface Job {
  id: number
  title: string
  status: string
  applied: number
  viewed: number
  datePosted: Date
  reviewed: string
  location: string
}

const ViewAllPage: React.FC = () => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const jobsData: Job[] = [
    {
      id: 1,
      title: 'HR Recruitment',
      status: 'Active',
      applied: 10,
      viewed: 400,
      datePosted: new Date(2024, 1, 20), // 20 Feb 2024
      reviewed: 'Available',
      location: 'New York, 335W, Karen Center',
    },
    {
      id: 2,
      title: 'Interior Designer',
      status: 'Active',
      applied: 300,
      viewed: 500,
      datePosted: new Date(2024, 0, 3),
      reviewed: 'Available',
      location: 'New York, 335W, Karen Center',
    },
    {
      id: 3,
      title: 'Sales Director',
      status: 'Inactive',
      applied: 200,
      viewed: 700,
      datePosted: new Date(2024, 0, 15),
      reviewed: 'Pending',
      location: 'New York, 335W, Karen Center',
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      status: 'Active',
      applied: 500,
      viewed: 900,
      datePosted: new Date(2024, 10, 8),
      reviewed: 'Pending',
      location: 'New York, 335W, Karen Center',
    },
    {
      id: 5,
      title: 'HR Recruitment',
      status: 'Active',
      applied: 10,
      viewed: 400,
      datePosted: new Date(2024, 1, 20),
      reviewed: 'Available',
      location: 'New York, 335W, Karen Center',
    },
    {
      id: 6,
      title: 'Interior Designer',
      status: 'Active',
      applied: 300,
      viewed: 500,
      datePosted: new Date(2024, 0, 3),
      reviewed: 'Available',
      location: 'New York, 335W, Karen Center',
    },
    {
      id: 7,
      title: 'Sales Director',
      status: 'Inactive',
      applied: 200,
      viewed: 700,
      datePosted: new Date(2024, 0, 15),
      reviewed: 'Pending',
      location: 'New York, 335W, Karen Center',
    },
    {
      id: 8,
      title: 'UX/UI Designer',
      status: 'Active',
      applied: 500,
      viewed: 900,
      datePosted: new Date(2024, 10, 8),
      reviewed: 'Pending',
      location: 'New York, 335W, Karen Center',
    },
    {
      id: 9,
      title: 'UX/UI Designer',
      status: 'Active',
      applied: 200,
      viewed: 700,
      datePosted: new Date(2024, 0, 3),
      reviewed: 'Pending',
      location: 'New York, 335W, Karen Center',
    },
  ]

  const tableHeaders: string[] = [
    'Job Title',
    'Status',
    'Applied',
    'Viewed',
    'Date Posted',
    'Reviewed',
    'Actions',
  ]

  const toggleMenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMenuId(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <section className='jobs-list'>
      <div className='jobs-list-header'>
        <h1 className='jobs-list-title'>All Jobs</h1>
      </div>
      <div className='jobs-list-container'>
        <div className='jobs-table-container'>
          <table className='jobs-table'>
            <thead>
              <tr>
                {tableHeaders.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jobsData.map((job) => (
                <tr key={job.id}>
                  <td>
                    <div className='job-info'>
                      <div className='job-details'>
                        <div className='job-title'>{job.title}</div>
                        <div className='job-location'>
                          {' '}
                          <i className='fas fa-map-marker-alt'></i>
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={`status ${job.status.toLowerCase()}`}>
                    {job.status}
                  </td>
                  <td>{job.applied}</td>
                  <td>{job.viewed}</td>
                  <td>{job.datePosted.toLocaleDateString()}</td>
                  <td
                    className={`status ${job.reviewed.toLowerCase().replace(' ', '-')}`}
                  >
                    {job.reviewed}
                  </td>
                  <td>
                    <div className='actions-container'>
                      <button
                        className='more-button'
                        onClick={() => toggleMenu(job.id)}
                      >
                        &#x22EE;
                      </button>
                      {openMenuId === job.id && (
                        <div className='dropdown-menu' ref={dropdownRef}>
                          <button className='menu-item'>
                            <i className='fas fa-pencil-alt'></i> Edit
                          </button>
                          <button className='menu-item'>
                            <i className='fas fa-trash'></i> Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ViewAllPage
