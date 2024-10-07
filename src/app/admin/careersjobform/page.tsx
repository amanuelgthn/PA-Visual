'use client'
import React, { useState } from 'react'
import { Switch, Form, Input, Select, Row, Col } from 'antd'
import styles from '../components/careers/dashboard.module.css'
import PerformanceOverView from '../components/careers/PerformanceOverview/PerformanceOverView'

const { Option } = Select

const CareersJobForm: React.FC = () => {
  const [isActive, setIsActive] = useState(true)
  const [form] = Form.useForm()

  const inputStyle = {
    backgroundColor: '#3F4548',
    color: '#FFFFFF',
    border: '0.05px solid #757575',
  }

  const onChange = (checked: boolean) => setIsActive(checked)

  const onFinish = (values: any) => {
    console.log('Form values:', values)
  }

  const handleCancel = () => form.resetFields()

  return (
    <main className={styles.adminwrapper}>
      <div className={styles.bigContainer}>
        <div className={styles.switchContainer}>
          {isActive && <span className={styles.switchText}>Active</span>}
          <Switch
            checked={isActive}
            onChange={onChange}
            style={{
              backgroundColor: isActive ? 'green' : '#d9d9d9',
              borderColor: isActive ? 'green' : '#d9d9d9',
            }}
          />
        </div>

        <PerformanceOverView pageType='dashboard' />

        <div className={styles.formContainer}>
          <Form
            form={form}
            layout='vertical'
            onFinish={onFinish}
            requiredMark={false}
            initialValues={{
              jobTitle: '',
              location: '',
              jobId: '',
              payRange: '',
              employmentType: '',
              workLocation: '',
              category: '',
              jobDescription: '',
              yourResponsibilities: '',
              ourRequirements: '',
              linkedinURL: '',
            }}
          >
            <Form.Item
              label='Job Title'
              name='jobTitle'
              rules={[
                { required: true, message: 'Please enter the job title' },
              ]}
            >
              <Input placeholder='Enter job title' style={inputStyle} />
            </Form.Item>

            <Row gutter={16}>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label='Location'
                  name='location'
                  rules={[
                    { required: true, message: 'Please enter the location' },
                  ]}
                >
                  <Input placeholder='Enter location' style={inputStyle} />
                </Form.Item>

                <Form.Item
                  label='Job ID'
                  name='jobId'
                  rules={[
                    { required: true, message: 'Please enter the Job ID' },
                  ]}
                >
                  <Input placeholder='Enter Job ID' style={inputStyle} />
                </Form.Item>

                <Form.Item
                  label='Pay Range'
                  name='payRange'
                  rules={[
                    { required: true, message: 'Please enter the pay range' },
                  ]}
                >
                  <Input placeholder='Enter pay range' style={inputStyle} />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label='Employment Type'
                  name='employmentType'
                  rules={[
                    {
                      required: true,
                      message: 'Please select employment type',
                    },
                  ]}
                >
                  <Select
                    placeholder='Select employment type'
                    style={inputStyle}
                    dropdownClassName={styles.customDropdown}
                  >
                    <Option value='full-time'>Full-Time</Option>
                    <Option value='part-time'>Part-Time</Option>
                    <Option value='contract'>Contract</Option>
                    <Option value='internship'>Internship</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label='Work Location'
                  name='workLocation'
                  rules={[
                    {
                      required: true,
                      message: 'Please enter the work location',
                    },
                  ]}
                >
                  <Input placeholder='Enter work location' style={inputStyle} />
                </Form.Item>

                <Form.Item
                  label='Category'
                  name='category'
                  rules={[
                    { required: true, message: 'Please select a category' },
                  ]}
                >
                  <Select
                    placeholder='Select category'
                    style={inputStyle}
                    dropdownClassName={styles.customDropdown}
                  >
                    <Option value='engineering'>Engineering</Option>
                    <Option value='marketing'>Marketing</Option>
                    <Option value='sales'>Sales</Option>
                    <Option value='hr'>Human Resources</Option>
                    <Option value='design'>Design</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label='Job Description'
              name='jobDescription'
              rules={[
                { required: true, message: 'Please enter the job description' },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder='Enter job description'
                style={inputStyle}
              />
            </Form.Item>

            <Form.Item
              label='Your Responsibilities'
              name='yourResponsibilities'
              rules={[
                {
                  required: true,
                  message: 'Please enter your responsibilities',
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder='Enter your responsibilities'
                style={inputStyle}
              />
            </Form.Item>

            <Form.Item
              label='Our Requirements'
              name='ourRequirements'
              rules={[
                { required: true, message: 'Please enter our requirements' },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder='Enter our requirements'
                style={inputStyle}
              />
            </Form.Item>

            <Form.Item
              label='LinkedIn URL'
              name='linkedinURL'
              rules={[
                { required: true, message: 'Please enter the LinkedIn URL' },
                { type: 'url', message: 'Please enter a valid URL' },
              ]}
            >
              <Input placeholder='Enter LinkedIn URL' style={inputStyle} />
            </Form.Item>

            <Form.Item>
              <div className={styles.buttonGroup}>
                <button type='submit' className={styles.updateUserButton}>
                  Update User
                </button>
                <button
                  type='button'
                  className={styles.cancelButton}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </main>
  )
}

export default CareersJobForm
