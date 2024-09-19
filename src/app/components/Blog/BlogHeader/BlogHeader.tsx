import React from 'react'
import BlogCarousel from '../BlogCarousel/Carousel/BlogCarousel'
import { CardTypes } from '../BlogCarousel/BlogCarouselCard/BlogCarouselCard'
import './BlogHeader.scss'

type BlogHeaderProps = {
  cardData: CardTypes[]
  dataType: 'articles' | 'news'
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ cardData, dataType }) => {
  return (
    <header className='blog-header-wrapper'>
      <video
        src='/blog/blog-header-video.mp4'
        className='blog-header-video'
        autoPlay
        loop
        muted
        playsInline
      />
      <div className='overlay'>
        <div className='overlay-content'>
          <h1 className='overlay-title'>BLOG</h1>
          <p className='overlay-subtitle'>
            Explore the World of Luxury Real Estate
          </p>
          <h2 className='overlay-article'>ARTICLES</h2>
        </div>
        <div className='carousel-container'>
          <BlogCarousel cardData={cardData} dataType={dataType} />
        </div>
      </div>
    </header>
  )
}

export default BlogHeader
