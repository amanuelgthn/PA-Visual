'use client'
import { Button, Flex, Form, Input } from 'antd'
import React from 'react'
import './ForgotPass.scss'
import Link from 'next/link'
import { LeftOutlined } from '@ant-design/icons'
const ForgotPass = () => {
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

        <h2>Forgot password?</h2>
        <p>
          Enter your email address below. We&apos;ll send you instructions to
          reset your password.
        </p>
        <Form className='login-form' onFinish={HandleSubmit} form={form}>
          <Form.Item name='email' className='login-form-item'>
            <Input placeholder='Email address' required type='email' />
          </Form.Item>
          <Form.Item className='login-form-item'>
            <Button type='primary' htmlType='submit'>
              Reset
            </Button>
          </Form.Item>
        </Form>
        <Flex style={{ width: '100%' }} justify='space-evenly'>
          <Link href='/Login'>Login</Link>
          <Link href='/Signup'>Create account</Link>
        </Flex>
        <Link href='/'>
          <LeftOutlined /> Go back
        </Link>
      </Flex>
    </Flex>
  )
}

export default ForgotPass
