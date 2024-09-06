'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Form, Input, Tag } from 'antd'
import '@fontsource/montserrat'
import './forgotPassword.scss'

type RequiredMark = boolean | 'optional' | 'customize'

const customizeRequiredMark = (
  label: React.ReactNode,
  { required }: { required: boolean },
) => (
  <>
    {required ? (
      <Tag color='error'>Required</Tag>
    ) : (
      <Tag color='warning'>optional</Tag>
    )}
    {label}
  </>
)

const ForgotPassword: React.FC = () => {
  const [form] = Form.useForm()
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional')

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark
  }) => {
    setRequiredMarkType(requiredMarkValue)
  }

  return (
    <>
      <section className='backgroundColor'>
        <section className='forgotPasswordForm'>
          <div className='formContainer'>
            <div className='headerContainer'>
              <h1 className='forgotPasswordTitle'>FORGOT PASSWORD</h1>
              <p className='forgotPasswordDescription'>
                Enter your email address below. We'll send you instructions to
                reset your password.
              </p>
            </div>
            <Form
              form={form}
              layout='vertical'
              initialValues={{ requiredMarkValue: requiredMark }}
              onValuesChange={onRequiredTypeChange}
              requiredMark={
                requiredMark === 'customize'
                  ? customizeRequiredMark
                  : requiredMark
              }
            >
              <Form.Item
                label='Email address'
                required
                tooltip='This is a required field'
                className='emailAdress'
                style={{ marginBottom: 0 }}
              >
                <Input
                  placeholder='Enter your email'
                  style={{ height: '3.75rem' }}
                />
              </Form.Item>
              <Form.Item>
                <Button type='primary' className='primaryButton'>
                  Send link to email
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type='default' className='secondaryButton'>
                  Back to login
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className='imageContainer'>
            <Image
              src='/forgotPassword/65ff4a824152e24205edadf424e601aa.jpg'
              width={0}
              height={0}
              className='forgotPasswordImage'
              alt='forgotPasswordImage'
            />
          </div>
        </section>
        <section className='followUsNavigation'>
          <div className='titleContainer'>
            <h1 className='title'>You can follow us</h1>
            <p className='navigationDescription'>
              Stay connected with us on social media for more luxury real estate
              insights and inspiration.
            </p>
          </div>
          <hr className='horizontalLine'></hr>
          <div className='iconsContainer'>
            <Image
              src='/forgotPassword/facebook.png'
              width={48}
              height={50}
              className='icon'
              alt='facebookIcon'
            />

            <Image
              src='/forgotPassword/linkedin.png'
              width={48}
              height={50}
              className='icon'
              alt='linkedinIcon'
            />

            <Image
              src='/forgotPassword/x.png'
              width={48}
              height={50}
              className='icon'
              alt='twitterIcon'
            />

            <Image
              src='/forgotPassword/instagram.png'
              width={48}
              height={50}
              className='icon'
              alt='instagramIcon'
            />
          </div>
        </section>
      </section>
    </>
  )
}

export default ForgotPassword
