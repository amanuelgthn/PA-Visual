import React from 'react'
import { Button } from 'antd'
import JobPositionItem from './JobPositionItem/JobPositionItem'
import styles from './JobPositionsList.module.scss'
import { JobType } from '../../../Job/jobData/jobData'

type JobPositionsListProps = {
  jobs: JobType[]
  sortAscending: boolean
  onSortToggle: () => void
  onJobClick: (job: JobType) => void
}

const JobPositionsList: React.FC<JobPositionsListProps> = ({
  jobs,
  sortAscending,
  onSortToggle,
  onJobClick,
}) => {
  return (
    <section className={styles.jobPositionsSection}>
      <div className={styles.dateFilter}>
        <Button className={styles.PostingDateFilter} onClick={onSortToggle}>
          Posting Date {sortAscending ? '⮃' : '⮁'}
        </Button>
      </div>
      <div className={styles.jobPositionsContainer}>
        <div className={styles.jobPositions}>
          {jobs.map((job, index) => (
            <JobPositionItem
              key={job.jobId}
              job={job}
              index={index}
              onClick={() => onJobClick(job)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobPositionsList
