'use client'

import { Button, Checkbox, Form, Input } from 'antd'
import './ApplyJobForm.scss'
import { EmailValidation, RequiredField } from '@/app/Utils/AntdFormValidators'
import TextArea from 'antd/es/input/TextArea'

type ApplyJobFormProps = {
  jobTitle: string
  jobOverview: string
}

export const ApplyJobForm = ({ jobOverview, jobTitle }: ApplyJobFormProps) => {
  return (
    <div className='apply-job-form'>
      <h2>Apply for {jobTitle}</h2>
      <span className='join-span'>
        <p>Join our team and shape the future of real estate</p>
      </span>
      <div className='job-overview'>
        <h3>Job Overview</h3>
        <p>{jobOverview}</p>
        <Button>View Full Job Description</Button>
      </div>

      <Form name='applyForm' layout='vertical' className='form-wrapper'>
        <span className='personal-information'>
          <h1>Personal Information</h1>
        </span>
        <Form.Item name='fullName' label='Full Name' rules={[RequiredField]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='email'
          label='Email Address'
          rules={[RequiredField, EmailValidation]}
        >
          <Input type='email' />
        </Form.Item>
        <Form.Item
          name='phoneNumber'
          label='Phone Number'
          rules={[RequiredField]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='linkedInProfile' label='LinkedIn Profile (Optional)'>
          <Input />
        </Form.Item>
        <Form.Item
          name='resume'
          label='Upload Resume (PDF, DOCX)'
          rules={[RequiredField]}
          className='upload-resume'
        >
          <Input type='file' />
        </Form.Item>
        <Form.Item
          name='coverLetter'
          label='Cover Letter'
          rules={[RequiredField]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name='additionalInfo'
          label='Additional Comments or Information'
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name='terms'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject('You must agree to the terms & policy'),
            },
          ]}
        >
          <div className='checkbox-container'>
            <Checkbox />
            <span>
              I agree to the <p>terms & policy</p>
            </span>
          </div>
        </Form.Item>
        <div className='buttons-container'>
          <Form.Item>
            <Button className='apply-button' type='primary' htmlType='submit'>
              Submit Application
            </Button>
          </Form.Item>
          <h1>OR</h1>
          <Form.Item>
            <Button className='apply-linkeden' type='primary' htmlType='submit'>
              <img
                src='./social/linkedin-job-apply.png'
                alt='linkedin-cion'
                width={20}
                height={20}
              />
              Apply on Linkedin
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}
