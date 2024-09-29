'use client'

import React from 'react'
import { Input, Cascader } from 'antd'
import styles from './JobSearchForm.module.scss'

type JobSearchFormProps = {
  searchText: string
  onSearchChange: (value: string) => void
  selectedLocation: string | null
  onLocationChange: (value: string[]) => void
  uniqueLocations: string[]
}

const JobSearchForm: React.FC<JobSearchFormProps> = ({
  searchText,
  onSearchChange,
  selectedLocation,
  onLocationChange,
  uniqueLocations,
}) => {
  return (
    <section className={styles.jobSearchEngineSection}>
      <form className={styles.jobSearchForm}>
        <Input
          placeholder='FIND JOBS'
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.customJobsInput}
        />
        <div className={styles.separator} />
        <Cascader
          options={uniqueLocations.map((location) => ({
            value: location,
            label: location,
          }))}
          onChange={onLocationChange}
          placeholder='NEAR LOCATION'
          className={styles.customLocationCascader}
        />
      </form>
    </section>
  )
}

export default JobSearchForm
