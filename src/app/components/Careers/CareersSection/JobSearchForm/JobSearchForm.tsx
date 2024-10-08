'use client'

import React from 'react'
import { Input, Cascader } from 'antd'
import styles from './JobSearchForm.module.scss'

type JobSearchFormProps = {
  searchText: string
  onSearchChange: (value: string) => void
  selectedLocation: string | null
  onLocationChange: (value: string | null) => void
  uniqueLocations: string[]
  isActive: boolean
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const JobSearchForm: React.FC<JobSearchFormProps> = ({
  searchText,
  onSearchChange,
  selectedLocation,
  onLocationChange,
  uniqueLocations,
  isActive,
  onSubmit,
}) => {
  const cascaderOptions = uniqueLocations.map((location) => ({
    value: location,
    label: location,
  }))

  const handleCascaderChange = (value: string[]) => {
    const selected = value[0] || null
    onLocationChange(selected)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (onSubmit) {
      onSubmit(event)
    }
  }

  const content = (
    <>
      <Input
        placeholder='FIND JOBS'
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.customJobsInput}
      />
      <div className={styles.separator} />
      <Cascader
        options={cascaderOptions}
        onChange={handleCascaderChange}
        placeholder='NEAR LOCATION'
        className={styles.customLocationCascader}
        value={selectedLocation ? [selectedLocation] : []}
      />
    </>
  )

  return (
    <section className={styles.jobSearchEngineSection}>
      {isActive ? (
        <form className={styles.jobSearchForm} onSubmit={handleSubmit}>
          {content}
        </form>
      ) : (
        <div className={styles.jobSearchForm}>{content}</div>
      )}
    </section>
  )
}

export default JobSearchForm
