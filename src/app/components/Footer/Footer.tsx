import './Footer.scss'
import { Button, Divider, Flex } from 'antd'
import Link from 'next/link'

interface IFooterMenu {
  header: string
  links: {
    text: string
    to: string
  }[]
}

const FooterMenu = ({ header, links }: IFooterMenu) => {
  return (
    <Flex vertical className='footer-menu-container' gap={20}>
      <h4 className='footer-menu-header'>{header}</h4>
      {links.map((x, key) => {
        return (
          <Link href={x.to} key={key} className='footer-menu-link'>
            {x.text}
          </Link>
        )
      })}
    </Flex>
  )
}

const FooterSubscribe = () => {
  return (
    <Flex
      vertical
      className='footer-newsletter-container'
      align='center'
      justify='center'
      gap={15}
    >
      <h4>Join our newsletter!</h4>
      <p>
        Stay connected with us on social media for the latest updates and
        inspirations.
      </p>
      <Button type='primary' href='/Newsletter'>
        Subscribe
      </Button>
    </Flex>
  )
}

export const Footer = () => {
  const ServicesMenu = {
    header: 'Our Services',
    links: [
      { text: 'Sales & acquisition', to: '/Blog' },
      { text: 'Investment advisory', to: '/Blog' },
      { text: 'Arquitecture & design', to: '/Blog' },
      { text: 'Property managment', to: '/Blog' },
      { text: 'Relocation services', to: '/Blog' },
    ],
  }
  const InformationMenu = {
    header: 'Information',
    links: [
      { text: 'FAQ', to: '/FAQ' },
      { text: 'Blog', to: '/Blog' },
      { text: 'Support', to: '/Support' },
    ],
  }
  const CompanyMenu = {
    header: 'Company',
    links: [
      { text: 'About us', to: '/About' },
      { text: 'Careers', to: '/Careers' },
      { text: 'Contact us', to: '/Contact' },
    ],
  }
  return (
    <Flex
      vertical
      justify='center'
      align='center'
      className='footer-main-container'
    >
      <Flex className='footer-logo-container' justify='center' align='center'>
        <Flex className='footer-logos' justify='space-evenly' align='center'>
          <Link
            href='https://globalproperty-group.com/'
            target='_blank'
            className='smaller-logo'
          >
            <img
              src='./other_logo/globalproperty.svg'
              alt='Global Property Logo'
            />
          </Link>
          <Link
            href='https://www.globalfunding-group.com/'
            target='_blank'
            className='smaller-logo'
          >
            <img
              src='./other_logo/globalfunding.svg'
              alt='Global Funding Logo'
            />
          </Link>
          <Link
            href='https://newtechnology-group.com/'
            target='_blank'
            className='smaller-logo'
          >
            <img src='./other_logo/newtech.svg' alt='New Tech Logo' />
          </Link>
          <Link
            href='https://aitouch-consulting.com/'
            target='_blank'
            className='smaller-logo'
          >
            <img src='./other_logo/aitouch.svg' alt='AI Touch Logo' />
          </Link>
          <Link
            href='https://proadvisor-group.com/'
            target='_blank'
            className='main-logo'
          >
            <img
              src='./other_logo/proadvisor.svg'
              alt='Pro Advisor Group Logo'
            />
          </Link>
        </Flex>
      </Flex>
      <Flex className='footer-middle' justify='start' align='center'>
        <Flex className='footer-menu' justify='center' align='top'>
          <FooterMenu {...ServicesMenu} />
          <FooterMenu {...InformationMenu} />
          <FooterMenu {...CompanyMenu} />
        </Flex>
        <Flex className='footer-subscribe' justify='center' align='center'>
          <FooterSubscribe />
        </Flex>
      </Flex>
      <Divider style={{ backgroundColor: '#fff', margin: '5vh 0 0 0' }} />
      <Flex className='footer-footer' justify='space-evenly' align='center'>
        <Flex className='footer-footer-logo' justify='center' align='center'>
          <img src='./logo/logoFooter.svg' alt='Global Property Logo' />
        </Flex>
        <Flex
          className='footer-footer-terms'
          justify='space-evenly'
          align='center'
        >
          <Link href='/terms' className='terms-element'>
            Terms
          </Link>
          <Link href='/privacy' className='terms-element'>
            Privacy
          </Link>
          <Link href='/cookies' className='terms-element'>
            Cookies
          </Link>
        </Flex>
        <Flex
          className='footer-footer-social'
          justify='space-evenly'
          align='center'
        >
          <Link href='/' className='social-link'>
            <img src='./social/linkedin.svg' alt='Linkedin Icon' />
          </Link>
          <Link href='/' className='social-link'>
            <img src='./social/facebook.svg' alt='Facebook Icon' />
          </Link>
          <Link href='/' className='social-link'>
            <img src='./social/twitter.svg' alt='Twitter Icon' />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
