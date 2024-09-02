'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Cascader, Dropdown, Menu, Input } from 'antd'
import '@fontsource/montserrat'
import './CareersJobPositions.scss'

// Generates a list of job positions with dummy data
const generateJobPositions = (count: number) => {
  const locations = [
    'New York, NY, United States',
    'Los Angeles, CA, United States',
    'Chicago, IL, United States',
    'Miami, FL, United States',
    'Austin, TX, United States',
  ]

  const today = new Date()
  return Array.from({ length: count }, (_, index) => {
    const title = `Job Position ${index + 1}`
    const location = locations[index % locations.length]
    const postingDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - index,
    )

    return { id: index + 1, title, location, postingDate }
  })
}

export default function CareersSection() {
  // Initial job positions
  const jobPositions = generateJobPositions(20)

  // State for filtered job positions
  const [filteredPositions, setFilteredPositions] = useState(jobPositions)
  // State for search text input
  const [searchText, setSearchText] = useState('')
  // State for selected location filter
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  // State for sorting order by posting date
  const [sortAscending, setSortAscending] = useState(true)

  // Applies filters based on search text and selected location
  const applyFilters = (searchText: string, location: string | null) => {
    let filtered = jobPositions

    // Filter by search text
    if (searchText) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(searchText.toLowerCase()),
      )
    }

    // Filter by location
    if (location) {
      filtered = filtered.filter((job) => job.location === location)
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
        setFilteredPositions(jobPositions)
        break
      case 'workLocations':
        setFilteredPositions(jobPositions)
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
        setFilteredPositions(jobPositions)
    }
  }

  // Toggles sorting order and sorts job positions by posting date
  const handleSortByPostingDate = () => {
    const newSortOrder = !sortAscending
    setSortAscending(newSortOrder)

    const sortedPositions = [...filteredPositions].sort((a, b) => {
      if (newSortOrder) {
        return (
          new Date(a.postingDate).getTime() - new Date(b.postingDate).getTime()
        )
      } else {
        return (
          new Date(b.postingDate).getTime() - new Date(a.postingDate).getTime()
        )
      }
    })

    setFilteredPositions(sortedPositions)
  }

  // Clears all filters and resets to initial job positions
  const clearFilters = () => {
    setSearchText('')
    setSelectedLocation(null)
    setFilteredPositions(jobPositions)
  }

  // Count job positions per location for displaying in the menu
  const locationCounts = jobPositions.reduce(
    (acc, job) => {
      acc[job.location] = (acc[job.location] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Get unique locations from job positions
  const uniqueLocations = Array.from(
    new Set(jobPositions.map((job) => job.location)),
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
    <>
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
                  key={job.id}
                  className={`jobPosition ${
                    index % 2 === 0 ? 'jobPositionLight' : 'jobPositionDark'
                  }`}
                >
                  <div className='titleContainer'>
                    <h1 className='title'>{job.title}</h1>
                    <p className='description'>
                      {job.location} • Posting Date:{' '}
                      {job.postingDate.toLocaleDateString('en-US')}
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
    </>
  )
}
