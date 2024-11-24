'use client'
import { Flex } from 'antd'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import { Footer } from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'
interface IWrapper {
  children: ReactNode
}
const WrapperStyles: React.CSSProperties = {
  width: '100%',
  minHeight: '40vh',
  zIndex: '1',
  backgroundColor: ' #2a2e3094',
}
export const Wrapper = ({ children }: IWrapper) => {
  const pathname = usePathname()
  const isAdminPath = pathname.startsWith('/admin')
  const isForgotPass = pathname.startsWith('/ForgotPass')
  const EmailVerification = pathname.startsWith('/users/verify')
  return (
    <>
      <Flex vertical justify='center' align='center' style={WrapperStyles}>
        {!isAdminPath && !isForgotPass && !EmailVerification && <Navbar />}
        {children}
        {/* <Flex vertical style={WrapperAssistStyles}>
      </Flex> */}
        {!isAdminPath && !isForgotPass && !EmailVerification && <Footer />}
      </Flex>
    </>
  )
}
