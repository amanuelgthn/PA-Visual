import React from 'react'
import { Form, Input, Button } from 'antd'
import './LoginForm.scss'
import Link from 'next/link'
type LoginFormProps = {
  title: string
}

const LoginForm = ({ title }: LoginFormProps) => {
  return (
    <div className='login-wrapper'>
      <h1>{title}</h1>
      <Form name='login' initialValues={{ remember: true }}>
        <Form.Item
          name='email'
          rules={[{ required: true, message: ' This field is required!' }]}
        >
          <Input placeholder='Username or Email' className='custom-style' />
        </Form.Item>

        <Form.Item
          status='error'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='Password' className='custom-style' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-button'>
            Login
          </Button>
        </Form.Item>
      </Form>
      <div className='link-buttons-wrapper'>
        <Button className='link-button ' type='link'>
          <Link href='/dashboard/auth/password-reset'>Forgot Password?</Link>
        </Button>
        <Button className='link-button ' type='link'>
          <Link href='/dashboard/auth/signup'>Create Account</Link>
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
