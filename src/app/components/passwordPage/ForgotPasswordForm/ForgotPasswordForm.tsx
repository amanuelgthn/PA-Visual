'use client'
import './ForgotPasswordForm.scss'
import Image from 'next/image'
import { Form } from '../form/Form'

export const ForgotPasswordForm: React.FC = () => {
  return (
    <div className='forgotPassword-container'>
      <div className='first-half both-halfs'>
        <h1 className='title'>Forgot Password</h1>
        <p>
          Enter your email address below. We&apos;ll send you instructions to
          reset your password.
        </p>
        <Form />
      </div>
      <div className='second-half both-halfs'>
        <Image
          src='/passwordPage/passwordPageImage.jpg'
          width={640}
          height={640}
          className='forgotPasswordImage'
          alt='forgotPasswordImage'
        />
      </div>
    </div>
  )
}
