import React from 'react'
import { Form, Input, Button } from 'antd'
import './SingUpForm.scss'
import Link from 'next/link'

type SignUpFormProps = {
  title: string
  note: string
}

const SignUpForm = ({ title, note }: SignUpFormProps) => {
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
      <Form name='signup' initialValues={{ remember: true }}>
        <Form.Item
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder='Choose a username' className='custom-style' />
        </Form.Item>

        <Form.Item
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder='Your email address' className=' custom-style' />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='Password' className='custom-style' />
        </Form.Item>

        <Form.Item
          name='confirm-password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            placeholder='Confirm password'
            className='custom-style'
          />
        </Form.Item>

        <Form.Item>
          <div className='button-center'>
            <Button type='primary' htmlType='submit' className='signup-button'>
              Create Account
            </Button>
          </div>
        </Form.Item>
        <div className='already-have-wrapper'>
          <p>
            Already have an account?{' '}
            <Button type='link'>
              <Link href='/dashboard/auth/login'>Log in</Link>
            </Button>{' '}
          </p>
        </div>
      </Form>
    </div>
  )
}

export default SignUpForm
