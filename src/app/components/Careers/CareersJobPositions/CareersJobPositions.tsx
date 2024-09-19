'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Cascader, Dropdown, Menu, Input } from 'antd'
import '@fontsource/montserrat'
import './CareersJobPositions.scss'
import JobDetailModal from '../../Job/JobDetailModal/JobDetailModal'
export default function CareersSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<null | {
    JobTitle: string
    jobLocation: string
    jobDescription: string
    jobResponsibilities: string
    jobRequirements: string
    jobId: string
    jobCategory: string
    jobPostDate: string
    jobSchedule: string
    jobPayRange: string
    jobOverview: string
    similarJobs: {
      jobId: string
      JobTitle: string
      jobLocation: string
      jobDescription: string
      jobResponsibilities: string
      jobRequirements: string
      jobCategory: string
      jobPostDate: string
      jobSchedule: string
      jobPayRange: string
      jobOverview: string
    }[]
  }>(null)
  const jobData = [
    {
      JobTitle: 'Software Engineer',
      jobLocation: 'San Francisco, CA',
      jobDescription:
        'We are looking for a skilled Software Engineer to join our team. You will be responsible for developing high-quality applications.',
      jobResponsibilities:
        'Design, develop, and maintain software applications. Collaborate with cross-functional teams. Write clean, scalable code.',
      jobRequirements:
        "Bachelor's degree in Computer Science or related field. 3+ years of experience in software development. Proficiency in JavaScript, React, and Node.js.",
      jobId: '12345',
      jobCategory: 'Engineering',
      jobPostDate: '2023-10-01',
      jobSchedule: 'Full-time',
      jobPayRange: '$100,000 - $120,000',
      jobOverview:
        'We are looking for a skilled Software Engineer to join our team. You will be responsible for developing high-quality applications.',
      similarJobs: [
        {
          JobTitle: 'Frontend Developer',
          jobLocation: 'San Francisco, CA',
          jobDescription:
            'We are looking for a skilled Frontend Developer to join our team. You will be responsible for developing high-quality applications.',
          jobResponsibilities:
            'Design, develop, and maintain software applications. Collaborate with cross-functional teams. Write clean, scalable code.',
          jobRequirements:
            "Bachelor's degree in Computer Science or related field. 3+ years of experience in software development. Proficiency in JavaScript, React, and Node.js.",
          jobId: '12346',
          jobCategory: 'Engineering',
          jobPostDate: '2023-09-25',
          jobSchedule: 'Full-time',
          jobPayRange: '$90,000 - $110,000',
          jobOverview:
            'We are looking for a skilled Frontend Developer to join our team. You will be responsible for developing high-quality applications.',
        },
        {
          JobTitle: 'Backend Developer',
          jobLocation: 'San Francisco, CA',
          jobDescription:
            'We are looking for a skilled Backend Developer to join our team. You will be responsible for developing high-quality applications.',
          jobResponsibilities:
            'Design, develop, and maintain software applications. Collaborate with cross-functional teams. Write clean, scalable code.',
          jobRequirements:
            "Bachelor's degree in Computer Science or related field. 3+ years of experience in software development. Proficiency in JavaScript, React, and Node.js.",
          jobId: '12347',
          jobCategory: 'Engineering',
          jobPostDate: '2023-09-20',
          jobSchedule: 'Full-time',
          jobPayRange: '$95,000 - $115,000',
          jobOverview:
            'We are looking for a skilled Backend Developer to join our team. You will be responsible for developing high-quality applications.',
        },
        {
          JobTitle: 'Full Stack Developer',
          jobLocation: 'San Francisco, CA',
          jobDescription:
            'We are looking for a skilled Full Stack Developer to join our team. You will be responsible for developing high-quality applications.',
          jobResponsibilities:
            'Design, develop, and maintain software applications. Collaborate with cross-functional teams. Write clean, scalable code.',
          jobRequirements:
            "Bachelor's degree in Computer Science or related field. 3+ years of experience in software development. Proficiency in JavaScript, React, and Node.js.",
          jobId: '12348',
          jobCategory: 'Engineering',
          jobPostDate: '2023-09-15',
          jobSchedule: 'Full-time',
          jobPayRange: '$100,000 - $120,000',
          jobOverview:
            'We are looking for a skilled Full Stack Developer to join our team. You will be responsible for developing high-quality applications.',
        },
      ],
    },
    {
      JobTitle: 'Product Manager',
      jobLocation: 'New York, NY',
      jobDescription:
        'We are looking for an experienced Product Manager to lead our product development team. You will be responsible for the product roadmap and strategy.',
      jobResponsibilities:
        'Define product vision and strategy. Work with cross-functional teams. Analyze market trends and competition.',
      jobRequirements:
        "Bachelor's degree in Business or related field. 5+ years of experience in product management. Strong analytical and communication skills.",
      jobId: '12346',
      jobCategory: 'Product Management',
      jobPostDate: '2023-09-25',
      jobSchedule: 'Full-time',
      jobPayRange: '$120,000 - $140,000',
      jobOverview:
        'We are looking for an experienced Product Manager to lead our product development team. You will be responsible for the product roadmap and strategy.',
      similarJobs: [
        {
          JobTitle: 'Senior Product Manager',
          jobLocation: 'New York, NY',
          jobDescription:
            'We are looking for an experienced Senior Product Manager to lead our product development team. You will be responsible for the product roadmap and strategy.',
          jobResponsibilities:
            'Define product vision and strategy. Work with cross-functional teams. Analyze market trends and competition.',
          jobRequirements:
            "Bachelor's degree in Business or related field. 5+ years of experience in product management. Strong analytical and communication skills.",
          jobId: '12347',
          jobCategory: 'Product Management',
          jobPostDate: '2023-09-20',
          jobSchedule: 'Full-time',
          jobPayRange: '$130,000 - $150,000',
          jobOverview:
            'We are looking for an experienced Senior Product Manager to lead our product development team. You will be responsible for the product roadmap and strategy.',
        },
        {
          JobTitle: 'Technical Product Manager',
          jobLocation: 'New York, NY',
          jobDescription:
            'We are looking for an experienced Technical Product Manager to lead our product development team. You will be responsible for the product roadmap and strategy.',
          jobResponsibilities:
            'Define product vision and strategy. Work with cross-functional teams. Analyze market trends and competition.',
          jobRequirements:
            "Bachelor's degree in Business or related field. 5+ years of experience in product management. Strong analytical and communication skills.",
          jobId: '12348',
          jobCategory: 'Product Management',
          jobPostDate: '2023-09-15',
          jobSchedule: 'Full-time',
          jobPayRange: '$125,000 - $145,000',
          jobOverview:
            'We are looking for an experienced Technical Product Manager to lead our product development team. You will be responsible for the product roadmap and strategy.',
        },
        {
          JobTitle: 'Product Owner',
          jobLocation: 'New York, NY',
          jobDescription:
            'We are looking for an experienced Product Owner to lead our product development team. You will be responsible for the product roadmap and strategy.',
          jobResponsibilities:
            'Define product vision and strategy. Work with cross-functional teams. Analyze market trends and competition.',
          jobRequirements:
            "Bachelor's degree in Business or related field. 5+ years of experience in product management. Strong analytical and communication skills.",
          jobId: '12349',
          jobCategory: 'Product Management',
          jobPostDate: '2023-09-10',
          jobSchedule: 'Full-time',
          jobPayRange: '$120,000 - $140,000',
          jobOverview:
            'We are looking for an experienced Product Owner to lead our product development team. You will be responsible for the product roadmap and strategy.',
        },
      ],
    },
  ]
  // State for filtered job positions
  const [filteredPositions, setFilteredPositions] = useState(jobData)
  // State for search text input
  const [searchText, setSearchText] = useState('')
  // State for selected location filter
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  // State for sorting order by posting date
  const [sortAscending, setSortAscending] = useState(true)
  // Applies filters based on search text and selected location
  const applyFilters = (searchText: string, location: string | null) => {
    let filtered = jobData
    // Filter by search text
    if (searchText) {
      filtered = filtered.filter((job) =>
        job.JobTitle.toLowerCase().includes(searchText.toLowerCase()),
      )
    }
    // Filter by location
    if (location) {
      filtered = filtered.filter((job) => job.jobLocation === location)
    }
    setFilteredPositions(filtered)
  }
  // Handles changes in the search input field
  const handleSearch = (value: string) => {
    setSearchText(value)
    applyFilters(value, selectedLocation)
  }
  // Handles changes in the location dropdown
  const handleLocationChange = (value: string[]) => {
    const selected = value[0] || null
    setSelectedLocation(selected)
    applyFilters(searchText, selected)
  }
  // Handles button clicks for different filter types
  const handleButtonClick = (filterType: string) => {
    switch (filterType) {
      case 'locations':
        setFilteredPositions(jobData)
        break
      case 'workLocations':
        setFilteredPositions(jobData)
        break
      case 'jobFunctions':
        // Placeholder for future implementation
        break
      case 'categories':
        // Placeholder for future implementation
        break
      case 'postingDates':
        // Placeholder for future implementation
        break
      default:
        setFilteredPositions(jobData)
    }
  }
  // Toggles sorting order and sorts job positions by posting date
  const handleSortByPostingDate = () => {
    const newSortOrder = !sortAscending
    setSortAscending(newSortOrder)
    const sortedPositions = [...filteredPositions].sort((a, b) => {
      if (newSortOrder) {
        return (
          new Date(a.jobPostDate).getTime() - new Date(b.jobPostDate).getTime()
        )
      } else {
        return (
          new Date(b.jobPostDate).getTime() - new Date(a.jobPostDate).getTime()
        )
      }
    })
    setFilteredPositions(sortedPositions)
  }
  // Clears all filters and resets to initial job positions
  const clearFilters = () => {
    setSearchText('')
    setSelectedLocation(null)
    setFilteredPositions(jobData)
  }
  // Count job positions per location for displaying in the menu
  const locationCounts = jobData.reduce(
    (acc, job) => {
      acc[job.jobLocation] = (acc[job.jobLocation] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )
  // Get unique locations from job positions
  const uniqueLocations = Array.from(
    new Set(jobData.map((job) => job.jobLocation)),
  )
  // Menu for selecting locations
  const locationMenu = (
    <Menu onClick={({ key }) => handleLocationChange([key])}>
      {uniqueLocations.map((location) => (
        <Menu.Item key={location}>
          {`${location} (${locationCounts[location]})`}
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <div>
      <section className='backgroundColorSection'>
        <section className='jobSearchEngineSection'>
          <form className='jobSearchForm'>
            <Input
              placeholder='FIND JOBS'
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              className='custom-jobs-input'
            />
            <div className='separator' />
            <Cascader
              options={uniqueLocations.map((location) => ({
                value: location,
                label: location,
              }))}
              onChange={handleLocationChange}
              placeholder='NEAR LOCATION'
              className='custom-location-cascader'
            />
          </form>
        </section>
        <section className='buttonsSection'>
          <div className='buttonGroup'>
            <button
              className='buttonOpenJobs'
              onClick={() => handleButtonClick('openJobs')}
            >
              {filteredPositions.length} OPEN JOBS
            </button>
            <div className='separator-between-buttons' />
            <Dropdown overlay={locationMenu} trigger={['click']}>
              <Button className='button locations'>LOCATIONS</Button>
            </Dropdown>
            <button
              className='button workLocations'
              onClick={() => handleButtonClick('workLocations')}
            >
              WORK LOCATIONS
            </button>
            <button
              className='button jobFunctions'
              onClick={() => handleButtonClick('jobFunctions')}
            >
              JOB FUNCTIONS
            </button>
            <button
              className='button categories'
              onClick={() => handleButtonClick('categories')}
            >
              CATEGORIES
            </button>
            <button
              className='button postingDates'
              onClick={() => handleButtonClick('postingDates')}
            >
              POSTING DATES
            </button>
          </div>
          <div className='clearGroup'>
            <button className='button clearFilters' onClick={clearFilters}>
              CLEAR FILTERS
            </button>
          </div>
        </section>
        <section className='jobPositionsSection'>
          <div className='dateFilter'>
            <Button
              className='PostingDateFilter'
              onClick={handleSortByPostingDate}
            >
              Posting Date {sortAscending ? '⮃' : '⮁'}
            </Button>
          </div>
          <div className='jobPositionsContainer'>
            <div className='jobPositions'>
              {filteredPositions.map((job, index) => (
                <div
                  onClick={() => {
                    setSelectedJob(job)
                    setIsOpen(true)
                  }}
                  key={job.jobId}
                  className={`jobPosition ${
                    index % 2 === 0 ? 'jobPositionLight' : 'jobPositionDark'
                  }`}
                >
                  <div className='titleContainer'>
                    <h1 className='title'>{job.JobTitle}</h1>
                    <p className='description'>
                      {job.jobLocation} • Posting Date:{' '}
                      {new Date(job.jobPostDate).toLocaleDateString('en-US')}
                    </p>
                  </div>
                  <div className='iconsContainer'>
                    <div className='starIcon'>
                      <Image
                        src='/careers/careersicon1.png'
                        width={18}
                        height={17}
                        alt='starIcon'
                      />
                    </div>
                    <div className='arrowIcon'>
                      <Image
                        src='/careers/careersicon2.png'
                        width={10}
                        height={21}
                        alt='arrowIcon'
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {selectedJob && (
        <JobDetailModal
          jobData={selectedJob}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
