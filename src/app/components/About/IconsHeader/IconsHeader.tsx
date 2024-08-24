'use client'
import React from 'react'
import './IconsHeader.scss'
import { Flex, Typography } from 'antd'
const { Title } = Typography

const cardData = [
  {
    imgSrc: '/icons/realestate.png',
    title: 'Expertise in Luxury Real Estate',
    description:
      'Our extensive experience and deep market knowledge set us apart in the luxury real estate sector.',
  },
  {
    imgSrc: '/icons/service.png',
    title: 'Personalized Service',
    description:
      'We tailor our services to meet the unique needs of each client, ensuring a bespoke and satisfying experience.',
  },
  {
    imgSrc: '/icons/solutions.png',
    title: 'Innovative Solutions',
    description:
      'We leverage the latest technologies, including artificial intelligence, to optimize our operations and deliver superior results.',
  },
  {
    imgSrc: '/icons/team.png',
    title: 'Dedicated Team',
    description:
      'Our team of professionals is passionate about real estate and committed to achieving the best outcomes for our clients.',
  },
]

export const IconsHeader = () => {
  return (
    <Flex className='icons-header'>
      <div className='icons_logo_container'>
        <img src='/logo/logo.svg' alt='Pro advisor logo' />
        <Title level={2} className='icons-header-title'>
          Why Choose Global Property?
        </Title>
      </div>

      <div className='card_container'>
        {cardData.map((card, index) => (
          <div key={index} className='icon_card'>
            <img src={card.imgSrc} alt={card.title} />
            <Title level={3}>{card.title}</Title>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </Flex>
  )
}
