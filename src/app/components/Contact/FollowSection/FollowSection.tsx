'use client'
import { Flex } from 'antd'
import './FollowSection.scss'
import Link from 'next/link'

export const FollowSection = () => {
  return (
    <Flex vertical className='followsection-container' justify='space-evenly'>
      <h2 className='followsection-header'>You can follow us</h2>
      <p className='followsection-text'>
        Stay connected with us on social media for more luxury real estate
        insights and inspiration.
      </p>
      <div className='followsection-divider'></div>
      <Flex
        justify='center'
        align='center'
        className='followsection-icons-container'
      >
        <Link href='/'>
          <img src='./contact/facebook.svg' alt='Facebook Icon' />
        </Link>
        <Link href='/'>
          <img src='./contact/linkedin.svg' alt='Linkedin Icon' />
        </Link>
        <Link href='/'>
          <img src='./contact/twitter.svg' alt='Twitter Icon' />
        </Link>
        <Link href='/'>
          <img src='./contact/instagram.svg' alt='Instagram Icon' />
        </Link>
      </Flex>
    </Flex>
  )
}
