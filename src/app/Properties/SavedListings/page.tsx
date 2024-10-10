'use client'
import React, { useState, useCallback } from 'react'
import { fakeDataProperties } from '@/app/Utils/fakeDataProperties/fakeDataProperties'
import './SavedProperties.scss'
import Link from 'next/link'
import { FaArrowLeft, FaHeart, FaTimes } from 'react-icons/fa'
import { Property } from '@/app/Types/property/property'

const SavedPropertiespage = () => {
  const [savedProperties, setSavedProperties] =
    useState<Property[]>(fakeDataProperties)
  const [filter, setFilter] = useState('last_uploaded')
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 6 // Number of properties per page

  // Function to remove a property from the saved properties list
  const removeProperty = useCallback((propertyId: string) => {
    setSavedProperties((prevProperties) =>
      prevProperties.filter((property) => property.property_id !== propertyId),
    )
  }, [])

  // Utility function to filter properties based on time
  const filterPropertiesByTime = useCallback(
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
  const filteredProperties = filterPropertiesByTime(
    savedProperties.sort((a, b) => a.property_id.localeCompare(b.property_id)),
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

  // Change page - memoized with useCallback
  const paginate = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber)
  }, [])

  // Handle previous/next buttons - memoized with useCallback
  const goToPreviousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }, [currentPage])

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }, [currentPage, totalPages])

  return (
    <div className='savedPropertiesWrapper'>
      <div className='wrapper-assit'>
        <div className='header-title'>
          <h2>Saved Listings</h2>
          <p>
            Re-discover your top picks and take the next step towards your dream
            home.
          </p>
        </div>
        <div className='newListingsHeader'>
          <div className='filterDropdown'>
            <label htmlFor='filterSelect' className='sr-only'>
              Filter by time uploaded
            </label>
            <select
              id='filterSelect'
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value='last_uploaded'>Last uploaded</option>
              <option value='last_3_days'>Last 3 days</option>
              <option value='last_week'>Last week</option>
              <option value='last_month'>Last month</option>
            </select>
          </div>
        </div>

        <div className='listingsGrid'>
          {currentProperties.map((property, index) => (
            <div
              key={`${property.property_id}-${index}`}
              className='listingCard'
            >
              <div className='cardActions'>
                <div className='saveToFavorites'>
                  <FaHeart className='loveIcon' />
                  <span>Save to Favorites</span>
                </div>
                <FaTimes
                  className='removeIcon'
                  onClick={() => removeProperty(property.property_id)}
                />
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
                <Link href={`/Properties/${property.property_id}`}>
                  <button className='circleButton'>+</button>
                </Link>
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

        {/* Back to properties */}
        <div className='back-to-properties'>
          <Link href='/profileSettings' className='Link'>
            <FaArrowLeft className='icon' />
            <span>GO BACK</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SavedPropertiespage
