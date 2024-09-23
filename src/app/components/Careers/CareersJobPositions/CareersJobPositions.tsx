// CareersSection.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Input, Cascader, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import JobDetailModal from '../../Job/JobDetailModal/JobDetailModal'
import { jobData, JobType } from '../../Job/jobData/jobData'
import '@fontsource/montserrat'
import './CareersJobPositions.scss'

export default function CareersSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<null | JobType>(null)
  const [filteredPositions, setFilteredPositions] = useState<JobType[]>(jobData)
  const [searchText, setSearchText] = useState('')
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [sortAscending, setSortAscending] = useState(true)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const jobCategories = [
    'Engineering',
    'Product Management',
    'Design',
    'Marketing',
  ]
  const jobFunctions = ['Development', 'Management', 'Design', 'Sales']
  const workLocations = ['Remote', 'On-site', 'Hybrid']
  const postingDates = [
    'Last 24 hours',
    'Last 7 days',
    'Last 14 days',
    'Last 30 days',
  ]

  // Apply Filters
  const applyFilters = (
    search: string,
    location: string | null,
    filters: string[],
  ) => {
    let filtered = jobData

    // Search Filter
    if (search) {
      filtered = filtered.filter((job) =>
        job.JobTitle.toLowerCase().includes(search.toLowerCase()),
      )
    }

    // Location Filter
    if (location) {
      filtered = filtered.filter((job) => job.jobLocation === location)
    }

    // Apply all other filters
    filters.forEach((filter) => {
      const [filterType, filterValue] = filter.split(':')
      switch (filterType) {
        case 'Category':
          filtered = filtered.filter((job) => job.jobCategory === filterValue)
          break
        case 'JobFunction':
          filtered = filtered.filter((job) => job.jobFunctions === filterValue)
          break
        case 'Location':
          filtered = filtered.filter((job) => job.jobLocation === filterValue)
          break
        case 'PostingDate':
          filtered = filtered.filter((job) =>
            new Date(job.jobPostDate)
              .toLocaleDateString('en-US')
              .includes(filterValue),
          )
          break
        default:
          break
      }
    })

    setFilteredPositions(filtered)
  }

  // Handle Search
  const handleSearch = (value: string) => {
    setSearchText(value)
    applyFilters(value, selectedLocation, activeFilters)
  }

  // Handle Location Change
  const handleLocationChange = (value: string[]) => {
    const selected = value[0] || null
    setSelectedLocation(selected)

    // Update filters to reflect location
    const updatedFilters = activeFilters.filter(
      (filter) => !filter.startsWith('Location:'),
    )
    if (selected) {
      updatedFilters.push(`Location:${selected}`)
    }

    setActiveFilters(updatedFilters)
    applyFilters(searchText, selected, updatedFilters)
  }

  // Sort by Posting Date
  const handleSortByPostingDate = () => {
    const newSortOrder = !sortAscending
    setSortAscending(newSortOrder)
    const sortedPositions = [...filteredPositions].sort((a, b) => {
      const dateA = new Date(a.jobPostDate).getTime()
      const dateB = new Date(b.jobPostDate).getTime()
      return newSortOrder ? dateA - dateB : dateB - dateA
    })
    setFilteredPositions(sortedPositions)
  }

  // Handle Filter Click
  const handleFilterClick = (filterType: string, value: string) => {
    let updatedFilters = [...activeFilters]

    // Remove any existing filter for the same filter type
    updatedFilters = updatedFilters.filter(
      (filter) => !filter.startsWith(`${filterType}:`),
    )

    // Add the new filter key
    updatedFilters.push(`${filterType}:${value}`)

    // Update the active filters
    setActiveFilters(updatedFilters)
    applyFilters(searchText, selectedLocation, updatedFilters)
  }

  // Clear All Filters
  const clearFilters = () => {
    setSearchText('')
    setSelectedLocation(null)
    setActiveFilters([])
    setFilteredPositions(jobData)
  }

  // Dropdown Menus for Filters
  const createMenu = (items: string[], filterType: string) => (
    <Menu>
      {items.map((item) => (
        <Menu.Item
          key={item}
          onClick={() => handleFilterClick(filterType, item)}
        >
          {item}
        </Menu.Item>
      ))}
    </Menu>
  )

  // Unique Locations
  const uniqueLocations = Array.from(
    new Set(jobData.map((job) => job.jobLocation)),
  )

  return (
    <div>
      {/* Job Search Engine Section */}
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

      {/* Buttons Section */}
      <section className='buttonsSection'>
        <div className='buttonGroup'>
          <button className='buttonOpenJobs' onClick={clearFilters}>
            {filteredPositions.length} OPEN JOBS
          </button>
          <Dropdown
            overlay={createMenu(uniqueLocations, 'Location')}
            trigger={['click']}
          >
            <button className='button'>
              LOCATIONS <DownOutlined />
            </button>
          </Dropdown>
          <Dropdown
            overlay={createMenu(workLocations, 'WorkLocation')}
            trigger={['click']}
          >
            <button className='button'>
              WORK LOCATIONS <DownOutlined />
            </button>
          </Dropdown>
          <Dropdown
            overlay={createMenu(jobFunctions, 'JobFunction')}
            trigger={['click']}
          >
            <button className='button'>
              JOB FUNCTIONS <DownOutlined />
            </button>
          </Dropdown>
          <Dropdown
            overlay={createMenu(jobCategories, 'Category')}
            trigger={['click']}
          >
            <button className='button'>
              CATEGORIES <DownOutlined />
            </button>
          </Dropdown>
          <Dropdown
            overlay={createMenu(postingDates, 'PostingDate')}
            trigger={['click']}
          >
            <button className='button'>
              POSTING DATES <DownOutlined />
            </button>
          </Dropdown>
        </div>
        <div className='clearGroup'>
          <button className='button clearFilters' onClick={clearFilters}>
            CLEAR FILTERS
          </button>
        </div>
      </section>

      {/* Job Positions Section */}
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

      {/* Updated JobDetailModal invocation with key prop */}
      {selectedJob && (
        <JobDetailModal
          key={selectedJob.jobId} // Add this line to reset the modal state when selectedJob changes
          jobData={selectedJob}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
