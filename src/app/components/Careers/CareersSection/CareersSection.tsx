'use client'

import React, { useState } from 'react'
import JobSearchForm from './JobSearchForm/JobSearchForm'
import FilterButtons from './FilterButtons/FilterButtons'
import JobPositionsList from './JobPositionsList/JobPositionsList'
import JobDetailModal from '../../Job/JobDetailModal/JobDetailModal'
import { jobData, JobType } from '../../Job/jobData/jobData'
import styles from './CareersSection.module.scss'

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

  const uniqueLocations = Array.from(
    new Set(jobData.map((job) => job.jobLocation)),
  )

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
        case 'WorkLocation':
          filtered = filtered.filter((job) => job.jobLocation === filterValue)
          break
        case 'PostingDate':
          // Implement appropriate filtering based on PostingDate
          // This example assumes filtering by exact date string
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
      (filter) =>
        !filter.startsWith('Location:') && !filter.startsWith('WorkLocation:'),
    )
    if (selected) {
      updatedFilters.push(`WorkLocation:${selected}`)
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

  // Handle Job Click
  const handleJobClick = (job: JobType) => {
    setSelectedJob(job)
    setIsOpen(true)
  }

  return (
    <div className={styles.careersSection}>
      <JobSearchForm
        searchText={searchText}
        onSearchChange={handleSearch}
        selectedLocation={selectedLocation}
        onLocationChange={handleLocationChange}
        uniqueLocations={uniqueLocations}
      />

      <FilterButtons
        jobCategories={jobCategories}
        jobFunctions={jobFunctions}
        workLocations={workLocations}
        postingDates={postingDates}
        uniqueLocations={uniqueLocations}
        onFilterClick={handleFilterClick}
        onClearFilters={clearFilters}
        filteredPositionsCount={filteredPositions.length}
      />

      <JobPositionsList
        jobs={filteredPositions}
        sortAscending={sortAscending}
        onSortToggle={handleSortByPostingDate}
        onJobClick={handleJobClick}
      />

      {selectedJob && (
        <JobDetailModal
          key={selectedJob.jobId}
          jobData={selectedJob}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
