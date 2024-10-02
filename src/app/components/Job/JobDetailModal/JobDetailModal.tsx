// JobDetailModal.tsx
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
import { ApplyJobForm } from '../ApplyJobForm/ApplyJobForm'

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
    }[]
  }
  isOpen: boolean
  onClose: () => void
}

const JobDetailModal = ({ jobData, isOpen, onClose }: JobDetailModalProps) => {
  const [isClient, setIsClient] = useState(false)
  const [applyButtonClicked, setIsApplyButtonClicked] = useState(false)
  const [selectedJob, setSelectedJob] = useState(jobData)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Reset internal state when jobData changes
  useEffect(() => {
    if (isOpen) {
      setSelectedJob(jobData)
      setIsApplyButtonClicked(false) // Reset the apply button state
    }
  }, [jobData, isOpen])

  if (!isClient) {
    return null
  }

  const handleApplyClick = () => {
    setIsApplyButtonClicked(true)
  }

  const handleSimilarJobClick = (job: {
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
    }[]
  }) => {
    setSelectedJob(job)
    setIsApplyButtonClicked(false)
  }

  const afterClose = () => {
    setSelectedJob(jobData)
    setIsApplyButtonClicked(false)
  }

  return (
    <>
      <JobModal
        afterClose={afterClose}
        isOpen={isOpen}
        onClose={onClose}
        width={800}
      >
        {applyButtonClicked ? (
          <ApplyJobForm
            jobTitle={selectedJob.JobTitle}
            jobOverview={selectedJob.jobOverview}
            jobId={selectedJob.jobId}
          />
        ) : (
          <>
            <JobHeader
              JobTitle={selectedJob.JobTitle}
              jobLocation={selectedJob?.jobLocation}
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
            <JobDescription jobDescription={selectedJob.jobDescription} />
            <JobResponsibilities
              jobResponsibilities={selectedJob.jobResponsibilities}
            />
            <JobRequirements jobRequirements={selectedJob.jobRequirements} />
            <JobInfo
              onClose={() => {
                setIsApplyButtonClicked(false)
              }}
              jobInfo={{
                jobId: selectedJob.jobId,
                jobCategory: selectedJob.jobCategory,
                jobPostDate: selectedJob.jobPostDate,
                jobSchedule: selectedJob.jobSchedule,
                joblocation: selectedJob.jobLocation,
                jobPayRange: selectedJob.jobPayRange,
                jobTitle: selectedJob.JobTitle,
                jobOverview: selectedJob.jobOverview,
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
            <SimilarJobs
              similarJobs={selectedJob.similarJobs}
              onJobClick={handleSimilarJobClick}
            />
          </>
        )}
      </JobModal>
    </>
  )
}

export default JobDetailModal
