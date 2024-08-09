'use client'
import { Button, Flex, Form, Input } from 'antd'
import React from 'react'
import './Signup.scss'
import Link from 'next/link'
import { LeftOutlined } from '@ant-design/icons'
import {
  ConfirmPassword,
  EmailValidation,
  RequiredField,
} from '../Utils/AntdFormValidators'

const Signup = () => {
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

        <h2>Create an account</h2>
        <p>Create, explore, and experience websites beyond</p>
        <Form className='login-form' onFinish={HandleSubmit} form={form}>
          <Form.Item
            name='username'
            className='login-form-item'
            rules={[RequiredField]}
          >
            <Input placeholder='Choose a username' required type='text' />
          </Form.Item>
          <Form.Item
            name='email'
            className='login-form-item'
            rules={[RequiredField, EmailValidation]}
          >
            <Input placeholder='Email address' required type='email' />
          </Form.Item>
          <Form.Item
            name='password'
            className='login-form-item'
            rules={[RequiredField]}
          >
            <Input placeholder='Password' required type='password' />
          </Form.Item>
          <Form.Item
            name='confirm_password'
            dependencies={['password']}
            hasFeedback
            rules={[RequiredField, ConfirmPassword]}
          >
            <Input placeholder='Confirm password' required type='password' />
          </Form.Item>
          <Form.Item className='login-form-item'>
            <Button type='primary' htmlType='submit'>
              Sign up
            </Button>
          </Form.Item>
          <Flex style={{ width: '100%' }} justify='space-evenly'>
            <Link href='/Login'>Already have an account?</Link>
          </Flex>
        </Form>
        <Link href='/'>
          <LeftOutlined /> Go back
        </Link>
      </Flex>
    </Flex>
  )
}

export default Signup
