'use client'
import React, { useState } from 'react'
import { Switch, Form, Input, Select, Row, Col, Modal, Button } from 'antd'
import styles from '../components/careers/dashboard.module.css'
import PerformanceOverView from '../components/careers/PerformanceOverview/PerformanceOverView'

const { Option } = Select

interface FormValues {
  jobTitle: string
  location: string
  jobId: string
  payRange: string
  employmentType: string
  workLocation: string
  category: string
  jobDescription: string
  yourResponsibilities: string
  ourRequirements: string
  linkedinURL: string
}

const CareersJobForm: React.FC = () => {
  const [isActive, setIsActive] = useState(true)
  const [form] = Form.useForm()

  const onChange = (checked: boolean) => setIsActive(checked)

  const onFinish = (values: FormValues) => {
    console.log('Form values:', values)
  }

  const handleCancel = () => {
    Modal.confirm({
      title: 'Are you sure you want to reset the form?',
      content: 'All entered data will be lost.',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => {
        form.resetFields()
      },
    })
  }

  return (
    <main className={styles.adminwrapper}>
      <div className={styles.bigContainer}>
        <div className={styles.switchContainer}>
          {isActive && <span className={styles.switchText}>Active</span>}
          <Switch
            checked={isActive}
            onChange={onChange}
            className={isActive ? styles.switchActive : styles.switchInactive}
            aria-label='Toggle Active Status'
            role='switch'
            aria-checked={isActive}
          />
        </div>

        <PerformanceOverView pageType='dashboard' />

        <div className={styles.formContainer}>
          <Form
            form={form}
            layout='vertical'
            onFinish={onFinish}
            requiredMark={false}
            validateTrigger={['onBlur', 'onSubmit']}
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
              <Input
                placeholder='Enter job title'
                className={styles.inputField}
                aria-required='true'
              />
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
                  <Input
                    placeholder='Enter location'
                    className={styles.inputField}
                    aria-required='true'
                  />
                </Form.Item>

                <Form.Item
                  label='Job ID'
                  name='jobId'
                  rules={[
                    { required: true, message: 'Please enter the Job ID' },
                  ]}
                >
                  <Input
                    placeholder='Enter Job ID'
                    className={styles.inputField}
                    aria-required='true'
                  />
                </Form.Item>

                <Form.Item
                  label='Pay Range'
                  name='payRange'
                  rules={[
                    { required: true, message: 'Please enter the pay range' },
                  ]}
                >
                  <Input
                    placeholder='Enter pay range'
                    className={styles.inputField}
                    aria-required='true'
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label='Employment Type'
                  name='employmentType'
                  className={styles.specialFormItem}
                  rules={[
                    {
                      required: true,
                      message: 'Please select employment type',
                    },
                  ]}
                >
                  <Select
                    placeholder='Select employment type'
                    aria-required='true'
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
                  <Input
                    placeholder='Enter work location'
                    className={styles.inputField}
                    aria-required='true'
                  />
                </Form.Item>

                <Form.Item
                  label='Category'
                  name='category'
                  className={styles.specialFormItem}
                  rules={[
                    { required: true, message: 'Please select a category' },
                  ]}
                >
                  <Select
                    placeholder='Select category'
                    aria-required='true'
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
                className={styles.inputField}
                aria-required='true'
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
                className={styles.inputField}
                aria-required='true'
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
                className={styles.inputField}
                aria-required='true'
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
              <Input
                placeholder='Enter LinkedIn URL'
                className={styles.inputField}
                aria-required='true'
              />
            </Form.Item>

            <Form.Item>
              <div className={styles.buttonGroup}>
                <Button
                  type='primary'
                  htmlType='submit'
                  className={styles.updateUserButton}
                  aria-label='Update User'
                >
                  Update User
                </Button>
                <Button
                  type='default'
                  onClick={handleCancel}
                  className={styles.cancelButton}
                  aria-label='Cancel'
                >
                  Cancel
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </main>
  )
}

export default CareersJobForm
