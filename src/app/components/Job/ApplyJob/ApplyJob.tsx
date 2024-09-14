'use client'
import React, { useEffect, useState } from 'react'
import JobModal from '../JobModal/JobModal'
import { ApplyJobForm } from './ApplyJobForm/ApplyJobForm'

type ApplyJobProps = {
  isOpen: boolean
  jobTitle: string
  jobOverview: string
  jobId: string
  onClose: () => void
}

const ApplyJob = ({
  isOpen,
  onClose,
  jobId,
  jobOverview,
  jobTitle,
}: ApplyJobProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }
  return (
    <JobModal onClose={onClose} isOpen={isOpen} width={800}>
      <ApplyJobForm
        jobTitle={jobTitle}
        jobOverview={jobOverview}
        jobId={jobId}
      />
    </JobModal>
  )
}

export default ApplyJob
