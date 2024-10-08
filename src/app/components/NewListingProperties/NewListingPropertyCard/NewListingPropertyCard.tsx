import React from 'react'
import './NewListingPropertyCard.scss'
import { Property } from '@/app/Types/property/property'
import { BsPlusCircle } from 'react-icons/bs'
import Link from 'next/link'

type NewListingPropertyCardProps = {
  property: Property
}
const NewListingPropertyCard = ({ property }: NewListingPropertyCardProps) => {
  return (
    <Link href={`/Properties/${property.property_id}`}>
      <div className='card-container'>
        <img
          src={property.primaryImage}
          alt={`property-${property.property_id}`}
          className='card-image'
        />
        <div className='card-footer'>
          <span>
            <h1>{property.property_title}</h1>
            <h2>
              {property.country},{property.city}
            </h2>
            <div className='carousel-image-overlay-price-container'>
              <p>${property.listing_price} USD </p>
              <p> {property.num_bathrooms} bathrooms</p>
              <p> {property.num_bedrooms} rooms</p>
            </div>
          </span>

          <BsPlusCircle size={40} color='white' />
        </div>
      </div>
    </Link>
  )
}

export default NewListingPropertyCard
