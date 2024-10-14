import React from 'react'
import './PropertySpecifications.scss'
import { Property } from '@/app/Types/property/property'

type PropertySpecificationsProps = {
  property: Property
}
const PropertySpecifications = ({ property }: PropertySpecificationsProps) => {
  return (
    <div className='propertySpecifications-conatiner'>
      <h1>Cutting-Edge Specifications</h1>
      <div className='spcifications-line-div'></div>

      {property.property_specifications?.map((specification, index) => (
        <div key={index} className='propertySpecifications-card-container'>
          {Object.entries(specification).map(([key, spec]) => (
            <div key={key} className='propertySpecifications-card-content'>
              <h1>{spec.label}</h1>
              <p>{spec.value}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default PropertySpecifications
