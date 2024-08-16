import { Flex } from 'antd'
import './ContactHeader.scss'
import Link from 'next/link'

const CustomDivider = () => {
  return <div className='DividerStylecontact'></div>
}

export const ContactHeader = () => {
  return (
    <Flex
      vertical
      justify='space-evenly'
      align='center'
      className='contact-header-container'
      gap={40}
    >
      <h4 className='contact-header-header'>CONTACT US</h4>
      <CustomDivider />
      <p className='contact-header-text'>
        We are here to help you achieve your real estate goals. Reach out to us
        today and discover the exceptional service that sets Property Advisor
        apart.
      </p>
      <Link href='/Contact'>
        <button>GET IN TOUCH</button>
      </Link>
    </Flex>
  )
}
