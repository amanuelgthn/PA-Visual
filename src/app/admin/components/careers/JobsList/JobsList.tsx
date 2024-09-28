'use client'

import React, { useState, useEffect, useRef } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './JobsList.scss'

interface Job {
  id: number
  title: string
  status: string
  applied: number
  viewed: number
  date_posted: Date
  reviewed: string
}

const JobsList: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const jobsData: Job[] = [
    {
      id: 1,
      title: 'Software Engineer',
      status: 'Active',
      applied: 400,
      viewed: 200,
      date_posted: new Date(2024, 3, 1),
      reviewed: 'Available',
    },
    {
      id: 2,
      title: 'Product Manager',
      status: 'Active',
      applied: 250,
      viewed: 150,
      date_posted: new Date(2024, 3, 2),
      reviewed: 'Pending',
    },
    {
      id: 3,
      title: 'UX Designer',
      status: 'Inactive',
      applied: 300,
      viewed: 180,
      date_posted: new Date(2024, 3, 3),
      reviewed: 'Completed',
    },
    {
      id: 4,
      title: 'Data Analyst',
      status: 'Active',
      applied: 350,
      viewed: 220,
      date_posted: new Date(2024, 3, 4),
      reviewed: 'In Progress',
    },
  ]

  const tableHeaders: string[] = [
    'Job title',
    'Status',
    'Applied',
    'Viewed',
    'Date posted',
    'Reviewed',
    'Actions',
  ]

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id)
  }

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <>
      <section className='globalStyles'>
        <section className='titleContainer'>
          <h1 className='jobsListTitle'>Jobs List</h1>
          <button className='viewAllFilter'>View All</button>
        </section>
        <section className='jobsListContainer'>
          <div className='title-buttons'>
            <div className='time-frame-buttons'></div>
          </div>

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
                    <td>{job.title}</td>
                    <td>{job.status}</td>
                    <td>{job.applied}</td>
                    <td>{job.viewed}</td>
                    <td>{job.date_posted.toLocaleDateString()}</td>
                    <td>{job.reviewed}</td>
                    <td>
                      <div className='actions-container'>
                        <button
                          className='more-button'
                          onClick={() => toggleMenu(job.id)}
                        >
                          &#x22EE;
                        </button>
                        {openMenu === job.id && (
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
        </section>
      </section>
    </>
  )
}

export default JobsList
