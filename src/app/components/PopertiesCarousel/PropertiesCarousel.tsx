'use client'
import React, { useEffect, useState } from 'react'
import { Carousel, ConfigProvider, Spin } from 'antd'
import { Property } from '@/app/Types/property/property'
import './PropertiesCarousel.scss'
import { BsPlusCircle } from 'react-icons/bs'
import Link from 'next/link'
type PropertiesCarouselProps = {
  properties: Property[]
}

const PropertiesCarousel = ({ properties }: PropertiesCarouselProps) => {
  const [propertyState, setPropertyState] = useState<Property[]>([])
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  )

  useEffect(() => {
    if (properties) {
      setPropertyState(properties)
      setSelectedProperty(properties[0])
    }
  }, [properties])

  if (propertyState.length === 0) {
    return <Spin />
  }

  return (
    <div className='carousel-container'>
      <ConfigProvider
        theme={{
          components: { Carousel: { arrowSize: 50, arrowOffset: 1 } },
        }}
      >
        <Carousel
          rootClassName='custom-carousel-styles'
          pauseOnHover
          dots={false}
          effect='scrollx'
          className='custom-carousel-styles'
          arrows
          autoplay
        >
          {selectedProperty?.additionalImages?.map((image, index) => (
            <div key={index} className='carousel-image-container'>
              <Link href={`/Properties/${selectedProperty.property_id}`}>
                <img
                  src={image.base64Image}
                  alt={`property-${propertyState[0].property_id}-image-${index}`}
                  className='carousel-image'
                />
                <div className='carousel-image-overlay'>
                  {/* Content for the bottom left div */}
                  <span>
                    <h1>{selectedProperty.property_title}</h1>
                    <h2>
                      {selectedProperty.country},{selectedProperty.city}
                    </h2>
                    <div className='carousel-image-overlay-price-container'>
                      <p>${selectedProperty.listing_price} USD </p>
                      <p> {selectedProperty.num_bathrooms} bathrooms</p>
                      <p> {selectedProperty.num_bedrooms} rooms</p>
                    </div>
                  </span>

                  <BsPlusCircle size={40} color='white' />
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </ConfigProvider>

      <div className='additional-images-container'>
        {propertyState.map((property, index) => (
          <img
            onClick={() => setSelectedProperty(property)}
            className={`additional-image-item${
              selectedProperty?.property_id === property.property_id
                ? ' active'
                : ''
            }`}
            key={index}
            src={property?.primaryImage}
            alt={`property-${property.property_id}-image-${index}`}
          />
        ))}
      </div>
    </div>
  )
}

export default PropertiesCarousel
