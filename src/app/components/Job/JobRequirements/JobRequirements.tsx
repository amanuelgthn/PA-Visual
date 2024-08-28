import React from 'react'
import './JobRequirements.scss'
type JobRequirementsProps = {
  jobRequirements: string
}

const JobRequirements = ({ jobRequirements }: JobRequirementsProps) => {
  return (
    <section className='requirements-section'>
      <h2>OUR REQUIREMENTS</h2>
      <p>{jobRequirements}</p>
    </section>
  )
}

export default JobRequirements
