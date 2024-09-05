'use client'
import React from 'react'
import './NewsAndUpdate.scss'
import BlogCarousel from '../BlogCarousel/Carousel/BlogCarousel'
import { CardTypes } from '../BlogCarousel/BlogCarouselCard/BlogCarouselCard'
import { Button } from 'antd'
import TeamsCarousel, { TeamsMemberTypes } from '../TeamsCarousel/TeamsCarousel'
import Link from 'next/link'
import { Divider } from 'antd'

type NewsAndUpdateProps = {
  cardData: CardTypes[]
  dataDype: 'articles' | 'news'
  teamMembers: TeamsMemberTypes[]
}

const NewsAndUpdate = ({
  cardData,
  dataDype,
  teamMembers,
}: NewsAndUpdateProps) => {
  return (
    <section className='news-update-section'>
      <h1 className='news-title'>NEWS AND UPDATES</h1>
      <div className='buttons-position'>
        <div className='buttons-wrapper'>
          <Button className='news-button' type='primary'>
            NEWS AND UPDATES
          </Button>
          <Button className='blog-button' type='primary'>
            TIPS
          </Button>
          <Button className='events-button' type='primary'>
            {' '}
            GUIDES{' '}
          </Button>
        </div>
      </div>
      <BlogCarousel cardData={cardData} dataType={dataDype} />

      <div className='insight-wrapper'>
        <h1 className='expert-insight-title'>EXPERTS INSIGHTS</h1>
        <p className='insight-p'>
          Our team of real estate experts and industry professionals share their
          knowledge and expertise on a wide range of topics related to luxury
          real estate. From market analysis to design trends, our blog offers
          valuable insights to help you make informed decisions and stay ahead
          of the curve in the competitive world of luxury real estate.
        </p>
      </div>

      <TeamsCarousel teamMembers={teamMembers} />
      <div className='featured-properties'>
        <h1>Explore Our Featured Properties</h1>
        <span className='divider'>
          <Divider
            style={{ background: 'rgba(116, 71, 31, 1)' }}
            variant='solid'
          />
        </span>
        <p>
          Experience the finest in luxury living. Browse our exclusive listings
          and find your dream home today.
        </p>
        <Button className='featured-properties-button' type='primary'>
          Explore NOW
        </Button>
      </div>
      <footer className='blog-footer'>
        <h1>Contact Us </h1>
        <span className='divider'>
          <Divider
            style={{ background: 'rgba(255, 255, 255, 1)' }}
            variant='solid'
          />
        </span>
        <p>
          We are here to help you achieve your real estate goals. Reach out to
          us today and discover the exceptional service that sets Property
          Advisor apart.
        </p>
        <Button className='contact-us-button' type='primary'>
          <Link href='/Contact'> Contact Us</Link>
        </Button>
      </footer>
    </section>
  )
}

export default NewsAndUpdate
