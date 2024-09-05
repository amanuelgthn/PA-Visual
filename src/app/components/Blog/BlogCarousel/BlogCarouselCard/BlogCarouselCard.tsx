import React from 'react'
import './BlogCarouselCard.scss'
import { Button } from 'antd'
import './BlogCarouselCard.scss'
export type CardTypes = {
  propertyId: string
  cardImg: string
  postingDate?: string
  cardTitle: string
  cardDescription: string
}

type BlogCarouselCardProps = {
  card: CardTypes
  dataType: 'articles' | 'news'
}

const BlogCarouselCard: React.FC<BlogCarouselCardProps> = ({
  card,
  dataType,
}) => {
  return (
    <div className='BlogCarouselCard'>
      <img src={card.cardImg} alt='card' />
      {dataType === 'articles' && (
        <p className='posting-date'>{card.postingDate}</p>
      )}
      <h3 className='card-title'>{card.cardTitle}</h3>
      <p className='card-description'>{card.cardDescription}</p>
      <div className='read-more-wrapper'>
        <Button className='read-more' type='link'>
          Read More
        </Button>
      </div>
    </div>
  )
}

export default BlogCarouselCard
