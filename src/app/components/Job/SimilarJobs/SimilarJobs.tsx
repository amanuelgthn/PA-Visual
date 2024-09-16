import { Button } from 'antd'
import './SimilarJobs.scss'

type SimilarJobsProps = {
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
  onJobClick: (job: {
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
  }) => void
}

const SimilarJobs = ({ similarJobs, onJobClick }: SimilarJobsProps) => {
  return (
    <main className='similar-job-section'>
      <h2>Similar Jobs</h2>

      {similarJobs?.map((job) => (
        <div
          key={job.jobId}
          className='similar-jobs-flex'
          onClick={() => onJobClick({ ...job, similarJobs: [] })}
        >
          <div className='simmilarjobs-left'>
            <h3>{job.JobTitle}</h3>
            <span className='simmilarjobs-left-span'>
              <p>{job.jobLocation}</p> .<p>Posted on {job.jobPostDate}</p>
            </span>
          </div>
          <div className='simmilarjobs-right'>
            <img src='../icons/star-icon.png' alt='star-icon' />
            {'>'}
          </div>
        </div>
      ))}
      <span className='see-more-jobs'>
        <Button type='primary'>SEE MORE JOBS</Button>
      </span>
    </main>
  )
}

export default SimilarJobs
