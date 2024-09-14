'use client'
import React, { useEffect, useState } from 'react'
import JobHeader from '../JobHeader/JobHeader'
import JobDescription from '../JobDescription/JobDescription'
import JobResponsibilities from '../JobResponsibilities/JobResponsibilities'
import JobRequirements from '../JobRequirements/JobRequirements'
import JobInfo from '../JobInfo/JobInfo'
import JobModal from '../JobModal/JobModal'
import { Button, Divider } from 'antd'
import SimilarJobs from '../SimilarJobs/SimilarJobs'
import ApplyJob from '../ApplyJob/ApplyJob'

export type JobDetailModalProps = {
  jobData: {
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

    similarJobs: {
      jobId: string
      jobTitle: string
      jobLocation: string
      jobPostDate: string
    }[]
  }
  isOpen: boolean
  onClose: () => void
}

const JobDetailModal = ({ jobData, isOpen, onClose }: JobDetailModalProps) => {
  const [isClient, setIsClient] = useState(false)
  const [applyButtonClicked, setIsApplyButtonClicked] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  const handleApplyClick = () => {
    setIsApplyButtonClicked(true)
    onClose() // Close the JobDetailModal
  }

  return (
    <>
      <JobModal isOpen={isOpen} onClose={onClose} width={800}>
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
        <JobResponsibilities
          jobResponsibilities={jobData.jobResponsibilities}
        />
        <JobRequirements jobRequirements={jobData.jobRequirements} />
        <JobInfo
          onClose={() => {
            setIsApplyButtonClicked(false)
          }}
          jobInfo={{
            jobId: jobData.jobId,
            jobCategory: jobData.jobCategory,
            jobPostDate: jobData.jobPostDate,
            jobSchedule: jobData.jobSchedule,
            joblocation: jobData.jobLocation,
            jobPayRange: jobData.jobPayRange,
            jobTitle: jobData.JobTitle,
            jobOverview: jobData.jobOverview,
          }}
        />
        <span className='button-span'>
          <Button
            onClick={handleApplyClick}
            type='primary'
            className='apply-button'
          >
            Apply Now
          </Button>
        </span>
        <SimilarJobs similarJobs={jobData.similarJobs} />
      </JobModal>
      <ApplyJob
        isOpen={applyButtonClicked}
        onClose={() => {
          setIsApplyButtonClicked(false)
        }}
        jobTitle={jobData.JobTitle}
        jobOverview={jobData.jobOverview}
        jobId={jobData.jobId}
      />
    </>
  )
}

export default JobDetailModal
