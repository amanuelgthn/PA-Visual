'use client'
import React, { Suspense } from 'react'
// import { useSearchParams } from 'next/navigation'
import PropertiesFilter from '../components/PropertiesListings/PropertiesFilter/PropertiesFilter'
import PropertiesListingHeader from '../components/PropertiesListings/PropertiesListingHeader/PropertiesListingHeader/PropertiesListingHeader'
// import { fetchProperties, fetchPropertiesWithFilters } from '../GETproperty'
import { Property } from '../Types/property/property'
// import { PropertyFilters } from '../Types/property/filter'
import PropertiesCarousel from '../components/PopertiesCarousel/PropertiesCarousel'
import NewListingProperties from '../components/NewListingProperties/NewListingProperties'
// import { useQuery } from '@tanstack/react-query'
// import HighLightedPropertiesCard from '../components/HighlightedProperties/HighLightedPropertiesCard/HighLightedPropertiesCard'
import HighlightedPoperties from '../components/HighlightedProperties/HighlightedPoperties'
// import Spinner from '../components/Spiner/Spiner'

const PropertiesPage: React.FC = () => {
  // const searchParams = useSearchParams()
  // const [properties, setProperties] = useState<Property[]>([])

  // const filters: PropertyFilters = useMemo(
  //   () => ({
  //     minPrice: Number(searchParams.get('minPrice')) || undefined,
  //     maxPrice: Number(searchParams.get('maxPrice')) || undefined,
  //     country: searchParams.get('country') || undefined,
  //     propertyType: searchParams.get('propertyType') || undefined,
  //     minBedrooms: Number(searchParams.get('minBedrooms')) || undefined,
  //     maxBedrooms: Number(searchParams.get('maxBedrooms')) || undefined,
  //     minBathrooms: Number(searchParams.get('minBathrooms')) || undefined,
  //     maxBathrooms: Number(searchParams.get('maxBathrooms')) || undefined,
  //     has_gym: searchParams.get('has_gym') === 'true' || undefined,
  //     has_pool: searchParams.get('has_pool') === 'true' || undefined,
  //     has_garden: searchParams.get('has_garden') === 'true' || undefined,
  //     has_garage: searchParams.get('has_garage') === 'true' || undefined,
  //     has_steam: searchParams.get('has_steam') === 'true' || undefined,
  //     has_jacuzzi: searchParams.get('has_jacuzzi') === 'true' || undefined,
  //     has_sauna: searchParams.get('has_sauna') === 'true' || undefined,
  //     has_balcony: searchParams.get('has_balcony') === 'true' || undefined,
  //   }),
  //   [searchParams],
  // )

  // const fetchPropertiesData = useCallback(async () => {
  //   setIsLoading(true)
  //   setError(null)
  //   try {
  //     const hasFilters = Object.values(filters).some(
  //       (value) => value !== undefined,
  //     )
  //     const fetchedProperties = hasFilters
  //       ? await fetchProperties(filters)
  //       : await fetchProperties()
  //     setProperties(fetchedProperties)
  //   } catch (err) {
  //     setError('Failed to fetch properties. Please try again later.')
  //     console.error('Error fetching properties:', err)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }, [filters])

  // useEffect(() => {
  //   fetchPropertiesData()
  // }, [fetchPropertiesData])

  const fakeDataProperties: Property[] = [
    {
      property_id: '001',
      property_title: 'Luxury Villa in the Hills',
      listing_price: 750000,
      country: 'CountryName',
      city: 'CityName',
      street_address: '123 Luxury St',
      num_bedrooms: 5,
      num_bathrooms: 4,
      property_sqft: 3000,
      primaryImage: 'image1.jpg',
      additionalImages: [{ base64Image: 'base64EncodedString1' }],
      property_type: 'Villa',
      property_description: 'A beautiful luxury villa with stunning views.',
      taxes: 5000,
      insurance: 2000,
      additionalFeatures: {
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
      },
      property_specifications: [
        {
          year_built: { value: 2010, label: 'Year Built' },
          lot_size: { value: 5000, label: 'Lot Size (sqft)' },
          energy_rating: { value: 'A+', label: 'Energy Rating' },
          smart_system: { value: 'Smart Home', label: 'Smart System' },
          security_system: { value: '24/7 Security', label: 'Security System' },
          sustainability: { value: 'Eco-Friendly', label: 'Sustainability' },
          connectivity: { value: 'High-Speed Internet', label: 'Connectivity' },
          wellness_features: {
            value: 'Air Purifier, Spa',
            label: 'Wellness Features',
          },
        },
      ],
      status: {
        available: true,
        currentStatus: 'Available',
        statusHistory: [
          {
            status_id: 1,
            status: 'Listed',
            created_at: new Date('2023-01-01'),
            updated_at: new Date('2023-01-02'),
          },
        ],
      },
      promotion: {
        promotion_id: 101,
        promotion_name: 'featured',
        start_date: new Date('2023-02-01'),
        end_date: new Date('2023-03-01'),
      },
      features: [
        { feature_id: 1, amenity: 'Swimming Pool', utility_included: 'Water' },
        { feature_id: 2, appliance_included: 'Washer/Dryer' },
      ],
      additionalFeaturesDetails: {
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
      },
      unparalleledAmenities: {
        amenity: ['Infinity Pool', 'Private Cinema', 'Wine Cellar'],
      },
    },
  ]

  // const { data, isLoading } = useQuery({
  //   queryKey: ['properties', {}], // Pass filters here if needed
  //   queryFn: fetchPropertiesWithFilters,
  // })

  // useEffect(() => {
  //   if (data) {
  //     setProperties(data)
  //   }
  // }, [data])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <PropertiesListingHeader />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '60px',
            backgroundColor: 'rgba(42, 46, 48, 1)',
          }}
        >
          <PropertiesFilter />
          <PropertiesCarousel properties={fakeDataProperties} />
          <NewListingProperties properties={fakeDataProperties} />
          <HighlightedPoperties properties={fakeDataProperties} />
        </div>
      </div>
    </Suspense>
  )
}

export default PropertiesPage
