import { MenuProps } from 'antd'
import { PropertyFilters } from '../../Types/property/filter'

export const CONSTANTS = {
  API_BASE_URL: 'http://localhost:8000/',
  STRINGS: {
    EN: {
      FIELD_REQUIRED: 'This field is required!',
      NOT_AN_EMAIL: 'This is not an email!',
      PASSWORD_DONT_MATCH: 'Password do not match ',
      HOME_HEADER: 'EXPERIENCE LUXURY AND REDEFINE LIVING',
      CONTACT_TEXT:
        'Ready to experience the Property Advisor difference? Contact us today to learn more about how we can help you achieve your real estate goals.',
      ABOUT_TEXT:
        'We are committed to providing exceptional service and expertise in the luxury real estate market. With a focus on innovation and excellence, we have established ourselves as leaders in facilitating the purchase, sale, and investment of high-end properties across Europe and internationally.',
    },
  },
}

export const PROPERTY_FILTERS: PropertyFilters = {
  minPrice: 0,
  maxPrice: 5000000,
  country: '',
  propertyType: '',
  minBedrooms: 1,
  maxBedrooms: 5,
  minBathrooms: 1,
  maxBathrooms: 5,
  has_gym: true,
  has_pool: true,
  has_garden: true,
  has_garage: true,
  has_steam: true,
  has_jacuzzi: true,
  has_sauna: true,
  has_balcony: true,
}

export const amenities = [
  { key: 'gym', label: 'Gym', selected: false, has_gym: false },
  { key: 'pool', label: 'Pool', selected: false, has_pool: false },
  { key: 'garden', label: 'Garden', selected: false, has_garden: false },
  { key: 'garage', label: 'Garage', selected: false, has_garage: false },
  { key: 'steam_room', label: 'Steam Room', selected: false, has_steam: false },
  { key: 'jacuzzi', label: 'Jacuzzi', selected: false, has_jacuzzi: false },
  { key: 'sauna', label: 'Sauna', selected: false, has_sauna: false },
  { key: 'balcony', label: 'Balcony', selected: false, has_balcony: false },
]

export const regionItems: MenuProps['items'] = [
  { label: 'United States', key: 'United States' },
  { label: 'Canada', key: 'Canada' },
  { label: 'Mexico', key: 'Mexico' },
]

export const locationItems: MenuProps['items'] = [
  { label: 'New York', key: 'New York' },
  { label: 'Los Angeles', key: 'Los Angeles' },
  { label: 'Chicago', key: 'Chicago' },
]

export const typeItems: MenuProps['items'] = [
  { label: 'Apartment', key: 'Apartment' },
  { label: 'House', key: 'House' },
  { label: 'Condo', key: 'Condo' },
]
