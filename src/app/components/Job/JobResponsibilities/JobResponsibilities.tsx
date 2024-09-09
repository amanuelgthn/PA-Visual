import React from 'react'
import './JobResponsibilities.scss'

type JobResponsibilitiesProps = {
  jobResponsibilities: string
}

const JobResponsibilities = ({
  jobResponsibilities,
}: JobResponsibilitiesProps) => {
  return (
    <section className='responsibilities-section'>
      <h2>YOUR RESPONSIBILITIES</h2>
      <p>{jobResponsibilities}</p>
    </section>
  )
}

export default JobResponsibilities
