'use client'
import React, { useState, useCallback } from 'react'
import './SavedProperties.scss'
import { fakeDataProperties } from '@/app/Utils/fakeDataProperties/fakeDataProperties'
import { FaArrowLeft, FaHeart, FaTimes } from 'react-icons/fa'
import { Property } from '@/app/Types/property/property'
import Link from 'next/link'

const SavedPropertiesPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('last_uploaded')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const propertiesPerPage = 6 // Number of properties per page

  // Utility function to filter saved properties by time
  const filterSavedPropertiesByTime = useCallback(
    (properties: Property[], filter: string) => {
      const now = new Date()
      switch (filter) {
        case 'last_3_days':
          return properties.filter((property) => {
            const date = new Date(
              property.status?.statusHistory?.[0]?.created_at || '',
            )
            return (now.getTime() - date.getTime()) / (1000 * 3600 * 24) <= 3
          })
        case 'last_week':
          return properties.filter((property) => {
            const date = new Date(
              property.status?.statusHistory?.[0]?.created_at || '',
            )
            return (now.getTime() - date.getTime()) / (1000 * 3600 * 24) <= 7
          })
        case 'last_month':
          return properties.filter((property) => {
            const date = new Date(
              property.status?.statusHistory?.[0]?.created_at || '',
            )
            return (now.getTime() - date.getTime()) / (1000 * 3600 * 24) <= 30
          })
        default:
          return properties
      }
    },
    [],
  )

  // Apply the filter on properties
  const filteredProperties = filterSavedPropertiesByTime(
    fakeDataProperties as Property[], // Replace with your saved properties data
    filter,
  )

  // Get the current properties based on the current page
  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty,
  )

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  // Handle previous/next buttons
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className='savedPropertiesWrapper'>
      <div className='wrapper-assit'>
        {/* Header with title */}
        <div className='header-title'>
          <h2>Saved Listings</h2>
          <p>
            Rediscover your top picks and take the next step towards your dream
            home.
          </p>
        </div>

        <header className='savedPropertiesHeader'>
          <div className='filterDropdown'>
            <label htmlFor='filter' className='sr-only'>
              Filter listings by time
            </label>
            <select
              id='filter'
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value='last_uploaded'>Last uploaded</option>
              <option value='last_3_days'>Last 3 days</option>
              <option value='last_week'>Last week</option>
              <option value='last_month'>Last month</option>
            </select>
          </div>
        </header>

        <div className='listingsGrid'>
          {currentProperties.map((property: Property) => (
            <div key={property.property_id} className='savedListingCard'>
              <div className='cardIcons'>
                {/* Love/Save Icon */}
                <div className='savedBadge'>
                  <FaHeart className='heartIcon' />
                  <span>Saved</span>
                </div>
                {/* Remove Icon */}
                <FaTimes className='removeIcon' />
              </div>

              <img
                src={property.primaryImage}
                alt={property.property_title}
                className='listingImage'
              />
              <div className='listingDetails'>
                <h3>{property.property_title}</h3>
                <h5>
                  {property.city}, {property.country}
                </h5>
                <p>
                  <span>${property.listing_price.toLocaleString()}</span>
                  <span>{property.num_bedrooms} Bedrooms</span>
                  <span>{property.num_bathrooms} Bathrooms</span>
                </p>
                <button className='circleButton'>+</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Component */}
        <div className='pagination'>
          <button onClick={goToPreviousPage} className='prev'>
            «
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={goToNextPage} className='next'>
            »
          </button>
        </div>

        {/* Back to Properties */}
        <div className='back-to-properties'>
          <Link href='/Properties' className='Link'>
            <FaArrowLeft className='icon' />
            <span>Back to Properties</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SavedPropertiesPage
