import React, { useState, useEffect, useRef } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './JobsList.scss'

interface Job {
  id: number
  title: string
  status: string
  applied: number
  viewed: number
  datePosted: Date
  reviewed: string
}

const JobsList: React.FC = () => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const jobsData: Job[] = [
    {
      id: 1,
      title: 'Software Engineer',
      status: 'Active',
      applied: 400,
      viewed: 200,
      datePosted: new Date(2024, 3, 1),
      reviewed: 'Available',
    },
    {
      id: 2,
      title: 'Product Manager',
      status: 'Active',
      applied: 250,
      viewed: 150,
      datePosted: new Date(2024, 3, 2),
      reviewed: 'Pending',
    },
    {
      id: 3,
      title: 'UX Designer',
      status: 'Inactive',
      applied: 300,
      viewed: 180,
      datePosted: new Date(2024, 3, 3),
      reviewed: 'Completed',
    },
    {
      id: 4,
      title: 'Data Analyst',
      status: 'Active',
      applied: 350,
      viewed: 220,
      datePosted: new Date(2024, 3, 4),
      reviewed: 'In Progress',
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
        <h1 className='jobs-list-title'>Jobs List</h1>
        <button className='view-all-button'>View All</button>
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
                  <td>{job.title}</td>
                  <td>{job.status}</td>
                  <td>{job.applied}</td>
                  <td>{job.viewed}</td>
                  <td>{job.datePosted.toLocaleDateString()}</td>
                  <td>{job.reviewed}</td>
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

export default JobsList
