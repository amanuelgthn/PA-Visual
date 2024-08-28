import React from 'react'
import './JobDescription.scss'
type JobDescriptionProps = {
  jobDescription: string
}

const JobDescription = ({ jobDescription }: JobDescriptionProps) => {
  return (
    <section className='description-section'>
      <h2>Job Description</h2>
      <p>{jobDescription}</p>
    </section>
  )
}

export default JobDescription
