'use client'

import React from 'react'
import Image from 'next/image'
import './ForgotPasswordImage.scss'

const ForgotPasswordImage: React.FC = () => (
  <div className='imageContainer'>
    <Image
      src='/passwordPage/passwordPageImage.jpg'
      width={640}
      height={640}
      className='forgotPasswordImage'
      alt='forgotPasswordImage'
    />
  </div>
)

export default ForgotPasswordImage
