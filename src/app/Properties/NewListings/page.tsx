'use client'
import React, { useState } from 'react'
import { fakeDataProperties } from '@/app/Utils/fakeDataProperties/fakeDataProperties'
import './NewListings.scss'

const NewListingspage = () => {
  const [filter, setFilter] = useState('last_uploaded')
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 6 // Number of properties per page

  const filteredProperties = fakeDataProperties.sort((a, b) => {
    return a.property_id.localeCompare(b.property_id)
  })

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
    <div className='newListingWrapper'>
      <div className='wrapper-assit'>
        {/* Header with title */}
        <div className='header-title'>
          <h2>New Listings</h2>
        </div>

        <header className='newListingsHeader'>
          <div className='filterDropdown'>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value='last_uploaded'>Last uploaded</option>
              <option value='last_3_days'>Last 3 days</option>
              <option value='last_week'>Last week</option>
              <option value='last_month'>Last month</option>
            </select>
          </div>
        </header>

        <div className='listingsGrid'>
          {currentProperties.map((property, index) => (
            <div
              key={`${property.property_id}-${index}`}
              className='listingCard'
            >
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
      </div>
    </div>
  )
}

export default NewListingspage
