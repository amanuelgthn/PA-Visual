import { Property } from '@/app/Types/property/property'
import React, { useEffect, useState } from 'react'
import './PropertyDescAmenitiesCard.scss'
import { IoPricetagOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
import { BiBuildingHouse } from 'react-icons/bi'
import { TbMeterSquare } from 'react-icons/tb'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { LiaBathSolid } from 'react-icons/lia'
import { CgGym } from 'react-icons/cg'
import { MdPool } from 'react-icons/md'
import { GiGardeningShears } from 'react-icons/gi'
import { GiHomeGarage } from 'react-icons/gi'
import { TbSteam } from 'react-icons/tb'
import { MdOutlineBathtub } from 'react-icons/md'
import { MdBalcony } from 'react-icons/md'

type PropertyDescAmenitiesCardProps = {
  property: Property
}

interface ExtractedDataItem {
  title: string
  icon: React.ReactNode
  value: string | number | boolean
}

const PropertyDescAmenitiesCard = ({
  property,
}: PropertyDescAmenitiesCardProps) => {
  const [extractedData, setExtractedData] = useState<ExtractedDataItem[]>([])

  const extractData = (property: Property): ExtractedDataItem[] => {
    const extractedData: ExtractedDataItem[] = []

    if (property.listing_price) {
      extractedData.push({
        title: 'Price',
        icon: <IoPricetagOutline size={20} />,
        value: property.listing_price,
      })
    }

    if (property.country) {
      extractedData.push({
        title: 'Location',
        icon: <CiLocationOn size={20} />,
        value: property.city + ', ' + property.country,
      })
    }
    if (property.property_type) {
      extractedData.push({
        title: 'Property',
        icon: <BiBuildingHouse size={20} />,
        value: property.property_type,
      })
    }
    if (property.property_sqft) {
      extractedData.push({
        title: 'SQ FT',
        icon: <TbMeterSquare size={20} />,
        value: property.property_sqft,
      })
    }

    if (property.num_bedrooms) {
      extractedData.push({
        title: 'Rooms',
        icon: <MdOutlineBedroomParent size={20} />,
        value: property.num_bedrooms,
      })
    }
    if (property.num_bathrooms) {
      extractedData.push({
        title: 'Bathrooms',
        icon: <LiaBathSolid size={20} />,
        value: property.num_bathrooms,
      })
    }

    if (property.additionalFeatures?.has_gym) {
      extractedData.push({
        title: 'Gym',
        icon: <CgGym size={20} />,
        value: property.additionalFeatures.has_gym,
      })
    }

    if (property.additionalFeatures?.has_pool) {
      extractedData.push({
        title: 'Pool',
        icon: <MdPool size={20} />,
        value: property.additionalFeatures.has_pool,
      })
    }

    if (property.additionalFeatures?.has_garden) {
      extractedData.push({
        title: 'Garden',
        icon: <GiGardeningShears size={20} />,
        value: property.additionalFeatures.has_garden,
      })
    }

    if (property.additionalFeatures?.has_garage) {
      extractedData.push({
        title: 'Garage',
        icon: <GiHomeGarage size={20} />,
        value: property.additionalFeatures.has_garage,
      })
    }

    if (property.additionalFeatures?.has_steam) {
      extractedData.push({
        title: 'Steam Room',
        icon: <TbSteam size={20} />,
        value: property.additionalFeatures.has_steam,
      })
    }

    if (property.additionalFeatures?.has_jacuzzi) {
      extractedData.push({
        title: 'Jacuzzi',
        icon: <MdOutlineBathtub size={20} />,
        value: property.additionalFeatures.has_jacuzzi,
      })
    }

    if (property.additionalFeatures?.has_balcony) {
      extractedData.push({
        title: 'Balcony',
        icon: <MdBalcony size={20} />,
        value: property.additionalFeatures.has_balcony,
      })
    }

    return extractedData
  }
  useEffect(() => {
    const data = extractData(property)
    setExtractedData(data)
  }, [property])

  console.log('extractedData', extractedData)

  return (
    <div className='property-desc-amenities-card-container'>
      {extractedData.map((item, index) => (
        <div className='amenitieCard-container ' key={index}>
          <div className='property-desc-amenities-card-content-item-icon'>
            {item.icon}
          </div>
          <div className='property-desc-amenities-card-content-item-title'>
            <h1> {item.title}</h1>
          </div>
          <div className='property-desc-amenities-card-content-item-value'>
            <p> {item.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PropertyDescAmenitiesCard
