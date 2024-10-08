import React from 'react'
import { Property } from '@/app/Types/property/property'
import { Carousel, ConfigProvider } from 'antd'
import './HighLightedPropertiesCard.scss'
import Link from 'next/link'
type HighLightedPropertiesCardProps = {
  property: Property
}

const HighLightedPropertiesCard = ({
  property,
}: HighLightedPropertiesCardProps) => {
  return (
    <div className='carousel-wrapper'>
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              dotWidth: 24,
              dotHeight: 24,
            },
          },
        }}
      >
        <Carousel dots>
          {property.additionalImages?.map((image, index) => (
            <Link key={index} href={`/Properties/${property.property_id}`}>
              <img src={image.base64Image} alt=' images ' />
            </Link>
          ))}
        </Carousel>
      </ConfigProvider>

      {property.promotion?.promotion_name === 'forSale' && (
        <div className='carousel-for-sale-overlay'>
          <h1>FOR SALE</h1>
        </div>
      )}
      <Link href={`/Properties/${property.property_id}`}>
        <div className='highlighted-car-footer'>
          <h1>{property.street_address}</h1>
          <h3>$ {property.listing_price} $</h3>
        </div>
      </Link>
    </div>
  )
}

export default HighLightedPropertiesCard
