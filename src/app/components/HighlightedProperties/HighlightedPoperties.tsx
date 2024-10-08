import './HighlightedPoperties.scss'
import { Property } from '@/app/Types/property/property'
import HighLightedPropertiesCard from './HighLightedPropertiesCard/HighLightedPropertiesCard'
import { useEffect, useState } from 'react'

type HighlightedPopertiesProps = { properties: Property[] }

const HighlightedPoperties = ({ properties }: HighlightedPopertiesProps) => {
  const [activeButtonType, setActiveButtonType] =
    useState<string>('Luxury villa')
  const [, setStateProperties] = useState<Property[]>(properties)
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(properties)

  useEffect(() => {
    if (properties) {
      setStateProperties(properties)
    }
  }, [properties])

  const toggleButton = (label: string) => {
    setActiveButtonType(label)
  }

  useEffect(() => {
    setFilteredProperties(properties)
  }, [properties])

  useEffect(() => {
    const filteredData = properties.filter(
      (property) => property.property_type === activeButtonType,
    )
    setFilteredProperties(filteredData)
  }, [activeButtonType, properties])

  return (
    <div className='highlightedPoperties-container'>
      <h1>HIGHLIGHTED PROPERTIES</h1>
      <div className='buttons-container'>
        {['Luxury villa', 'Penthouse', 'House'].map((label, index) => (
          <button
            key={index}
            className={`highlightedPoperties-button ${activeButtonType === label ? 'active' : ''}`}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              toggleButton(e.currentTarget.textContent || '')
              console.log(label)
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <div className='prev-next-buttons-container'>
        <span>
          <button>PEEVIOUS</button>
          <p>|</p>
          <button>NEXT</button>
        </span>
      </div>
      <div className='highlightedPoperties-cards-container'>
        {filteredProperties.map((property, index) => (
          <HighLightedPropertiesCard property={property} key={index} />
        ))}
      </div>
    </div>
  )
}

export default HighlightedPoperties
