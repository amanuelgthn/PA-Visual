'use client'
import Link from 'next/link'
import './Navbar.scss'
import { Divider, Flex } from 'antd'
import { usePathname } from 'next/navigation'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

interface INavlink {
  to: string
  text: string
}
export const Navbar = () => {
  const location = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const Navlink = ({ to, text }: INavlink) => (
    <Link
      href={`./${to}`}
      className={`Navlink ${location === '/' + to && 'active'}`}
    >
      {text}
    </Link>
  )

  const HandleOpenMenu = (open: boolean) => {
    window.scrollTo(0, 0)
    if (open === true) {
      setMobileOpen(true)
      document.body.classList.add('remove-scrolling')
    } else {
      setMobileOpen(false)
      document.body.classList.remove('remove-scrolling')
    }
  }

  useEffect(() => {
    HandleOpenMenu(false)
  }, [location])

  const MobileNavbar = () => {
    return (
      <Flex
        vertical
        className={`MobileNavbarContainer ${mobileOpen && 'active'}`}
      >
        <CloseOutlined
          className='MobileNavbarCloser'
          onClick={() => HandleOpenMenu(false)}
        />
        <Flex
          vertical
          className='MobileNavbarLogoContainer'
          justify='center'
          align='center'
        >
          <Link href='/'>
            <img
              src='./logo/logoColor.svg'
              width={100}
              alt='Global Property Logo'
            />
          </Link>
        </Flex>
        <Flex
          vertical
          justify='center'
          align='center'
          gap={15}
          className='MobileNavbarLinksContainer'
        >
          <Navlink text='Home' to='' />
          <Navlink text='About us' to='About' />
          <Navlink text='Properties' to='Properties' />
          <Navlink text='Clients' to='Clients' />
          <Navlink text='Blog' to='Blog' />
          <Navlink text='Contact' to='Contact' />
          <Navlink text='Social Media' to='Social' />
          <Navlink text='Services' to='Services' />
          <Navlink text='Innovation' to='Innovation' />
        </Flex>
        <Divider />
        <Flex
          vertical
          align='center'
          gap={15}
          className='MobileNavbarLoginContainer'
        >
          <Navlink text='Login' to='Login' />
          <Navlink text='Signup' to='signup' />
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex className='NavbarContainer'>
      <MobileNavbar />
      <MenuOutlined
        className='MobileNavbarOpener'
        onClick={() => HandleOpenMenu(true)}
      />
      <Flex className='NavbarLogoContainer' justify='center' align='center'>
        <Link href='/'>
          <img src='./logo/logo.svg' width={100} alt='Global Property Logo' />
        </Link>
      </Flex>
      <Flex
        className='NavbarLinksContainer'
        justify='space-evenly'
        align='center'
      >
        <Navlink text='Home' to='' />
        <Navlink text='About us' to='About' />
        <Navlink text='Properties' to='Properties' />
        <Navlink text='Clients' to='Clients' />
        <Navlink text='Blog' to='Blog' />
        <Navlink text='Contact' to='Contact' />
        <Navlink text='Social Media' to='Social' />
        <Navlink text='Services' to='Services' />
        <Navlink text='Innovation' to='Innovation' />
      </Flex>
      <Flex
        className='NavbarLoginContainer'
        justify='space-evenly'
        align='center'
      >
        <Navlink text='Login' to='Login' />
        <span className='Navlink' style={{ userSelect: 'none' }}>
          /
        </span>
        <Navlink text='Signup' to='signup' />
      </Flex>
    </Flex>
  )
}
