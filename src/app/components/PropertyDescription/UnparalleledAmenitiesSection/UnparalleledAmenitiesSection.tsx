import React from 'react'
import './UnparalleledAmenitiesSection.scss'
import { Property } from '@/app/Types/property/property'
import { BiHeart } from 'react-icons/bi'

type UnparalleledAmenitiesSectionProps = {
  property: Property
}

const UnparalleledAmenitiesSection = ({
  property,
}: UnparalleledAmenitiesSectionProps) => {
  return (
    <div className='amenities-container'>
      <div className='overlay-save-to-div'>
        <BiHeart size={18} color='white' />
        <h1> Save to Favorites</h1>
      </div>
      <div className='amenities-title-desc-container'>
        <h1>A Masterpiece of Modern Coastal Living</h1>
        <div className='line-div'></div>
        <h1>{property.property_description}</h1>
      </div>
      <span className='unparalleled-amenities-title'>
        <h1>Unparalleled Amenities:</h1>
      </span>
      <div className='unparalleledAminites-continainer'>
        {property.unparalleledAmenities?.amenity?.map((amenity, index) => (
          <div key={index} className='amenities-card-container'>
            <h1>{amenity}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UnparalleledAmenitiesSection
