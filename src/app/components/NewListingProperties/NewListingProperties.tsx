import React, { useEffect } from 'react'
import './NewListingProperties.scss'
import { Property } from '@/app/Types/property/property'
import NewListingPropertyCard from './NewListingPropertyCard/NewListingPropertyCard'
import { Button } from 'antd'
import Link from 'next/link'

type NewListingPropertiesProps = {
  properties: Property[]
}
const NewListingProperties = ({ properties }: NewListingPropertiesProps) => {
  const [propertiesToShow, setPropertiesToShow] = React.useState<Property[]>([])

  useEffect(() => {
    if (properties) {
      setPropertiesToShow(properties.slice(0, 4))
    }
  }, [properties])
  if (!properties) return <div>No properties found</div>
  return (
    <div className='new-listing-properties-container-wrapper'>
      <h1>NEW LISTINGS</h1>
      <div className='listing-line'></div>
      <div className='new-listing-properties-container'>
        {propertiesToShow.map((property, index) => (
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
