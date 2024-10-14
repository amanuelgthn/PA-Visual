import React, { useEffect, useState } from 'react'
import './HighlightedPoperties.scss'
import { Property } from '@/app/Types/property/property'
import HighLightedPropertiesCard from './HighLightedPropertiesCard/HighLightedPropertiesCard'

type HighlightedPropertiesProps = { properties: Property[] }

const HighlightedProperties = ({ properties }: HighlightedPropertiesProps) => {
  const [activeButtonType, setActiveButtonType] =
    useState<string>('Luxury villa')
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const filteredData = properties.filter(
      (property) => property.property_type === activeButtonType,
    )
    setFilteredProperties(filteredData)
    setCurrentPage(0)
  }, [activeButtonType, properties])

  const toggleButton = (label: string) => {
    setActiveButtonType(label)
  }

  const propertiesToShow = () => {
    const startIndex = currentPage * 2
    return filteredProperties.slice(startIndex, startIndex + 2)
  }

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(Math.ceil(filteredProperties.length / 2) - 1, prev + 1),
    )
  }

  useEffect(() => {
    console.log('filteredProperties', filteredProperties)
  })
  useEffect(() => {
    console.log('propertiestoshow', propertiesToShow())
  })

  return (
    <div className='highlightedPoperties-container'>
      <h1>HIGHLIGHTED PROPERTIES</h1>
      <div className='buttons-container'>
        {['Luxury villa', 'Penthouse', 'House'].map((label, index) => (
          <button
            key={index}
            className={`highlightedPoperties-button ${activeButtonType === label ? 'active' : ''}`}
            onClick={() => toggleButton(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className='prev-next-buttons-container'>
        <span>
          <button onClick={handlePrevious} disabled={currentPage === 0}>
            PREVIOUS
          </button>
          <p>|</p>
          <button
            onClick={handleNext}
            disabled={
              currentPage >= Math.ceil(filteredProperties.length / 2) - 1
            }
          >
            NEXT
          </button>
        </span>
      </div>
      <div className='highlightedPoperties-cards-container'>
        {propertiesToShow().map((property, index) => (
          <HighLightedPropertiesCard property={property} key={index} />
        ))}
      </div>
    </div>
  )
}

export default HighlightedProperties
