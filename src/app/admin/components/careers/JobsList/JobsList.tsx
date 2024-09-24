import React from 'react'
import './JobsList.scss'

interface Job {
  id: number
  title: string
  department: string
  status: string
  datePosted: string
  location: string
}

const JobsListChart: React.FC = () => {
  // Sample data for the table
  const jobsData: Job[] = [
    {
      id: 1,
      title: 'Software Engineer',
      department: 'Development',
      status: 'Open',
      datePosted: '2024-04-01',
      location: 'New York',
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      status: 'Closed',
      datePosted: '2024-03-15',
      location: 'San Francisco',
    },
    {
      id: 3,
      title: 'UX Designer',
      department: 'Design',
      status: 'Open',
      datePosted: '2024-04-10',
      location: 'Remote',
    },
    {
      id: 4,
      title: 'Data Analyst',
      department: 'Analytics',
      status: 'Pending',
      datePosted: '2024-04-05',
      location: 'Chicago',
    },
    {
      id: 5,
      title: 'HR Specialist',
      department: 'Human Resources',
      status: 'Open',
      datePosted: '2024-03-20',
      location: 'Boston',
    },
  ]

  // Define table headers
  const tableHeaders: string[] = [
    'ID',
    'Job Title',
    'Department',
    'Status',
    'Date Posted',
    'Location',
  ]

  return (
    <div className='property-overview-chart-wrapper'>
      <div className='title-buttons'>
        <h1>Jobs List</h1>
        <div className='time-frame-buttons'>
          {/* Add your time frame buttons here */}
        </div>
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
                <td>{job.id}</td>
                <td>{job.title}</td>
                <td>{job.department}</td>
                <td>{job.status}</td>
                <td>{job.datePosted}</td>
                <td>{job.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JobsListChart
