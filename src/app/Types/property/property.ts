export interface Property {
  property_id: string
  property_title: string
  listing_price: number
  country: string
  city: string
  street_address: string
  num_bedrooms: number
  num_bathrooms: number
  property_sqft: number
  primaryImage: string
  additionalImages?: { base64Image: string }[]
  property_type?: string
  property_description?: string
  taxes?: number
  insurance?: number

  // Additional features
  additionalFeatures?: {
    has_gym?: boolean
    has_pool?: boolean
    has_garden?: boolean
    has_garage?: boolean
    has_steam?: boolean
    has_jacuzzi?: boolean
    has_sauna?: boolean
    has_balcony?: boolean
  }

  // Property specifications
  property_specifications: {
    year_built?: {
      value: number
      label: string
    }
    lot_size?: {
      value: number
      label: string
    }
    energy_rating?: {
      value: string
      label: string
    }
    smart_system?: {
      value: string
      label: string
    }
    security_system?: {
      value: string
      label: string
    }
    sustainability?: {
      value: string
      label: string
    }
    connectivity?: {
      value: string
      label: string
    }
    wellness_features?: {
      value: string
      label: string
    }
  }[]

  // Status of the property
  status?: {
    available?: boolean
    sold?: boolean
    currentStatus?: string
    statusHistory?: {
      status_id: number
      status: string
      created_at: Date
      updated_at: Date
    }[]
  }

  // Promotion details
  promotion?: {
    promotion_id?: number
    promotion_name?:
      | 'featured'
      | 'topPick'
      | 'hotDeal'
      | 'newListing'
      | 'forSale'
    start_date?: Date
    end_date?: Date
  }

  // Features associated with the property
  features?: {
    feature_id?: number
    amenity?: string
    utility_included?: string
    appliance_included?: string
    renovations_upgrades?: string
  }[]

  // Additional features details
  additionalFeaturesDetails?: {
    id?: number
    has_gym?: boolean
    has_pool?: boolean
    has_garden?: boolean
    has_garage?: boolean
    has_steam?: boolean
    has_jacuzzi?: boolean
    has_sauna?: boolean
    has_balcony?: boolean
  }
  unparalleledAmenities?: {
    amenity?: string[]
  }
}
