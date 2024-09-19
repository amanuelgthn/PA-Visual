'use client'

import React from 'react'
import Image from 'next/image'
import './FollowUsNavigation.scss'

const icons = [
  {
    src: '/passwordPage/facebook.png',
    alt: 'facebookIcon',
    width: 48,
    height: 50,
  },
  {
    src: '/passwordPage/linkedin.png',
    alt: 'linkedinIcon',
    width: 48,
    height: 50,
  },
  { src: '/passwordPage/x.png', alt: 'twitterIcon', width: 48, height: 50 },
  {
    src: '/passwordPage/instagram.png',
    alt: 'instagramIcon',
    width: 48,
    height: 50,
  },
]

const FollowUsNavigation: React.FC = () => (
  <section className='followUsNavigation'>
    <div className='titleContainer'>
      <h1 className='title'>You can follow us</h1>
      <p className='navigationDescription'>
        Stay connected with us on social media for more luxury real estate
        insights and inspiration.
      </p>
    </div>
    <hr className='horizontalLine' />
    <div className='iconsContainer'>
      {icons.map((icon) => (
        <Image
          key={icon.alt}
          src={icon.src}
          width={icon.width}
          height={icon.height}
          className='icon'
          alt={icon.alt}
        />
      ))}
    </div>
  </section>
)

export default FollowUsNavigation
