'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Form, Input, Tag } from 'antd'
import '@fontsource/montserrat'
import './passwordPage.scss'
import PopUpWindow from '../components/passwordPage/PopUpWindow/PopUpWindow'

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
  const [isPopUpVisible, setIsPopUpVisible] = useState(false)

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark
  }) => {
    setRequiredMarkType(requiredMarkValue)
  }

  const handleResetPassword = () => {
    setIsPopUpVisible(true)
  }

  const handleClosePopUp = () => {
    setIsPopUpVisible(false)
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
              >
                <Input
                  placeholder='Enter your email'
                  style={{ height: '3.75rem', width: '100%' }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  className='primaryButton'
                  onClick={handleResetPassword}
                >
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
              src='/passwordPage/passwordPageImage.jpg'
              width={640}
              height={640}
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
              src='/passwordPage/facebook.png'
              width={48}
              height={50}
              className='icon'
              alt='facebookIcon'
            />

            <Image
              src='/passwordPage/linkedin.png'
              width={48}
              height={50}
              className='icon'
              alt='linkedinIcon'
            />

            <Image
              src='/passwordPage/x.png'
              width={48}
              height={50}
              className='icon'
              alt='twitterIcon'
            />

            <Image
              src='/passwordPage/instagram.png'
              width={48}
              height={50}
              className='icon'
              alt='instagramIcon'
            />
          </div>
        </section>
        {isPopUpVisible && (
          <div className='ConfirmationPopUpWindow'>
            <PopUpWindow onClose={handleClosePopUp} />
          </div>
        )}
      </section>
    </>
  )
}

export default ForgotPassword
