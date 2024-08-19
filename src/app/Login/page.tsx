'use client'
import { Button, Flex, Form, Input } from 'antd'
import './login.scss'
import Link from 'next/link'
import { LeftOutlined } from '@ant-design/icons'

const Login = () => {
  const [form] = Form.useForm()
  const HandleSubmit = () => {
    console.log(form.getFieldsValue())
    form.resetFields()
  }
  return (
    <Flex className='Login-Overlay' justify='center' align='center'>
      <Flex
        vertical
        className='Login-Inner'
        justify='center'
        align='center'
        gap={20}
      >
        <Link href='/'>
          <img src='logo/logoLogin.svg' alt='Global property Logo' />
        </Link>
        <h2>Welcome to Global Property</h2>
        <Form className='login-form' onFinish={HandleSubmit} form={form}>
          <Form.Item name='email' className='login-form-item'>
            <Input placeholder='Email address' required type='email' />
          </Form.Item>
          <Form.Item name='password' className='login-form-item'>
            <Input placeholder='Password' required type='password' />
          </Form.Item>
          <Form.Item className='login-form-item'>
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </Form.Item>
          <Flex style={{ width: '100%' }} justify='space-evenly'>
            <Link href='/ForgotPass'>Forgot password?</Link>
            <Link href='/Signup'>Create account</Link>
          </Flex>
        </Form>
        <Link href='/'>
          <LeftOutlined /> Go back
        </Link>
      </Flex>
    </Flex>
  )
}

export default Login
