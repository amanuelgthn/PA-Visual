export interface PropertyFilters {
  minPrice?: number // Minimum listing price
  maxPrice?: number // Maximum listing price
  country?: string // Country of the property
  propertyType?: string // Type of the property
  minBedrooms?: number // Minimum number of bedrooms
  maxBedrooms?: number // Maximum number of bedrooms
  minBathrooms?: number // Minimum number of bathrooms
  maxBathrooms?: number // Maximum number of bathrooms
  has_gym?: boolean // Whether the property has a gym
  has_pool?: boolean // Whether the property has a pool
  has_garden?: boolean // Whether the property has a garden
  has_garage?: boolean // Whether the property has a garage
  has_steam?: boolean // Whether the property has a steam room
  has_jacuzzi?: boolean // Whether the property has a jacuzzi
  has_sauna?: boolean // Whether the property has a sauna
  has_balcony?: boolean // Whether the property has a balcony
}
