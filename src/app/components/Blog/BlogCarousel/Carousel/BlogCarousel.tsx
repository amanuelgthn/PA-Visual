import React from 'react'
import { Carousel } from 'antd'
import './BlogCarousel.scss'
import BlogCarouselCard, {
  CardTypes,
} from '../BlogCarouselCard/BlogCarouselCard'

type BlogCarouselProps = {
  cardData: CardTypes[]
  dataType: 'articles' | 'news'
}

const BlogCarousel = ({ cardData, dataType }: BlogCarouselProps) => {
  return (
    <div className='blog-carousel-container'>
      <Carousel
        focusOnSelect
        slidesToShow={3}
        centerMode
        centerPadding='0px'
        adaptiveHeight
        autoplay
        responsive={[
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        dots={false}
        className='blog-carousel'
      >
        {cardData.map((card) => (
          <div key={card.cardTitle} className='carousel-slide'>
            <BlogCarouselCard card={card} dataType={dataType} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default BlogCarousel
