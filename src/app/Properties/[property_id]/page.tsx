'use client'
import PropertyDescription from '@/app/components/PropertyDescription/PropertyDescription'
import { Property } from '@/app/Types/property/property'
import React, { useEffect, useMemo, useState } from 'react'

type Params = {
  params: {
    property_id: string
  }
}

const PropertyDecription = ({ params }: Params) => {
  const { property_id } = params
  const [currentProperty, setCurrentProperty] = useState<Property | null>(null)

  const fakeDataProperties: Property[] = useMemo(
    () => [
      {
        property_id: '001',
        insurance: 1000,
        taxes: 6000,
        property_title: 'Luxury Villa in the Hills',
        listing_price: 750000,
        property_sqft: 3000,
        country: 'USA',
        city: 'Los Angeles',
        street_address: '123 Main St',
        property_type: 'Luxury villa',
        property_specifications: [
          {
            year_built: {
              value: 2005,
              label: 'Year Built',
            },
            lot_size: {
              value: 4500,
              label: 'Lot Size (sqft)',
            },
            energy_rating: {
              value: 'A+',
              label: 'Energy Rating',
            },
            smart_system: {
              value: 'Yes',
              label: 'Smart System',
            },
            security_system: {
              value: 'Advanced',
              label: 'Security System',
            },
            sustainability: {
              value: 'High',
              label: 'Sustainability',
            },
            connectivity: {
              value: 'High',
              label: 'Connectivity',
            },
            wellness_features: {
              value: 'Yes',
              label: 'Wellness Features',
            },
          },
        ],

        property_description:
          'This is a beautiful luxury villa in the hills of Los Angeles. It has a beautiful view of the city and is perfect for those who want to live in luxury.',
        unparalleledAmenities: {
          amenity: [
            'Quantum Ai powered home managment',
            'Self  cleaning infinity pool',
            'Vertical hydroponic garden',
            '4D holographic entertainment room',
            'AI sommelier assisted wine cellar',
            'Anti-gravity yoga studio',
            'Eco- friendly autonomous parking',
            'Photovoltaic glass exterior',
          ],
        },

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
        property_title: 'Luxury Villa in the Hills',
        listing_price: 750000,
        insurance: 2000,
        taxes: 1500,
        country: 'USA',
        property_sqft: 3000,
        city: 'Los Angeles',
        property_specifications: [
          {
            year_built: {
              value: 2005,
              label: 'Year Built',
            },
            lot_size: {
              value: 4500,
              label: 'Lot Size (sqft)',
            },
            energy_rating: {
              value: 'A+',
              label: 'Energy Rating',
            },
            smart_system: {
              value: 'Yes',
              label: 'Smart System',
            },
            security_system: {
              value: 'Advanced',
              label: 'Security System',
            },
            sustainability: {
              value: 'High',
              label: 'Sustainability',
            },
            connectivity: {
              value: 'High',
              label: 'Connectivity',
            },
            wellness_features: {
              value: 'Yes',
              label: 'Wellness Features',
            },
          },
        ],
        property_description:
          'This is a beautiful luxury villa in the hills of Los Angeles. It has a beautiful view of the city and is perfect for those who want to live in luxury.',
        street_address: '123 Main St',
        property_type: 'Luxury villa',
        num_bedrooms: 4,
        num_bathrooms: 3,
        unparalleledAmenities: {
          amenity: [
            'Quantum Ai powered home managment',
            'Self  cleaning infinity pool',
            'Vertical hydroponic garden',
            '4D holographic entertainment room',
            'AI sommelier assisted wine cellar',
            'Anti-gravity yoga studio',
            'Eco- friendly autonomous parking',
            'Photovoltaic glass exterior',
          ],
        },
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
        property_id: '003',
        insurance: 2000,
        taxes: 1000,
        property_title: 'Modern Mansion in the City',
        listing_price: 850000,
        street_address: '123 Main St',
        property_specifications: [
          {
            year_built: {
              value: 2005,
              label: 'Year Built',
            },
            lot_size: {
              value: 4500,
              label: 'Lot Size (sqft)',
            },
            energy_rating: {
              value: 'A+',
              label: 'Energy Rating',
            },
            smart_system: {
              value: 'Yes',
              label: 'Smart System',
            },
            security_system: {
              value: 'Advanced',
              label: 'Security System',
            },
            sustainability: {
              value: 'High',
              label: 'Sustainability',
            },
            connectivity: {
              value: 'High',
              label: 'Connectivity',
            },
            wellness_features: {
              value: 'Yes',
              label: 'Wellness Features',
            },
          },
        ],
        country: 'Canada',
        property_description:
          'This is a beautiful modern mansion in the city. It has a beautiful view of the city and is perfect for those who want to live in luxury.',
        property_sqft: 3000,
        unparalleledAmenities: {
          amenity: [
            'Quantum Ai powered home managment',
            'Self  cleaning infinity pool',
            'Vertical hydroponic garden',
            '4D holographic entertainment room',
            'AI sommelier assisted wine cellar',
            'Anti-gravity yoga studio',
            'Eco- friendly autonomous parking',
            'Photovoltaic glass exterior',
          ],
        },
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
        property_id: '004',
        insurance: 2000,
        taxes: 1000,
        property_title: 'Luxury Villa in the Hills',
        listing_price: 750000,
        country: 'USA',
        property_specifications: [
          {
            year_built: {
              value: 2005,
              label: 'Year Built',
            },
            lot_size: {
              value: 4500,
              label: 'Lot Size (sqft)',
            },
            energy_rating: {
              value: 'A+',
              label: 'Energy Rating',
            },
            smart_system: {
              value: 'Yes',
              label: 'Smart System',
            },
            security_system: {
              value: 'Advanced',
              label: 'Security System',
            },
            sustainability: {
              value: 'High',
              label: 'Sustainability',
            },
            connectivity: {
              value: 'High',
              label: 'Connectivity',
            },
            wellness_features: {
              value: 'Yes',
              label: 'Wellness Features',
            },
          },
        ],
        property_description:
          'This is a beautiful luxury villa in the hills of Los Angeles. It has a beautiful view of the city and is perfect for those who want to live in luxury.',
        street_address: '456 Oak St',
        city: 'Los Angeles',
        property_type: 'House',
        unparalleledAmenities: {
          amenity: [
            'Quantum Ai powered home managment',
            'Self  cleaning infinity pool',
            'Vertical hydroponic garden',
            '4D holographic entertainment room',
            'AI sommelier assisted wine cellar',
            'Anti-gravity yoga studio',
            'Eco- friendly autonomous parking',
            'Photovoltaic glass exterior',
          ],
        },
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
        property_id: '005',
        insurance: 2000,
        taxes: 3000,
        property_title: 'Modern Mansion in the City',
        listing_price: 850000,
        country: 'Canada',
        property_sqft: 3000,
        property_specifications: [
          {
            year_built: {
              value: 2005,
              label: 'Year Built',
            },
            lot_size: {
              value: 4500,
              label: 'Lot Size (sqft)',
            },
            energy_rating: {
              value: 'A+',
              label: 'Energy Rating',
            },
            smart_system: {
              value: 'Yes',
              label: 'Smart System',
            },
            security_system: {
              value: 'Advanced',
              label: 'Security System',
            },
            sustainability: {
              value: 'High',
              label: 'Sustainability',
            },
            connectivity: {
              value: 'High',
              label: 'Connectivity',
            },
            wellness_features: {
              value: 'Yes',
              label: 'Wellness Features',
            },
          },
        ],
        property_description:
          'This is a beautiful modern mansion in the city. It has a beautiful view of the city and is perfect for those who want to live in luxury.',
        unparalleledAmenities: {
          amenity: [
            'Quantum Ai powered home managment',
            'Self  cleaning infinity pool',
            'Vertical hydroponic garden',
            '4D holographic entertainment room',
            'AI sommelier assisted wine cellar',
            'Anti-gravity yoga studio',
            'Eco- friendly autonomous parking',
            'Photovoltaic glass exterior',
          ],
        },
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
        property_id: '006',
        insurance: 2000,
        taxes: 3000,
        property_title: 'Luxury Villa in the Hills',
        listing_price: 750000,
        country: 'USA',
        property_specifications: [
          {
            year_built: {
              value: 2005,
              label: 'Year Built',
            },
            lot_size: {
              value: 4500,
              label: 'Lot Size (sqft)',
            },
            energy_rating: {
              value: 'A+',
              label: 'Energy Rating',
            },
            smart_system: {
              value: 'Yes',
              label: 'Smart System',
            },
            security_system: {
              value: 'Advanced',
              label: 'Security System',
            },
            sustainability: {
              value: 'High',
              label: 'Sustainability',
            },
            connectivity: {
              value: 'High',
              label: 'Connectivity',
            },
            wellness_features: {
              value: 'Yes',
              label: 'Wellness Features',
            },
          },
        ],
        city: 'Los Angeles',
        property_descriptionoperty_description:
          'This is a beautiful luxury villa in the hills of Los Angeles. It has a beautiful view of the city and is perfect for those who want to live in luxury.',
        unparalleledAmenities: {
          amenity: [
            'Quantum Ai powered home managment',
            'Self  cleaning infinity pool',
            'Vertical hydroponic garden',
            '4D holographic entertainment room',
            'AI sommelier assisted wine cellar',
            'Anti-gravity yoga studio',
            'Eco- friendly autonomous parking',
            'Photovoltaic glass exterior',
          ],
        },
        property_sqft: 3000,
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
        property_id: '007',
        property_title: 'Luxury Villa in the Hills',
        listing_price: 750000,
        insurance: 2000,
        taxes: 3000,
        country: 'USA',
        property_specifications: [
          {
            year_built: {
              value: 2005,
              label: 'Year Built',
            },
            lot_size: {
              value: 4500,
              label: 'Lot Size (sqft)',
            },
            energy_rating: {
              value: 'A+',
              label: 'Energy Rating',
            },
            smart_system: {
              value: 'Yes',
              label: 'Smart System',
            },
            security_system: {
              value: 'Advanced',
              label: 'Security System',
            },
            sustainability: {
              value: 'High',
              label: 'Sustainability',
            },
            connectivity: {
              value: 'High',
              label: 'Connectivity',
            },
            wellness_features: {
              value: 'Yes',
              label: 'Wellness Features',
            },
          },
        ],
        property_description:
          'This is a beautiful luxury villa in the hills of Los Angeles. It has a beautiful view of the city and is perfect for those who want to live in luxury.',
        unparalleledAmenities: {
          amenity: [
            'Quantum Ai powered home managment',
            'Self  cleaning infinity pool',
            'Vertical hydroponic garden',
            '4D holographic entertainment room',
            'AI sommelier assisted wine cellar',
            'Anti-gravity yoga studio',
            'Eco- friendly autonomous parking',
            'Photovoltaic glass exterior',
          ],
        },
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
        property_id: '008',
        property_title: 'Modern Mansion in the City',
        listing_price: 850000,
        insurance: 2000,
        taxes: 1500,
        property_specifications: [
          {
            year_built: {
              value: 2005,
              label: 'Year Built',
            },
            lot_size: {
              value: 4500,
              label: 'Lot Size (sqft)',
            },
            energy_rating: {
              value: 'A+',
              label: 'Energy Rating',
            },
            smart_system: {
              value: 'Yes',
              label: 'Smart System',
            },
            security_system: {
              value: 'Advanced',
              label: 'Security System',
            },
            sustainability: {
              value: 'High',
              label: 'Sustainability',
            },
            connectivity: {
              value: 'High',
              label: 'Connectivity',
            },
            wellness_features: {
              value: 'Yes',
              label: 'Wellness Features',
            },
          },
        ],
        street_address: '123 Main St',
        property_description:
          'This is a beautiful modern mansion in the city. It has a beautiful view of the city and is perfect for those who want to live in luxury.',
        country: 'Canada',
        unparalleledAmenities: {
          amenity: [
            'Quantum Ai powered home managment',
            'Self  cleaning infinity pool',
            'Vertical hydroponic garden',
            '4D holographic entertainment room',
            'AI sommelier assisted wine cellar',
            'Anti-gravity yoga studio',
            'Eco- friendly autonomous parking',
            'Photovoltaic glass exterior',
          ],
        },
        property_sqft: 3000,
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
        property_id: '009',
        property_title: 'Luxury Villa in the Hills',
        listing_price: 750000,
        insurance: 2000,
        taxes: 1500,
        country: 'USA',
        property_specifications: [
          {
            year_built: {
              value: 2005,
              label: 'Year Built',
            },
            lot_size: {
              value: 4500,
              label: 'Lot Size (sqft)',
            },
            energy_rating: {
              value: 'A+',
              label: 'Energy Rating',
            },
            smart_system: {
              value: 'Yes',
              label: 'Smart System',
            },
            security_system: {
              value: 'Advanced',
              label: 'Security System',
            },
            sustainability: {
              value: 'High',
              label: 'Sustainability',
            },
            connectivity: {
              value: 'High',
              label: 'Connectivity',
            },
            wellness_features: {
              value: 'Yes',
              label: 'Wellness Features',
            },
          },
        ],
        street_address: '456 Oak St',
        property_description:
          'This is a beautiful luxury villa in the hills of Los Angeles. It has a beautiful view of the city and is perfect for those who want to live in luxury.',
        city: 'Los Angeles',
        property_sqft: 3000,
        unparalleledAmenities: {
          amenity: [
            'Quantum Ai powered home managment',
            'Self  cleaning infinity pool',
            'Vertical hydroponic garden',
            '4D holographic entertainment room',
            'AI sommelier assisted wine cellar',
            'Anti-gravity yoga studio',
            'Eco- friendly autonomous parking',
            'Photovoltaic glass exterior',
          ],
        },
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
        property_id: '0010',
        insurance: 2000,
        taxes: 1000,
        property_title: 'Modern Mansion in the City',
        listing_price: 850000,
        country: 'Canada',
        property_specifications: [
          {
            year_built: {
              value: 2005,
              label: 'Year Built',
            },
            lot_size: {
              value: 4500,
              label: 'Lot Size (sqft)',
            },
            energy_rating: {
              value: 'A+',
              label: 'Energy Rating',
            },
            smart_system: {
              value: 'Yes',
              label: 'Smart System',
            },
            security_system: {
              value: 'Advanced',
              label: 'Security System',
            },
            sustainability: {
              value: 'High',
              label: 'Sustainability',
            },
            connectivity: {
              value: 'High',
              label: 'Connectivity',
            },
            wellness_features: {
              value: 'Yes',
              label: 'Wellness Features',
            },
          },
        ],
        property_description:
          'This is a beautiful modern mansion in the city. It has a beautiful view of the city and is perfect for those who want to live in luxury.',
        unparalleledAmenities: {
          amenity: [
            'Quantum Ai powered home managment',
            'Self  cleaning infinity pool',
            'Vertical hydroponic garden',
            '4D holographic entertainment room',
            'AI sommelier assisted wine cellar',
            'Anti-gravity yoga studio',
            'Eco- friendly autonomous parking',
            'Photovoltaic glass exterior',
          ],
        },
        street_address: '123 Main St',
        city: 'Toronto',
        property_sqft: 3000,
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
        property_id: '0011',
        insurance: 3400,
        taxes: 1000,
        property_title: 'Luxury Villa in the Hills',
        listing_price: 750000,
        country: 'USA',
        city: 'Los Angeles',
        property_specifications: [
          {
            year_built: {
              value: 2005,
              label: 'Year Built',
            },
            lot_size: {
              value: 4500,
              label: 'Lot Size (sqft)',
            },
            energy_rating: {
              value: 'A+',
              label: 'Energy Rating',
            },
            smart_system: {
              value: 'Yes',
              label: 'Smart System',
            },
            security_system: {
              value: 'Advanced',
              label: 'Security System',
            },
            sustainability: {
              value: 'High',
              label: 'Sustainability',
            },
            connectivity: {
              value: 'High',
              label: 'Connectivity',
            },
            wellness_features: {
              value: 'Yes',
              label: 'Wellness Features',
            },
          },
        ],
        property_description:
          'This is a beautiful luxury villa in the hills of Los Angeles. It has a beautiful view of the city and is perfect for those who want to live in luxury.',
        unparalleledAmenities: {
          amenity: [
            'Quantum Ai powered home managment',
            'Self  cleaning infinity pool',
            'Vertical hydroponic garden',
            '4D holographic entertainment room',
            'AI sommelier assisted wine cellar',
            'Anti-gravity yoga studio',
            'Eco- friendly autonomous parking',
            'Photovoltaic glass exterior',
          ],
        },
        property_sqft: 3000,
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
    ],
    [],
  )

  useEffect(() => {
    const property = fakeDataProperties.find(
      (property) => property.property_id === property_id,
    )
    if (property) {
      setCurrentProperty(property)
    }
  }, [property_id, fakeDataProperties])

  if (!currentProperty) return <div>Property not found</div>

  return <PropertyDescription property={currentProperty} />
}

export default PropertyDecription
