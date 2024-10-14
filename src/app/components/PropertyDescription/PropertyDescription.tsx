import { Property } from '@/app/Types/property/property'
import React, { useEffect, useState } from 'react'
import './PropertyDescription.scss'
// import { Image } from 'antd'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Link from 'next/link'
import PropertyDescAmenitiesCard from './PropertyDescAmenitiesCard/PropertyDescAmenitiesCard'
import { Image } from 'antd'
import UnparalleledAmenitiesSection from './UnparalleledAmenitiesSection/UnparalleledAmenitiesSection'
import PropertySpecifications from './PropertySpecifications/PropertySpecifications'
import MortgageCalculatorComponent from './MortgageCalculatorComponent/MortgageCalculatorComponent'
import ScheduleViewIngForm from './ScheduleViewIngForm/ScheduleViewIngForm'

type PropertyDecsriptionProps = {
  property: Property
}

const PropertyDescription = ({ property }: PropertyDecsriptionProps) => {
  const [propertyImages, setPropertyImages] = useState<
    { base64Image: string }[]
  >([])
  const [selectedPropertyImage, setSelectedPropertyImage] = useState<string>('')

  useEffect(() => {
    if (property) {
      setPropertyImages(property.additionalImages || [])
      setSelectedPropertyImage(property.primaryImage)
    }
  }, [property])

  return (
    <div className='property-desc-wrapper'>
      <div className='property-des-title'>
        <h1>{property.property_title}</h1>
        <p>Experience the pinnacle of ultra-modern coastal living</p>
      </div>
      <div
        style={{
          width: '1160px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        <div className='image-with-back-nav'>
          <Link href={'/Properties'}>
            <MdOutlineKeyboardArrowLeft
              size={50}
              color='white'
              className='back-nav'
            />
          </Link>
          <Image
            height={'100%'}
            width={'100%'}
            src={
              selectedPropertyImage
                ? selectedPropertyImage
                : property.primaryImage
            }
            alt='property-image'
            className='property-image'
          />
          <div className='overlay-image-div'>
            {propertyImages.map((image, index) => (
              <Image
                onClick={() => setSelectedPropertyImage(image.base64Image)}
                preview={false}
                key={index}
                src={image.base64Image}
                alt='property-image'
                className={`property-images  ${
                  selectedPropertyImage === image.base64Image ? 'selected' : ''
                }`}
              />
            ))}
          </div>
          <div className='overlay-text-div'>
            <p>Stunning beachfront view of the villa at sunset</p>
          </div>
        </div>
        <PropertyDescAmenitiesCard property={property} />
        <UnparalleledAmenitiesSection property={property} />
        <PropertySpecifications property={property} />
        <MortgageCalculatorComponent property={property} />
        <ScheduleViewIngForm />
      </div>
    </div>
  )
}

export default PropertyDescription
