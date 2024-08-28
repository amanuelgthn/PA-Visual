import PopUpWindow from './components/Home/PopUpWindow/PopUpWindow'
import { ContactHeader } from './components/Home/ContactHeader/ContactHeader'
import { ExploreHeader } from './components/Home/ExploreHeader/ExploreHeader'
import { ImageHeader } from './components/Home/ImageHeader/ImageHeader'
import { WelcomeHeader } from './components/Home/WelcomeHeader/WelcomeHeader'
import './page.css'
import { Flex } from 'antd'
import JobDetailModal from './components/Job/JobDetailModal/JobDetailModal'

export default function Home() {
  const testJobData = {
    JobTitle: 'Backend Developer',
    jobLocation: 'San Francisco, CA',
    jobDescription:
      'We are looking for a Backend Developer to join our team. You will be responsible for writing clean, maintainable code and developing scalable applications. You should have experience with Node.js and databases.',

    jobResponsibilities:
      'Write clean, maintainable code and develop scalable applications.Write clean, maintainable code and develop scalable applications.Write clean, maintainable code and develop scalable applications.Write clean, maintainable code and develop scalable applications.Write clean, maintainable code and develop scalable applications.',

    jobRequirements:
      'Experience with Node.js and databases. Experience with Node.js and databases. Experience with Node.js and databases. Experience with Node.js and databases. Experience with Node.js and databases.',
    jobInfo: {
      jobId: '54322',
      jobCategory: 'Software Development',
      jobPostDate: '10/10/2021',
      jobSchedule: 'Full-time',
      joblocation: 'San Francisco, CA',
      jobPayRange: '$100,000 - $120,000',
      similarJobs: [
        {
          jobId: '54322',
          jobTitle: 'Backend Developer',
          jobLocation: 'San Francisco, CA',
          jobPostDate: '10/10/2021',
        },
        {
          jobId: '54323',
          jobTitle: 'Full Stack Developer',
          jobLocation: 'San Francisco, CA',
          jobPostDate: '10/10/2021',
        },
      ],
    },
    similarJobs: [
      {
        jobId: '54324',
        jobTitle: 'Frontend Developer',
        jobLocation: 'San Francisco, CA',
        jobPostDate: '10/11/2021',
      },
      {
        jobId: '54325',
        jobTitle: 'DevOps Engineer',
        jobLocation: 'San Francisco, CA',
        jobPostDate: '10/12/2021',
      },
    ],
  }

  return (
    <>
      <Flex className='wrapper-body'>
        <JobDetailModal isOpen={true} jobData={testJobData} />
        <div className='wrapper'>
          <div className='wrapper-assist'>
            <PopUpWindow />
            <ImageHeader />
            <WelcomeHeader />
          </div>
          <ExploreHeader />
          <ContactHeader />
        </div>
      </Flex>
    </>
  )

  return (
    <>
      <Flex className='wrapper-body'>
        <JobDetailModal isOpen={true} jobData={testJobData} />
        <div className='wrapper'>
          <div className='wrapper-assist'>
            <PopUpWindow />
            <ImageHeader />
            <WelcomeHeader />
          </div>
          <ExploreHeader />
          <ContactHeader />
        </div>
      </Flex>
    </>
  )
}
