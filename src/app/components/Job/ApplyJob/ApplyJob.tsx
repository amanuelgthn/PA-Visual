'use client'
import React, { useEffect, useState } from 'react'
import JobModal from '../JobModal/JobModal'
import { ApplyJobForm } from './ApplyJobForm/ApplyJobForm'

type ApplyJobProps = {
  isOpen: boolean
}

const ApplyJob = ({ isOpen }: ApplyJobProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }
  return (
    <div>
      <JobModal isOpen={isOpen} width={800}>
        <ApplyJobForm
          jobTitle='Property Manager'
          jobOverview='Manage high-end properties in the heart of Manhattan as part of our dynamic Residential Properties team in New York.'
        />
      </JobModal>
    </div>
  )
}

export default ApplyJob
