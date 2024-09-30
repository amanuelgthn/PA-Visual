'use client'

import React, { useState, useEffect } from 'react'
import JobSearchForm from './JobSearchForm/JobSearchForm'
import FilterButtons from './FilterButtons/FilterButtons'
import JobPositionsList from './JobPositionsList/JobPositionsList'
import JobDetailModal from '../../Job/JobDetailModal/JobDetailModal'
import { jobData, JobType } from '../../Job/jobData/jobData'
import styles from './CareersSection.module.scss'

type FilterType =
  | 'Category'
  | 'JobFunction'
  | 'WorkLocation'
  | 'Location'
  | 'PostingDate'

const filterFunctionsMap: Record<
  FilterType,
  (filterValue: string) => (job: JobType) => boolean
> = {
  Category: (filterValue) => (job) => job.jobCategory === filterValue,
  JobFunction: (filterValue) => (job) => job.jobFunctions === filterValue,
  WorkLocation: (filterValue) => (job) => job.jobLocation === filterValue,
  Location: (filterValue) => (job) => job.jobLocation === filterValue,
  PostingDate: (filterValue) => (job) => {
    const jobDate = new Date(job.jobPostDate)
    const today = new Date()
    let thresholdDate: Date

    switch (filterValue) {
      case 'Last 24 hours':
        thresholdDate = new Date(today.getTime() - 24 * 60 * 60 * 1000)
        break
      case 'Last 7 days':
        thresholdDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
        break
      case 'Last 14 days':
        thresholdDate = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000)
        break
      case 'Last 30 days':
        thresholdDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)
        break
      default:
        return false
    }

    return jobDate >= thresholdDate
  },
  // Add more filter types as needed
}

function isFilterType(type: string): type is FilterType {
  return [
    'Category',
    'JobFunction',
    'WorkLocation',
    'Location',
    'PostingDate',
  ].includes(type)
}

export default function CareersSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<null | JobType>(null)
  const [filteredPositions, setFilteredPositions] = useState<JobType[]>(jobData)
  const [searchText, setSearchText] = useState('')
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [sortAscending, setSortAscending] = useState(true)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [isFormActive, setIsFormActive] = useState(true) // New state to control form activity

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

    // Apply all other filters using the mapping
    filters.forEach((filter) => {
      const [filterType, filterValue] = filter.split(':')

      if (isFilterType(filterType)) {
        const filterFn = filterFunctionsMap[filterType](filterValue)
        filtered = filtered.filter(filterFn)
      } else {
        console.warn(`Unknown filter type: ${filterType}`)
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
  const handleLocationChange = (value: string | null) => {
    setSelectedLocation(value)

    // Update filters to reflect location
    const updatedFilters = activeFilters.filter(
      (filter) =>
        !filter.startsWith('Location:') && !filter.startsWith('WorkLocation:'),
    )
    if (value) {
      updatedFilters.push(`WorkLocation:${value}`)
    }

    setActiveFilters(updatedFilters)
    applyFilters(searchText, value, updatedFilters)
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

  // Handle Form Submit
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted with:', { searchText, selectedLocation })
  }

  // Optional: Apply filters whenever activeFilters, searchText, or selectedLocation changes
  // This ensures consistency if filters are updated elsewhere
  useEffect(() => {
    applyFilters(searchText, selectedLocation, activeFilters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters, searchText, selectedLocation])

  return (
    <div className={styles.careersSection}>
      <JobSearchForm
        searchText={searchText}
        onSearchChange={handleSearch}
        selectedLocation={selectedLocation}
        onLocationChange={handleLocationChange}
        uniqueLocations={uniqueLocations}
        isActive={isFormActive}
        onSubmit={handleFormSubmit}
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
          jobData={selectedJob} // Passed the selectedJob object directly to the JobDetailModal through the jobData prop
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
