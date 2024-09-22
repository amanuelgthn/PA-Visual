'use client'
import Image from 'next/image'
import './ReviewedProperties.scss'
import { ReviewedProperty } from '@/app/Types/Profile/ProfileTypes'

interface ReviewedPropertiesProps {
  reviewedProperties: ReviewedProperty[]
}

const ReviewedProperties: React.FC<ReviewedPropertiesProps> = ({
  reviewedProperties,
}) => {
  return (
    <div className='reviewed-properties'>
      <h3>Recently Reviewed Properties</h3>
      <div className='properties-grid'>
        {reviewedProperties.map((property, index) => (
          <div key={index} className='property-card'>
            <div className='image-wrapper'>
              <Image
                src={property.imageUrl}
                alt={property.title}
                width={400}
                height={300}
                className='property-image'
              />
            </div>
            <div className='property-details'>
              <h4>{property.title}</h4>
              <p>{property.price}</p>
              <p>{property.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewedProperties
