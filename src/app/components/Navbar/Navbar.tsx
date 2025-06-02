'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Button, Flex } from 'antd'
import { useAuth } from '@/app/Utils/AuthContext'
import { getClientSession } from '@/app/Utils/AuthLoginLogout'
import './Navbar.scss'

export const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()

  async function printSession(): Promise<void> {
    try {
      const session = await getClientSession() // Resolve the promise
      console.log('Resolved session:', session.username)
    } catch (error) {
      console.error('Error fetching session:', error)
    }
  }
  printSession()
  const toggleMenu = () => {
    setIsActive(!isActive)
    toggleBodyOverflow(!isActive)
  }

  const closeMenu = () => {
    setIsActive(false)
    toggleBodyOverflow(false)
    window.scrollTo(0, window.scrollY) // Maintain the current scroll position
  }

  const toggleBodyOverflow = (shouldOverflow: boolean) => {
    if (shouldOverflow) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = 200
      if (window.scrollY > scrollHeight && isActive) {
        closeMenu()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isActive])

  const handleLogin = () => {
    router.push('/Login')
  }

  const handleSignup = () => {
    router.push('/UserSignup')
  }

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/About' },
    { label: 'Properties', path: '/Properties' },
    { label: 'Service', path: '/Service' },
    { label: 'Innovation', path: '/Innovation' },
    { label: 'Subscription', path: '/Subscription' },
    { label: 'Contact', path: '/Contact' },
  ]

  const handleProfile = () => {
    router.push('/profile')
  }

  const handleLogout = () => {
    router.push('Logout')
  }

  return (
    <Flex className='wrapper-navbar'>
      <Flex className='wrapper-assist-navbar'>
        <nav className='navbar'>
          <div className='logo-navbar'>
            <Link href='/'>
              <img src='/logo/logo.svg' alt='logo' />
            </Link>
          </div>

          <div className={`links-navbar-center ${isActive ? 'active' : ''}`}>
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className={pathname.includes(item.path) ? 'active' : ''}
                >
                  <Link href={item.path} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='apply-hamburger'>
            <div
              className={`hamburger ${isActive ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <span className={`bar ${isActive ? 'active' : ''}`}></span>
              <span className={`bar ${isActive ? 'active' : ''}`}></span>
              <span className={`bar ${isActive ? 'active' : ''}`}></span>
            </div>
          </div>

          <div className={`nav-menu ${isActive ? 'active' : ''}`}>
            <div className='login-container-inside'>
              {isAuthenticated ? (
                <>
                  <Button type='link' onClick={handleProfile}>
                    Profile
                  </Button>
                  <h1>/</h1>
                  <Button type='link' onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button type='link' onClick={handleLogin}>
                    Login
                  </Button>
                  <h1>/</h1>
                  <Button type='link' onClick={handleSignup}>
                    Sign up
                  </Button>
                </>
              )}
            </div>
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className={pathname.includes(item.path) ? 'active' : ''}
                >
                  <Link href={item.path} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='login-container'>
            {isAuthenticated ? (
              <>
                <Button type='link' onClick={handleProfile}>
                  Profile
                </Button>
                <h1>/</h1>
                <Button type='link' onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button type='link' onClick={handleLogin}>
                  Login
                </Button>
                <h1>/</h1>
                <Button type='link' onClick={handleSignup}>
                  Sign up
                </Button>
              </>
            )}
          </div>
        </nav>
      </Flex>
    </Flex>
  )
}
