export type JobType = {
  JobTitle: string
  jobLocation: string
  jobFunctions: string
  jobDescription: string
  jobResponsibilities: string
  jobRequirements: string
  jobId: string
  jobCategory: string
  jobPostDate: string
  jobSchedule: string
  jobPayRange: string
  jobOverview: string
  similarJobs: SimilarJobType[]
}

export type SimilarJobType = {
  JobTitle: string
  jobLocation: string
  jobDescription: string
  jobResponsibilities: string
  jobRequirements: string
  jobId: string
  jobCategory: string
  jobPostDate: string
  jobSchedule: string
  jobPayRange: string
  jobOverview: string
  similarJobs: SimilarJobType[]
}

export const jobData: JobType[] = [
  {
    JobTitle: 'Software Engineer',
    jobLocation: 'San Francisco, CA',
    jobFunctions: 'Development',
    jobDescription:
      'We are looking for a skilled Software Engineer to join our team. You will be responsible for developing high-quality applications.',
    jobResponsibilities:
      'Design, develop, and maintain software applications. Collaborate with cross-functional teams. Write clean, scalable code.',
    jobRequirements:
      "Bachelor's degree in Computer Science or related field. 3+ years of experience in software development. Proficiency in JavaScript, React, and Node.js.",
    jobId: '12345',
    jobCategory: 'Engineering',
    jobPostDate: '2023-10-01',
    jobSchedule: 'Full-time',
    jobPayRange: '$100,000 - $120,000',
    jobOverview:
      'We are looking for a skilled Software Engineer to join our team. You will be responsible for developing high-quality applications.',
    similarJobs: [
      {
        JobTitle: 'Frontend Developer',
        jobLocation: 'San Francisco, CA',
        jobDescription:
          'We are looking for a skilled Frontend Developer to join our team. You will be responsible for developing high-quality applications.',
        jobResponsibilities:
          'Design, develop, and maintain user interfaces. Collaborate with design and backend teams. Write clean, maintainable code.',
        jobRequirements:
          "Bachelor's degree in Computer Science or related field. 3+ years of experience in frontend development. Proficiency in JavaScript, React, and CSS.",
        jobId: '12346',
        jobCategory: 'Engineering',
        jobPostDate: '2023-09-25',
        jobSchedule: 'Full-time',
        jobPayRange: '$90,000 - $110,000',
        jobOverview:
          'We are looking for a skilled Frontend Developer to join our team. You will be responsible for developing high-quality applications.',
        similarJobs: [],
      },
      {
        JobTitle: 'Backend Developer',
        jobLocation: 'San Francisco, CA',
        jobDescription:
          'We are looking for a skilled Backend Developer to join our team. You will be responsible for server-side logic and database management.',
        jobResponsibilities:
          'Develop and maintain backend services. Collaborate with frontend teams. Ensure high performance and responsiveness.',
        jobRequirements:
          "Bachelor's degree in Computer Science or related field. 3+ years of experience in backend development. Proficiency in Node.js, Express, and databases.",
        jobId: '12347',
        jobCategory: 'Engineering',
        jobPostDate: '2023-09-20',
        jobSchedule: 'Full-time',
        jobPayRange: '$95,000 - $115,000',
        jobOverview:
          'We are looking for a skilled Backend Developer to join our team. You will be responsible for server-side logic and database management.',
        similarJobs: [],
      },
      {
        JobTitle: 'Full Stack Developer',
        jobLocation: 'San Francisco, CA',
        jobDescription:
          'We are looking for a skilled Full Stack Developer to join our team. You will be responsible for both frontend and backend development.',
        jobResponsibilities:
          'Design and develop full-stack applications. Collaborate across teams. Write efficient and scalable code.',
        jobRequirements:
          "Bachelor's degree in Computer Science or related field. 3+ years of experience in full-stack development. Proficiency in JavaScript, React, Node.js, and databases.",
        jobId: '12348',
        jobCategory: 'Engineering',
        jobPostDate: '2023-09-15',
        jobSchedule: 'Full-time',
        jobPayRange: '$100,000 - $120,000',
        jobOverview:
          'We are looking for a skilled Full Stack Developer to join our team. You will be responsible for both frontend and backend development.',
        similarJobs: [],
      },
    ],
  },
  {
    JobTitle: 'Product Manager',
    jobLocation: 'New York, NY',
    jobFunctions: 'Management',
    jobDescription:
      'We are looking for an experienced Product Manager to lead our product development team. You will be responsible for the product roadmap and strategy.',
    jobResponsibilities:
      'Define product vision and strategy. Collaborate with cross-functional teams. Analyze market trends and competition.',
    jobRequirements:
      "Bachelor's degree in Business or related field. 5+ years of experience in product management. Strong analytical and communication skills.",
    jobId: '12349',
    jobCategory: 'Product Management',
    jobPostDate: '2023-09-25',
    jobSchedule: 'Full-time',
    jobPayRange: '$120,000 - $140,000',
    jobOverview:
      'We are looking for an experienced Product Manager to lead our product development team. You will be responsible for the product roadmap and strategy.',
    similarJobs: [
      {
        JobTitle: 'Senior Product Manager',
        jobLocation: 'New York, NY',
        jobDescription:
          'We are seeking a Senior Product Manager to drive product initiatives. You will mentor junior PMs and lead major product areas.',
        jobResponsibilities:
          'Lead product teams. Define product strategies. Engage with stakeholders.',
        jobRequirements:
          "Bachelor's degree in Business or related field. 7+ years of experience in product management. Proven leadership skills.",
        jobId: '12350',
        jobCategory: 'Product Management',
        jobPostDate: '2023-09-20',
        jobSchedule: 'Full-time',
        jobPayRange: '$130,000 - $150,000',
        jobOverview:
          'We are seeking a Senior Product Manager to drive product initiatives. You will mentor junior PMs and lead major product areas.',
        similarJobs: [],
      },
      {
        JobTitle: 'Technical Product Manager',
        jobLocation: 'New York, NY',
        jobDescription:
          'We need a Technical Product Manager to bridge the gap between technical and non-technical teams. You will oversee product development from a technical perspective.',
        jobResponsibilities:
          'Define technical product requirements. Liaise between engineering and business teams. Oversee technical product aspects.',
        jobRequirements:
          "Bachelor's degree in Engineering or related field. 5+ years of experience in product management. Strong technical background required.",
        jobId: '12351',
        jobCategory: 'Product Management',
        jobPostDate: '2023-09-15',
        jobSchedule: 'Full-time',
        jobPayRange: '$125,000 - $145,000',
        jobOverview:
          'We need a Technical Product Manager to bridge the gap between technical and non-technical teams.',
        similarJobs: [],
      },
      {
        JobTitle: 'Product Owner',
        jobLocation: 'New York, NY',
        jobDescription:
          'We are seeking a Product Owner to manage the product backlog and ensure alignment with business objectives.',
        jobResponsibilities:
          'Prioritize backlog. Define user stories. Collaborate with development teams.',
        jobRequirements:
          "Bachelor's degree in Business or related field. 5+ years of experience as a Product Owner. Certified Scrum Product Owner (CSPO) preferred.",
        jobId: '12352',
        jobCategory: 'Product Management',
        jobPostDate: '2023-09-10',
        jobSchedule: 'Full-time',
        jobPayRange: '$120,000 - $140,000',
        jobOverview:
          'We are seeking a Product Owner to manage the product backlog and ensure alignment with business objectives.',
        similarJobs: [],
      },
    ],
  },
]
