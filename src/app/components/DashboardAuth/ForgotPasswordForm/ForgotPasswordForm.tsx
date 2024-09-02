import React from 'react'
import { Form, Input, Button } from 'antd'
import './ForgotPasswordForm.scss'
import Link from 'next/link'

type SignUpFormProps = {
  title: string
  note: string
}

const ForgotPasswordForm = ({ title, note }: SignUpFormProps) => {
  return (
    <div className='signup-wrapper'>
      <div className='logo-wrapper'>
        <img
          width={72}
          height={33}
          src='/logo/logo.svg'
          alt='Pro advisor logo'
        />
      </div>
      <h1>{title}</h1>
      <p>{note}</p>
      <Form name='forgot-password' initialValues={{ remember: true }}>
        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder='Your email address' className='custom-style' />
        </Form.Item>

        <Form.Item>
          <div className='button-center'>
            <Button type='primary' htmlType='submit' className='reset-button'>
              Reset Password
            </Button>
          </div>
        </Form.Item>
        <div className='back-to-login-wrapper'>
          <p>
            <Button type='link'>
              <Link href='/dashboard/auth/login'>Back to login</Link>
            </Button>{' '}
          </p>
        </div>
      </Form>
    </div>
  )
}

export default ForgotPasswordForm
