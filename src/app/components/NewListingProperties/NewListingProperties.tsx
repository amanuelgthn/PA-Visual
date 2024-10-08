import React from 'react'
import './NewListingProperties.scss'
import { Property } from '@/app/Types/property/property'
import NewListingPropertyCard from './NewListingPropertyCard/NewListingPropertyCard'
import { Button } from 'antd'
import Link from 'next/link'

type NewListingPropertiesProps = {
  properties: Property[]
}
const NewListingProperties = ({ properties }: NewListingPropertiesProps) => {
  return (
    <div className='new-listing-properties-container-wrapper'>
      <h1>NEW LISTINGS</h1>
      <div className='listing-line'></div>
      <div className='new-listing-properties-container'>
        {properties.map((property, index) => (
          <NewListingPropertyCard key={index} property={property} />
        ))}
      </div>
      <Link href={'/Properties'}>
        <div className='ontinue-exploring-new-listing-properties-btn'>
          <Button>VIEW MORE</Button>
        </div>
      </Link>
    </div>
  )
}

export default NewListingProperties
