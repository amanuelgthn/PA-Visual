import { Button } from 'antd'
import './SimilarJobs.scss'
type SimilarJob = {
  jobId: string
  jobTitle: string
  jobLocation: string
  jobPostDate: string
}

type SimilarJobsProps = {
  similarJobs: SimilarJob[]
}

const SimilarJobs = ({ similarJobs }: SimilarJobsProps) => {
  return (
    <main className='similar-job-section'>
      <h2>Similar Jobs</h2>

      {similarJobs?.map((job) => (
        <div key={job.jobId} className='similar-jobs-flex'>
          <div className='simmilarjobs-left'>
            <h3>{job.jobTitle}</h3>
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
