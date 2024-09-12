'use client'

import React from 'react'
import { Button, Form, Input } from 'antd'
import './ForgotPasswordForm.scss'

interface ForgotPasswordFormProps {
  handleResetPassword: () => void
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  handleResetPassword,
}) => {
  const [form] = Form.useForm()

  return (
    <Form form={form} layout='vertical'>
      <Form.Item
        name='email'
        label='Email address'
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {
            type: 'email',
            message: 'Please enter a valid email address!',
          },
        ]}
        className='emailAdress'
      >
        <Input placeholder='Enter your email' style={{ height: '3.75rem' }} />
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          className='primaryButton'
          onClick={() => {
            form
              .validateFields()
              .then(() => {
                handleResetPassword()
              })
              .catch((errorInfo) => {
                console.log('Validation Failed:', errorInfo)
              })
          }}
        >
          Send link to email
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type='default' className='secondaryButton'>
          Back to login
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ForgotPasswordForm
