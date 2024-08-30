'use client'
import React, { useEffect, useState } from 'react'
import JobHeader from '../JobHeader/JobHeader'
import JobDescription from '../JobDescription/JobDescription'
import JobResponsibilities from '../JobResponsibilities/JobResponsibilities'
import JobRequirements from '../JobRequirements/JobRequirements'
import JobInfo from '../JobInfo/JobInfo'
import JobModal from '../JobModal/JobModal'
import { Divider } from 'antd'
import SimilarJobs from '../SimilarJobs/SimilarJobs'

export type JobDetailModalProps = {
  jobData: {
    JobTitle: string
    jobLocation: string
    jobDescription: string
    jobResponsibilities: string
    jobRequirements: string
    jobInfo: {
      jobId: string
      jobCategory: string
      jobPostDate: string
      jobSchedule: string
      joblocation: string
      jobPayRange: string
    }
    similarJobs: {
      jobId: string
      jobTitle: string
      jobLocation: string
      jobPostDate: string
    }[]
  }
  isOpen: boolean
  isClose: () => void
}

const JobDetailModal = ({ jobData, isOpen, isClose }: JobDetailModalProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <JobModal isOpen={isOpen} onClose={isClose} width={800}>
      <JobHeader
        JobTitle={jobData.JobTitle}
        jobLocation={jobData?.jobLocation}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Divider
          type='horizontal'
          variant='solid'
          style={{
            background: '#F2F2F2',
            height: '2px',
            width: '50px',
            minWidth: '0px',
            opacity: '40%',
          }}
        />
      </div>
      <JobDescription jobDescription={jobData.jobDescription} />
      <JobResponsibilities jobResponsibilities={jobData.jobResponsibilities} />
      <JobRequirements jobRequirements={jobData.jobRequirements} />
      <JobInfo jobInfo={jobData.jobInfo} />
      <SimilarJobs similarJobs={jobData.similarJobs} />
    </JobModal>
  )
}

export default JobDetailModal
