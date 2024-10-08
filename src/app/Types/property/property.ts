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
}
