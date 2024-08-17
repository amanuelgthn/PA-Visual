'use client'
import { Flex } from 'antd'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import { Footer } from './Footer/Footer'

interface IWrapper {
  children: ReactNode
}

const WrapperStyles: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#F2F2F2',
  minHeight: '40vh',
  zIndex: '-999999',
}


export const Wrapper = ({ children }: IWrapper) => {
  const pathname = usePathname()
  const isAdminPath = pathname.startsWith('/admin')
  const isLogin = pathname.startsWith('/Login')
  const isSignup = pathname.startsWith('/Signup')
  const isForgotPass = pathname.startsWith('/ForgotPass')

  return (
    <>
      <Flex vertical justify='center' align='center' style={WrapperStyles}>
      {children}
        {/* {!isAdminPath && !isLogin && !isSignup && !isForgotPass && <Navbar />}
        <Flex vertical style={WrapperAssistStyles}>
        </Flex> */}
        {!isAdminPath && !isLogin && !isSignup && !isForgotPass && <Footer />} 
      </Flex>
    </>
  )
}
