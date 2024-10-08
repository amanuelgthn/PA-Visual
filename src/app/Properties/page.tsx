'use client'
import React from 'react'
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
      country: 'USA',
      city: 'Los Angeles',
      street_address: '123 Main St',
      property_type: 'Luxury villa',
      num_bedrooms: 4,
      num_bathrooms: 3,
      property_sqft: 3000,
      primaryImage:
        'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalImages: [
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://media.istockphoto.com/id/1273760652/fr/photo/maison-de-bonne-taille-avec-le-garage-de-deux-voitures.jpg?s=1024x1024&w=is&k=20&c=zvHce16TPszCNKUsXFi04Ac2NmW6W6G98O2ePZBt0WI=',
        },
      ],
      additionalFeatures: {
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
      status: {
        available: true,
        sold: false,
        currentStatus: 'available',
        statusHistory: [
          {
            status_id: 1,
            status: 'listed',
            created_at: new Date('2023-01-01'),
            updated_at: new Date('2023-01-02'),
          },
        ],
      },
      promotion: {
        promotion_id: 1,
        promotion_name: 'forSale',
        start_date: new Date('2023-01-01'),
        end_date: new Date('2023-01-31'),
      },
      features: [
        {
          feature_id: 1,
          amenity: 'swimming pool',
          utility_included: 'water',
          appliance_included: 'refrigerator',
          renovations_upgrades: 'new kitchen',
        },
      ],
      additionalFeaturesDetails: {
        id: 1,
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
    },
    {
      property_id: '001',
      property_title: 'Luxury Villa in the Hills',
      listing_price: 750000,
      country: 'USA',
      property_sqft: 3000,
      city: 'Los Angeles',
      street_address: '123 Main St',
      property_type: 'Luxury villa',
      num_bedrooms: 4,
      num_bathrooms: 3,
      primaryImage:
        'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalImages: [
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://media.istockphoto.com/id/1273760652/fr/photo/maison-de-bonne-taille-avec-le-garage-de-deux-voitures.jpg?s=1024x1024&w=is&k=20&c=zvHce16TPszCNKUsXFi04Ac2NmW6W6G98O2ePZBt0WI=',
        },
      ],
      additionalFeatures: {
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
      status: {
        available: true,
        sold: false,
        currentStatus: 'available',
        statusHistory: [
          {
            status_id: 1,
            status: 'listed',
            created_at: new Date('2023-01-01'),
            updated_at: new Date('2023-01-02'),
          },
        ],
      },
      promotion: {
        promotion_id: 1,
        promotion_name: 'forSale',
        start_date: new Date('2023-01-01'),
        end_date: new Date('2023-01-31'),
      },
      features: [
        {
          feature_id: 1,
          amenity: 'swimming pool',
          utility_included: 'water',
          appliance_included: 'refrigerator',
          renovations_upgrades: 'new kitchen',
        },
      ],
      additionalFeaturesDetails: {
        id: 1,
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
    },
    {
      property_id: '002',
      property_title: 'Modern Mansion in the City',
      listing_price: 850000,
      street_address: '123 Main St',
      country: 'Canada',
      property_type: 'Penthouse',
      property_sqft: 2500,
      city: 'Toronto',
      num_bedrooms: 5,
      num_bathrooms: 4,
      primaryImage:
        'https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalImages: [
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
      additionalFeatures: {
        has_gym: false,
        has_pool: true,
        has_garden: false,
        has_garage: true,
        has_steam: true,
        has_jacuzzi: false,
        has_sauna: true,
        has_balcony: false,
      },
      status: {
        available: false,
        sold: true,
        currentStatus: 'sold',
        statusHistory: [
          {
            status_id: 2,
            status: 'sold',
            created_at: new Date('2023-02-01'),
            updated_at: new Date('2023-02-02'),
          },
        ],
      },
      promotion: {
        promotion_id: 2,
        promotion_name: 'forSale',
        start_date: new Date('2023-02-01'),
        end_date: new Date('2023-02-28'),
      },
      features: [
        {
          feature_id: 2,
          amenity: 'gym',
          utility_included: 'electricity',
          appliance_included: 'oven',
          renovations_upgrades: 'new bathroom',
        },
      ],
      additionalFeaturesDetails: {
        id: 2,
        has_gym: false,
        has_pool: true,
        has_garden: false,
        has_garage: true,
        has_steam: true,
        has_jacuzzi: false,
        has_sauna: true,
        has_balcony: false,
      },
    },
    {
      property_id: '001',
      property_title: 'Luxury Villa in the Hills',
      listing_price: 750000,
      country: 'USA',
      street_address: '456 Oak St',
      city: 'Los Angeles',
      property_type: 'House',
      property_sqft: 3000,
      num_bedrooms: 4,
      num_bathrooms: 3,
      primaryImage:
        'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalImages: [
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://media.istockphoto.com/id/1273760652/fr/photo/maison-de-bonne-taille-avec-le-garage-de-deux-voitures.jpg?s=1024x1024&w=is&k=20&c=zvHce16TPszCNKUsXFi04Ac2NmW6W6G98O2ePZBt0WI=',
        },
      ],
      additionalFeatures: {
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
      status: {
        available: true,
        sold: false,
        currentStatus: 'available',
        statusHistory: [
          {
            status_id: 1,
            status: 'listed',
            created_at: new Date('2023-01-01'),
            updated_at: new Date('2023-01-02'),
          },
        ],
      },
      promotion: {
        promotion_id: 1,
        promotion_name: 'forSale',
        start_date: new Date('2023-01-01'),
        end_date: new Date('2023-01-31'),
      },
      features: [
        {
          feature_id: 1,
          amenity: 'swimming pool',
          utility_included: 'water',
          appliance_included: 'refrigerator',
          renovations_upgrades: 'new kitchen',
        },
      ],
      additionalFeaturesDetails: {
        id: 1,
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
    },
    {
      property_id: '002',
      property_title: 'Modern Mansion in the City',
      listing_price: 850000,
      country: 'Canada',
      street_address: '123 Main St',
      city: 'Toronto',
      property_type: 'Penthouse',
      property_sqft: 2500,
      num_bedrooms: 5,
      num_bathrooms: 4,
      primaryImage:
        'https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalImages: [
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
      additionalFeatures: {
        has_gym: false,
        has_pool: true,
        has_garden: false,
        has_garage: true,
        has_steam: true,
        has_jacuzzi: false,
        has_sauna: true,
        has_balcony: false,
      },
      status: {
        available: false,
        sold: true,
        currentStatus: 'sold',
        statusHistory: [
          {
            status_id: 2,
            status: 'sold',
            created_at: new Date('2023-02-01'),
            updated_at: new Date('2023-02-02'),
          },
        ],
      },
      promotion: {
        promotion_id: 2,
        promotion_name: 'forSale',
        start_date: new Date('2023-02-01'),
        end_date: new Date('2023-02-28'),
      },
      features: [
        {
          feature_id: 2,
          amenity: 'gym',
          utility_included: 'electricity',
          appliance_included: 'oven',
          renovations_upgrades: 'new bathroom',
        },
      ],
      additionalFeaturesDetails: {
        id: 2,
        has_gym: false,
        has_pool: true,
        has_garden: false,
        has_garage: true,
        has_steam: true,
        has_jacuzzi: false,
        has_sauna: true,
        has_balcony: false,
      },
    },
    {
      property_id: '001',
      property_title: 'Luxury Villa in the Hills',
      listing_price: 750000,
      property_sqft: 3000,
      country: 'USA',
      city: 'Los Angeles',
      street_address: '123 Main St',
      property_type: 'House',
      num_bedrooms: 4,
      num_bathrooms: 3,
      primaryImage:
        'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalImages: [
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://media.istockphoto.com/id/1273760652/fr/photo/maison-de-bonne-taille-avec-le-garage-de-deux-voitures.jpg?s=1024x1024&w=is&k=20&c=zvHce16TPszCNKUsXFi04Ac2NmW6W6G98O2ePZBt0WI=',
        },
      ],
      additionalFeatures: {
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
      status: {
        available: true,
        sold: false,
        currentStatus: 'available',
        statusHistory: [
          {
            status_id: 1,
            status: 'listed',
            created_at: new Date('2023-01-01'),
            updated_at: new Date('2023-01-02'),
          },
        ],
      },
      promotion: {
        promotion_id: 1,
        promotion_name: 'forSale',
        start_date: new Date('2023-01-01'),
        end_date: new Date('2023-01-31'),
      },
      features: [
        {
          feature_id: 1,
          amenity: 'swimming pool',
          utility_included: 'water',
          appliance_included: 'refrigerator',
          renovations_upgrades: 'new kitchen',
        },
      ],
      additionalFeaturesDetails: {
        id: 1,
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
    },
    {
      property_id: '001',
      property_title: 'Luxury Villa in the Hills',
      listing_price: 750000,
      country: 'USA',
      city: 'Los Angeles',
      property_sqft: 3000,
      street_address: '123 Main St',
      property_type: 'Luxury villa',
      num_bedrooms: 4,
      num_bathrooms: 3,
      primaryImage:
        'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalImages: [
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://media.istockphoto.com/id/1273760652/fr/photo/maison-de-bonne-taille-avec-le-garage-de-deux-voitures.jpg?s=1024x1024&w=is&k=20&c=zvHce16TPszCNKUsXFi04Ac2NmW6W6G98O2ePZBt0WI=',
        },
      ],
      additionalFeatures: {
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
      status: {
        available: true,
        sold: false,
        currentStatus: 'available',
        statusHistory: [
          {
            status_id: 1,
            status: 'listed',
            created_at: new Date('2023-01-01'),
            updated_at: new Date('2023-01-02'),
          },
        ],
      },
      promotion: {
        promotion_id: 1,
        promotion_name: 'forSale',
        start_date: new Date('2023-01-01'),
        end_date: new Date('2023-01-31'),
      },
      features: [
        {
          feature_id: 1,
          amenity: 'swimming pool',
          utility_included: 'water',
          appliance_included: 'refrigerator',
          renovations_upgrades: 'new kitchen',
        },
      ],
      additionalFeaturesDetails: {
        id: 1,
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
    },
    {
      property_id: '002',
      property_title: 'Modern Mansion in the City',
      listing_price: 850000,
      street_address: '123 Main St',
      country: 'Canada',
      property_sqft: 2500,
      property_type: 'Penthouse',
      city: 'Toronto',
      num_bedrooms: 5,
      num_bathrooms: 4,
      primaryImage:
        'https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalImages: [
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
      additionalFeatures: {
        has_gym: false,
        has_pool: true,
        has_garden: false,
        has_garage: true,
        has_steam: true,
        has_jacuzzi: false,
        has_sauna: true,
        has_balcony: false,
      },
      status: {
        available: false,
        sold: true,
        currentStatus: 'sold',
        statusHistory: [
          {
            status_id: 2,
            status: 'sold',
            created_at: new Date('2023-02-01'),
            updated_at: new Date('2023-02-02'),
          },
        ],
      },
      promotion: {
        promotion_id: 2,
        promotion_name: 'forSale',
        start_date: new Date('2023-02-01'),
        end_date: new Date('2023-02-28'),
      },
      features: [
        {
          feature_id: 2,
          amenity: 'gym',
          utility_included: 'electricity',
          appliance_included: 'oven',
          renovations_upgrades: 'new bathroom',
        },
      ],
      additionalFeaturesDetails: {
        id: 2,
        has_gym: false,
        has_pool: true,
        has_garden: false,
        has_garage: true,
        has_steam: true,
        has_jacuzzi: false,
        has_sauna: true,
        has_balcony: false,
      },
    },
    {
      property_id: '001',
      property_title: 'Luxury Villa in the Hills',
      listing_price: 750000,
      country: 'USA',
      property_sqft: 3000,
      street_address: '456 Oak St',
      city: 'Los Angeles',
      property_type: 'House',
      num_bedrooms: 4,
      num_bathrooms: 3,
      primaryImage:
        'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalImages: [
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://media.istockphoto.com/id/1273760652/fr/photo/maison-de-bonne-taille-avec-le-garage-de-deux-voitures.jpg?s=1024x1024&w=is&k=20&c=zvHce16TPszCNKUsXFi04Ac2NmW6W6G98O2ePZBt0WI=',
        },
      ],
      additionalFeatures: {
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
      status: {
        available: true,
        sold: false,
        currentStatus: 'available',
        statusHistory: [
          {
            status_id: 1,
            status: 'listed',
            created_at: new Date('2023-01-01'),
            updated_at: new Date('2023-01-02'),
          },
        ],
      },
      promotion: {
        promotion_id: 1,
        promotion_name: 'forSale',
        start_date: new Date('2023-01-01'),
        end_date: new Date('2023-01-31'),
      },
      features: [
        {
          feature_id: 1,
          amenity: 'swimming pool',
          utility_included: 'water',
          appliance_included: 'refrigerator',
          renovations_upgrades: 'new kitchen',
        },
      ],
      additionalFeaturesDetails: {
        id: 1,
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
    },
    {
      property_id: '002',
      property_title: 'Modern Mansion in the City',
      listing_price: 850000,
      country: 'Canada',
      property_sqft: 2500,
      street_address: '123 Main St',
      city: 'Toronto',
      property_type: 'Penthouse',
      num_bedrooms: 5,
      num_bathrooms: 4,
      primaryImage:
        'https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalImages: [
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146768851-eda79da39897?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
      additionalFeatures: {
        has_gym: false,
        has_pool: true,
        has_garden: false,
        has_garage: true,
        has_steam: true,
        has_jacuzzi: false,
        has_sauna: true,
        has_balcony: false,
      },
      status: {
        available: false,
        sold: true,
        currentStatus: 'sold',
        statusHistory: [
          {
            status_id: 2,
            status: 'sold',
            created_at: new Date('2023-02-01'),
            updated_at: new Date('2023-02-02'),
          },
        ],
      },
      promotion: {
        promotion_id: 2,
        promotion_name: 'forSale',
        start_date: new Date('2023-02-01'),
        end_date: new Date('2023-02-28'),
      },
      features: [
        {
          feature_id: 2,
          amenity: 'gym',
          utility_included: 'electricity',
          appliance_included: 'oven',
          renovations_upgrades: 'new bathroom',
        },
      ],
      additionalFeaturesDetails: {
        id: 2,
        has_gym: false,
        has_pool: true,
        has_garden: false,
        has_garage: true,
        has_steam: true,
        has_jacuzzi: false,
        has_sauna: true,
        has_balcony: false,
      },
    },
    {
      property_id: '001',
      property_title: 'Luxury Villa in the Hills',
      listing_price: 750000,
      country: 'USA',
      property_sqft: 3000,
      city: 'Los Angeles',
      street_address: '123 Main St',
      property_type: 'House',
      num_bedrooms: 4,
      num_bathrooms: 3,
      primaryImage:
        'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      additionalImages: [
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          base64Image:
            'https://media.istockphoto.com/id/1273760652/fr/photo/maison-de-bonne-taille-avec-le-garage-de-deux-voitures.jpg?s=1024x1024&w=is&k=20&c=zvHce16TPszCNKUsXFi04Ac2NmW6W6G98O2ePZBt0WI=',
        },
      ],
      additionalFeatures: {
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
      },
      status: {
        available: true,
        sold: false,
        currentStatus: 'available',
        statusHistory: [
          {
            status_id: 1,
            status: 'listed',
            created_at: new Date('2023-01-01'),
            updated_at: new Date('2023-01-02'),
          },
        ],
      },
      promotion: {
        promotion_id: 1,
        promotion_name: 'forSale',
        start_date: new Date('2023-01-01'),
        end_date: new Date('2023-01-31'),
      },
      features: [
        {
          feature_id: 1,
          amenity: 'swimming pool',
          utility_included: 'water',
          appliance_included: 'refrigerator',
          renovations_upgrades: 'new kitchen',
        },
      ],
      additionalFeaturesDetails: {
        id: 1,
        has_gym: true,
        has_pool: true,
        has_garden: true,
        has_garage: true,
        has_steam: false,
        has_jacuzzi: true,
        has_sauna: false,
        has_balcony: true,
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
  )
}

export default PropertiesPage
