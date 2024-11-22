import './Footer.scss'
import { Button, Divider, Flex } from 'antd'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

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
      <h4>Subscribe!</h4>
      <div className='input-container'>
        <input type='text' placeholder='Email address' name='' id='' />
        <Button href='/Newsletter' className='button-subscribe'>
          <FaArrowRight className='icon' />
        </Button>
      </div>
      <p>
        Stay connected with us on social media for the latest updates and
        inspirations.
      </p>
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
      <div className='wrapper-footer'>
        <div className='wrapper-assist-footer'>
          <Flex
            className='footer-logo-container'
            justify='center'
            align='center'
          >
            <Flex
              className='footer-logos'
              justify='space-evenly'
              align='center'
            >
              <Link
                href='https://globalproperty-group.com/'
                target='_blank'
                className='smaller-logo'
              >
                <img src='/other_logo/GPLogo.png' alt='Global Property Logo' />
              </Link>
              <Link
                href='https://www.globalfunding-group.com/'
                target='_blank'
                className='smaller-logo'
              >
                <img src='/other_logo/NTLogo.png' alt='Global Funding Logo' />
              </Link>
              <Link
                href='https://newtechnology-group.com/'
                target='_blank'
                className='smaller-logo'
              >
                <img src='/other_logo/ATLogo.png' alt='New Tech Logo' />
              </Link>
              <Link
                href='https://aitouch-consulting.com/'
                target='_blank'
                className='smaller-logo'
              >
                <img src='/other_logo/GFLogo.png' alt='AI Touch Logo' />
              </Link>
              <Link
                href='https://proadvisor-group.com/'
                target='_blank'
                className='main-logo'
              >
                <img
                  src='/other_logo/proadvisorlogoFooter.png'
                  alt='Pro Advisor Group Logo'
                  className='proadvisor-logo-footer'
                />
              </Link>
            </Flex>
          </Flex>

          <Flex className='footer-middle'>
            <Flex className='footer-menu'>
              <FooterMenu {...ServicesMenu} />
              <FooterMenu {...InformationMenu} />
              <FooterMenu {...CompanyMenu} />
              <Flex
                className='footer-subscribe'
                justify='center'
                align='center'
              >
                <FooterSubscribe />
              </Flex>
            </Flex>
          </Flex>

          <Divider style={{ backgroundColor: '#fff', margin: '5vh 0 0 0' }} />
          <Flex className='footer-footer' justify='space-evenly' align='center'>
            <Flex
              className='footer-footer-logo footer-bottom'
              justify='center'
              align='center'
            >
              <img src='/logo/logoFooter.svg' alt='Global Property Logo' />
            </Flex>
            <Flex
              className='footer-footer-terms footer-bottom'
              justify='space-evenly'
              align='center'
            >
              <Link href='/privacy' className='terms-element'>
                Terms & Conditions
              </Link>
              <Link href='/cookies' className='terms-element'>
                Cookies
              </Link>
            </Flex>
            <Flex
              className='footer-footer-social footer-bottom'
              justify='space-evenly'
              align='center'
            >
              <Link href='/' className='social-link'>
                <img src='/social/linkedin.svg' alt='Linkedin Icon' />
              </Link>
              <Link href='/' className='social-link'>
                <img src='/social/facebook.svg' alt='Facebook Icon' />
              </Link>
              <Link href='/' className='social-link'>
                <img src='/social/twitter.svg' alt='Twitter Icon' />
              </Link>
            </Flex>
          </Flex>
        </div>
      </div>
    </Flex>
  )
}
