// src/app/fetchProperties.ts
import { PropertyFilters } from './Types/property/filter'

export const fetchProperties = async (filters?: PropertyFilters) => {
  const queryString = filters
    ? new URLSearchParams(filters as Record<string, string>).toString()
    : ''

  const response = await fetch(
    `https://globalpropertyapi.com/property?${queryString}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    },
  )

  const contentType = response.headers.get('content-type')
  if (!response.ok) {
    const text = await response.text()
    console.error(`Error fetching properties: ${response.status} - ${text}`)
    throw new Error(`Failed to fetch properties: ${response.status}`)
  }

  if (contentType && contentType.includes('application/json')) {
    return response.json()
  } else {
    const text = await response.text()
    console.error(`Unexpected content type: ${contentType}, response: ${text}`)
    throw new Error('Expected JSON response but received something else.')
  }
}
