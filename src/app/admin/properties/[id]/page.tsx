'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { PropertyListTableTypes } from '../../../components/ProperTyListTable/PropertyListTable'
import './page.scss'
import PropertyDetails from '../../../components/PropertyDetail/PropertyDetail'
import { adminProperties } from '../data'

const EditProperty: React.FC = () => {
  const params = useParams()
  const { id } = params
  const [property, setProperty] = useState<PropertyListTableTypes | null>(null)

  useEffect(() => {
    if (id) {
      const found = adminProperties.find((p) => p.propertyId === id)
      if (found) {
        setProperty(found)
      } else {
        console.log('Property not found')
      }
    }
  }, [id])

  return <PropertyDetails property={property} />
}

export default EditProperty
