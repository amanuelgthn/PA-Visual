import React from 'react'
import Image from 'next/image'
import styles from './JobPositionItem.module.scss'
import { JobType } from '../../../../Job/jobData/jobData'

type JobPositionItemProps = {
  job: JobType
  index: number
  onClick: () => void
}

const JobPositionItem: React.FC<JobPositionItemProps> = ({
  job,
  index,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.jobPosition} ${
        index % 2 === 0 ? styles.jobPositionLight : styles.jobPositionDark
      }`}
    >
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{job.JobTitle}</h1>
        <p className={styles.description}>
          {job.jobLocation} • Posting Date:{' '}
          {new Date(job.jobPostDate).toLocaleDateString('en-US')}
        </p>
      </div>
      <div className={styles.iconsContainer}>
        <div className={styles.starIcon}>
          <Image
            src='/careers/careersicon1.png'
            width={18}
            height={17}
            alt='starIcon'
          />
        </div>
        <div className={styles.arrowIcon}>
          <Image
            src='/careers/careersicon2.png'
            width={10}
            height={21}
            alt='arrowIcon'
          />
        </div>
      </div>
    </div>
  )
}

export default JobPositionItem
