import React from 'react'
import './PropertiesListingHeader.scss'

const PropertiesListingHeader = () => {
  return (
    <header className='properties-listing-header'>
      <video
        autoPlay
        loop
        muted
        data-testid='properties-listing-header-video'
        className='properties-listing-header-video'
        src='/videos/properties-listing-video.mp4'
      />
      <div className='overlay'></div>
      <div className='overlay-text'>
        <h1>LUXURY PROPERTIES</h1>
        <span>
          <p>
            Welcome to GLOBAL PROPERTY S exclusive collection of luxury
            properties. Whether you are looking for your dream home, a vacation
            retreat, or a lucrative investment opportunity, our curated listings
            offer a diverse range of options to suit your needs. Explore our
            properties and find the perfect match for your lifestyle and
            preferences.
          </p>
        </span>
      </div>
    </header>
  )
}

export default PropertiesListingHeader
