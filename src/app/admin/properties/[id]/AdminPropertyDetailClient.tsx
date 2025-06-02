// app/admin/properties/[id]/PropertyEditorClient.tsx
'use client'

import React, { useEffect, useState } from 'react'

import PropertyDetails from '@/app/admin/components/PropertyDetail/PropertyDetail'
import { adminProperties } from '../data'
import { PropertyListTableTypes } from '../../components/ProperTyListTable/PropertyListTable'
// adjust import path to wherever your <PropertyDetails /> lives

export default function PropertyEditorClient({ id }: { id: string }) {
  const [property, setProperty] = useState<PropertyListTableTypes | null>(null)

  useEffect(() => {
    // Look up the property by its ID in the shared adminProperties array
    const found = adminProperties.find((p) => p.propertyId === id)

    if (found) {
      setProperty(found)
    } else {
      console.warn(`Property with ID ${id} not found.`)
    }
  }, [id])

  if (!property) {
    return <div>Loading or property not found…</div>
  }

  // Render your existing <PropertyDetails /> (or whatever detail component you have)
  return <PropertyDetails property={property} />
}
