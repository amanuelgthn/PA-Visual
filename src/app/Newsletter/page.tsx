'use client';
import React from 'react';
import { Button, Flex, Form, Input } from 'antd';
import './Newsletter.scss';

const Newsletter = () => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        style={{ minHeight: '50vh' }}
        vertical
      >
        <Flex vertical>
          <Form>
            <Flex
              vertical
              justify="center"
              align="center"
              style={{ textAlign: 'center' }}
              gap={10}
            >
              <h2 style={{ color: 'var(--button-primary)' }}>Lets connect!</h2>
              <p>
                Stay connected with us on social media for the latest updates
                and inspirations.
              </p>
            </Flex>
            <Flex vertical justify="center" align="center">
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Please input your email address!',
                  },
                ]}
              >
                <Input type="email" placeholder="Email address" required />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Subscribe
                </Button>
              </Form.Item>
            </Flex>
          </Form>
        </Flex>
        <h1>Not finished</h1>
      </Flex>
    </>
  );
};

export default Newsletter;
