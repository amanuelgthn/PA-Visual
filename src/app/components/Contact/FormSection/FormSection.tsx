'use client'
import { Flex, Form, Input } from 'antd'
import './FormSection.scss'
import { EmailValidation, RequiredField } from '@/app/Utils/AntdFormValidators'
import TextArea from 'antd/es/input/TextArea'

export const FormSection = () => {
  return (
    <Flex
      className='formsection-container'
      justify='space-evenly'
      vertical
      align='center'
    >
      <Flex
        className='formsection-header-container'
        justify='start'
        align='center'
      >
        <h2>Contact us</h2>
        <p>
          Ready to experience the Property Advisor difference? Contact us today
          to learn more about how we can help you achieve your real estate
          goals.
        </p>
      </Flex>

      <Flex
        justify='space-evenly'
        align='center'
        className='formsection-form-image-container'
      >
        <Form className='formsection-form-container' layout='vertical'>
          <Form.Item
            name='first_name'
            className='formsection-contact-form-item'
            rules={[RequiredField]}
            label='First name'
          >
            <Input type='text' placeholder='Name' required />
          </Form.Item>

          <Form.Item
            name='last_name'
            className='formsection-contact-form-item'
            label='Last name'
          >
            <Input type='text' placeholder='Last Name' />
          </Form.Item>

          <Form.Item
            name='email'
            className='formsection-contact-form-item'
            rules={[RequiredField, EmailValidation]}
            label='Email address'
          >
            <Input type='email' placeholder='email@example.com' required />
          </Form.Item>

          <Form.Item
            name='text'
            className='formsection-contact-form-item'
            rules={[RequiredField]}
            label='Your message'
          >
            <TextArea
              placeholder='Enter your question or message (max 255 characters)'
              maxLength={255}
              required
              className='contact-form-input'
            />
          </Form.Item>
          <Form.Item className='formsection-contact-form-item'>
            <button type='submit'>Submit</button>
          </Form.Item>
        </Form>
        <Flex
          className='formsection-image-container'
          justify='center'
          align='center'
        >
          <img src='./contact/form.jpg' alt='Form Image' />
        </Flex>
      </Flex>
    </Flex>
  )
}
