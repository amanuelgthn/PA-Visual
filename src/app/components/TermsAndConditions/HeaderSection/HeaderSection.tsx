'use client'

import React from 'react'
import Image from 'next/image'
import '@fontsource/montserrat'
import './HeaderSection.scss'

const HeaderSection: React.FC = () => {
  return (
    <section className='headerSection'>
      <h1 className='title'>TERMS AND CONDITIONS</h1>
      <p className='description'>Last updated: May 16, 2023</p>
    </section>
  )
}

export default HeaderSection
