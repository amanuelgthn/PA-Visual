import { Property } from '@/app/Types/property/property'

export const fakeDataProperties: Property[] = [
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
