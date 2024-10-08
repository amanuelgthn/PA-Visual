import { Property } from '@/app/Types/property/property'
import React from 'react'
import './PropertyDescription.scss'
// import { Image } from 'antd'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Link from 'next/link'
import PropertyDescAmenitiesCard from './PropertyDescAmenitiesCard/PropertyDescAmenitiesCard'

type PropertyDecsriptionProps = {
  property: Property
}

const PropertyDescription = ({ property }: PropertyDecsriptionProps) => {
  // const [propertyImages, setPropertyImages] = useState<object[]>([])
  // const [propertyImage, setPropertyImage] = useState<string>('')

  // useEffect(() => {
  //   if (property) {
  //     setPropertyImages(property.additionalImages || [])
  //     setPropertyImage(property.primaryImage)
  //   }
  // }, [property])

  return (
    <div className='property-desc-wrapper'>
      <div className='property-des-title'>
        <h1>{property.property_title}</h1>
        <p>Experience the pinnacle of ultra-modern coastal living</p>
      </div>
      <div className='image-with-back-nav'>
        <Link href={'/Properties'}>
          <MdOutlineKeyboardArrowLeft
            size={50}
            color='white'
            className='back-nav'
          />
        </Link>
        {/* <Image
          preview={false}
          height={'100%'}
          width={'100%'}
          src={propertyImage}
          alt='property-image'
          className='property-image'
        /> */}
        {/* <div className='overlay-image-div'>
          {propertyImages.map((image, index) => (
            <Image
              preview={false}
              key={index}
              src={image.base64Image}
              alt='property-image'
              className='property-images'
            />
          ))}
        </div> */}
        <div className='overlay-text-div'>
          <p>Stunning beachfront view of the villa at sunset</p>
        </div>
      </div>
      <PropertyDescAmenitiesCard property={property} />
    </div>
  )
}

export default PropertyDescription
