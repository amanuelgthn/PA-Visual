import React from 'react'
import './RecentlyProperties.scss'
import { CiLocationOn } from 'react-icons/ci'
import Link from 'next/link'

export type RecentlyProperties = {
  propertyId: string
  propertyTitle: string
  propertyPrice: string
  propertyStatus: 'Available' | 'Sold'
  propertyBedRooms: number
  propertyGarageSpace: number
  propertyArea: number
  propertyAddress: string
  propertyDescription: string
  propertyFeatures: string[]
  listingAgentName: string
  listingAgentEmail: string
  propertyImages: string[]
  propertyBuyerName?: string
  propertyBuyerEmail?: string
  views?: number
  finalPrice?: string
  neiborhoodTrend?: string
  createdAt?: string
}

export type RecentlyPropertiesProps = {
  recentlyData: {
    recentlySoldProperties: RecentlyProperties[]
    recentlyAddedProperties: RecentlyProperties[]
  }
}

const RecentlyProperties = ({ recentlyData }: RecentlyPropertiesProps) => {
  const { recentlySoldProperties = [], recentlyAddedProperties = [] } =
    recentlyData

  return (
    <main className='card-wrapper'>
      {recentlySoldProperties.length > 0 ? (
        <div className='property-list'>
          <div className='card-header'>
            <h1>Recently Sold Properties</h1>
            <Link href='/admin/properties/view-all?type=recentlySold'>
              <p>View all</p>
            </Link>
          </div>
          <span className='card-title'>
            <h1>Property</h1>
            <h1>Client</h1>
          </span>
          {recentlySoldProperties.map((soldProperty) => (
            <div className='property-item' key={soldProperty.propertyId}>
              <div className='property-details'>
                <img
                  src={soldProperty.propertyImages[0]}
                  alt={soldProperty.propertyTitle}
                  className='property-image'
                />
                <div className='property-info'>
                  <Link href={`/admin/properties/${soldProperty.propertyId}`}>
                    <h4 className='property-name'>
                      {soldProperty.propertyTitle}
                    </h4>
                  </Link>
                  <span>
                    <CiLocationOn color='rgba(255, 255, 255, 0.5)' size={15} />
                    <p className='property-location'>
                      {soldProperty.propertyAddress}
                    </p>
                  </span>
                </div>
              </div>
              <div className='client-details'>
                <p className='client-name'>{soldProperty.propertyBuyerName}</p>
                <p className='client-email'>
                  {soldProperty.propertyBuyerEmail}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        'No properties sold recently'
      )}

      {recentlyAddedProperties.length > 0 ? (
        <div className='property-list'>
          <div className='card-header'>
            <h1>Recently added properties</h1>
            <Link href='/admin/properties/view-all?type=recentlyAdded'>
              <p>View all</p>
            </Link>
          </div>
          <span className='card-title'>
            <h1>Property</h1>
            <h1>Listing Agent</h1>
          </span>
          {recentlyAddedProperties.map((addedProperty) => (
            <div className='property-item' key={addedProperty.propertyId}>
              <div className='property-details'>
                <img
                  src={addedProperty.propertyImages[0]}
                  alt={addedProperty.propertyTitle}
                  className='property-image'
                />
                <div className='property-info'>
                  <Link href={`/admin/properties/${addedProperty.propertyId}`}>
                    <h4 className='property-name'>
                      {addedProperty.propertyTitle}
                    </h4>
                  </Link>
                  <span>
                    <CiLocationOn color='rgba(255, 255, 255, 0.5)' size={15} />
                    <p className='property-location'>
                      {addedProperty.propertyAddress}
                    </p>
                  </span>
                </div>
              </div>
              <div className='client-details'>
                <p className='client-name'>{addedProperty.listingAgentName}</p>
                <p className='client-email'>
                  {addedProperty.listingAgentEmail}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        'No properties added recently'
      )}
    </main>
  )
}

export default RecentlyProperties
