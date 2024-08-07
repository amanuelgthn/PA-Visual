'use client';
import { Button, Flex, Form, Input } from 'antd';
import React from 'react';
import './Signup.scss';
import Link from 'next/link';
import { CONSTANTS } from '../Utils/config/Constants';
import { Rule } from 'antd/es/form';
import { LeftOutlined } from '@ant-design/icons';

const Signup = () => {
  const [form] = Form.useForm();
  const HandleSubmit = () => {
    console.log(form.getFieldsValue());
    form.resetFields();
  };

  const RequiredField: Rule = {
    required: true,
    message: CONSTANTS.STRINGS.EN.FIELD_REQUIRED,
  };
  const EmailValidation: Rule = {
    type: 'email',
    message: CONSTANTS.STRINGS.EN.NOT_AN_EMAIL,
  };
  const ConfirmPassword: Rule = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error(CONSTANTS.STRINGS.EN.PASSWORD_DONT_MATCH)
      );
    },
  });

  return (
    <Flex className="Login-Overlay" justify="center" align="center">
      <Flex
        vertical
        className="Login-Inner"
        justify="center"
        align="center"
        gap={20}
      >
        <Link href="/">
          <img src="logo/logoLogin.svg" alt="Global property Logo" />
        </Link>

        <h2>Create an account</h2>
        <p>Create, explore, and experience websites beyond</p>
        <Form className="login-form" onFinish={HandleSubmit} form={form}>
          <Form.Item
            name="username"
            className="login-form-item"
            rules={[RequiredField]}
          >
            <Input placeholder="Choose a username" required type="text" />
          </Form.Item>
          <Form.Item
            name="email"
            className="login-form-item"
            rules={[RequiredField, EmailValidation]}
          >
            <Input placeholder="Email address" required type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            className="login-form-item"
            rules={[RequiredField]}
          >
            <Input placeholder="Password" required type="password" />
          </Form.Item>
          <Form.Item
            name="confirm_password"
            dependencies={['password']}
            hasFeedback
            rules={[RequiredField, ConfirmPassword]}
          >
            <Input placeholder="Confirm password" required type="password" />
          </Form.Item>
          <Form.Item className="login-form-item">
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </Form.Item>
          <Flex style={{ width: '100%' }} justify="space-evenly">
            <Link href="/Login">Already have an account?</Link>
          </Flex>
        </Form>
        <Link href="/">
          <LeftOutlined /> Go back
        </Link>
      </Flex>
    </Flex>
  );
};

export default Signup;
