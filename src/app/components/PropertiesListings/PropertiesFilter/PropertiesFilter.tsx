'use client'
import React, { useEffect, useMemo, useState } from 'react'
import {
  amenities as initialAmenities,
  countries,
  cities,
  typeItems,
} from '../../../Utils/config/Constants'
import { BsFilterLeft } from 'react-icons/bs'
import { Divider, Input, Button, Dropdown, MenuProps } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { IoSearchOutline } from 'react-icons/io5'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './PropertiesFilter.scss'
import { useQueryState } from 'nuqs'
// import { fetchProperties } from '../../../GETproperty'
import { PropertyFilters } from '@/app/Types/property/filter'
import { useSearchParams } from 'next/navigation'

interface Amenity {
  key: string
  label: string
  selected: boolean
  has_key: string
}

const PropertiesFilter: React.FC = () => {
  const searchParams = useSearchParams()

  const [minPrice, setMinPrice] = useQueryState('minPrice', {
    defaultValue: 0,
    parse: (value: string) => parseInt(value, 10),
    serialize: (value: number) => value.toString(),
    clearOnDefault: true,
  })

  const [maxPrice, setMaxPrice] = useQueryState('maxPrice', {
    defaultValue: 0,
    parse: (value: string) => parseInt(value, 10),
    serialize: (value: number) => value.toString(),
    clearOnDefault: true,
  })

  const [selectCountry, setSelectCountry] = useQueryState('country')
  const [selectCity, setSelectCity] = useQueryState('city')
  const [citiesMenu, setCitiesMenu] = useState<MenuProps['items']>([])
  const [selectType, setSelectType] = useQueryState('type')
  const [urlAmenities, setUrlAmenities] = useQueryState('amenities', {
    parse: (value) => {
      if (!value) return {}
      return value.split(',').reduce(
        (acc, curr) => {
          acc[curr] = true
          return acc
        },
        {} as Record<string, boolean>,
      )
    },
    serialize: (value) => Object.keys(value).join(','),
    clearOnDefault: true,
  })
  const [amenities, setAmenities] = useState<Amenity[]>(
    initialAmenities.map((amenity) => ({
      ...amenity,
      has_key: `has_${amenity.key}`,
    })),
  )
  const [bathrooms, setBathrooms] = useQueryState('bathrooms', {
    defaultValue: 0,
    parse: Number,
    serialize: String,
    clearOnDefault: true,
  })
  const [rooms, setRooms] = useQueryState('rooms', {
    defaultValue: 0,
    parse: Number,
    serialize: String,
    clearOnDefault: true,
  })

  const toggleAmenity = (index: number) => {
    const updatedAmenities = [...amenities]
    updatedAmenities[index].selected = !updatedAmenities[index].selected

    const newUrlAmenities = { ...urlAmenities }
    if (updatedAmenities[index].selected) {
      newUrlAmenities[updatedAmenities[index].has_key] = true
    } else {
      delete newUrlAmenities[updatedAmenities[index].has_key]
    }
    setUrlAmenities(
      Object.keys(newUrlAmenities).length ? newUrlAmenities : null,
    )

    setAmenities(updatedAmenities)
  }

  const toggleAllAmenities = () => {
    const allSelected = amenities.every((amenity) => amenity.selected)
    const updatedAmenities = amenities.map((amenity) => ({
      ...amenity,
      selected: !allSelected,
    }))

    if (allSelected) {
      setUrlAmenities(null)
    } else {
      const newUrlAmenities = updatedAmenities.reduce(
        (acc, amenity) => {
          acc[amenity.has_key] = true
          return acc
        },
        {} as Record<string, boolean>,
      )
      setUrlAmenities(newUrlAmenities)
    }

    setAmenities(updatedAmenities)
  }

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setMinPrice(value[0])
      setMaxPrice(value[1])
    }
  }

  const handleMenuClick =
    (setter: (value: string) => void) =>
    (e: { key: string; label?: string }) => {
      setter(e.key)
      const filteredCieties = cities?.filter((cities) => cities?.key === e.key)
      if (filteredCieties) {
        setCitiesMenu(filteredCieties)
      }
      if (e.label) {
        setSelectCity(e.label)
      }
    }

  const clearFilters = () => {
    setMinPrice(0)
    setMaxPrice(0)
    setSelectCountry(null)
    setSelectCity(null)
    setSelectType(null)
    setBathrooms(0)
    setCitiesMenu([])
    setRooms(0)
    setUrlAmenities(null)
    setAmenities(
      amenities.map((amenity) => ({
        ...amenity,
        selected: false,
      })),
    )
  }

  useEffect(() => {
    setAmenities((prev) =>
      prev.map((amenity) => ({
        ...amenity,
        selected: !!urlAmenities?.[amenity.has_key],
      })),
    )
  }, [urlAmenities])

  const filters: PropertyFilters = useMemo(
    () => ({
      minPrice: Number(searchParams.get('minPrice')) || undefined,
      maxPrice: Number(searchParams.get('maxPrice')) || undefined,
      country: searchParams.get('country') || undefined,
      propertyType: searchParams.get('propertyType') || undefined,
      minBedrooms: Number(searchParams.get('minBedrooms')) || undefined,
      maxBedrooms: Number(searchParams.get('maxBedrooms')) || undefined,
      minBathrooms: Number(searchParams.get('minBathrooms')) || undefined,
      maxBathrooms: Number(searchParams.get('maxBathrooms')) || undefined,
      has_gym: searchParams.get('has_gym') === 'true' || undefined,
      has_pool: searchParams.get('has_pool') === 'true' || undefined,
      has_garden: searchParams.get('has_garden') === 'true' || undefined,
      has_garage: searchParams.get('has_garage') === 'true' || undefined,
      has_steam: searchParams.get('has_steam') === 'true' || undefined,
      has_jacuzzi: searchParams.get('has_jacuzzi') === 'true' || undefined,
      has_sauna: searchParams.get('has_sauna') === 'true' || undefined,
      has_balcony: searchParams.get('has_balcony') === 'true' || undefined,
    }),
    [searchParams],
  )

  const handleConfirm = async () => {
    console.log('searchparams ', searchParams.toString())
    console.log('filters', filters)
    const hasFilters = Object.values(filters).some(
      (value) => value !== undefined,
    )
    console.log('hasFilters', hasFilters)
    if (hasFilters) {
      // await fetchPropertiesWithFilters(searchParams.toString())
    } else {
      return
    }
  }

  useEffect(() => {
    console.log(selectCity)
  }, [selectCity])

  return (
    <main className='properties-filter-main'>
      <div className='title-div'>
        <h1>ADVANCED SEARCH</h1>
        <Divider className='custom-divider-style' />
      </div>
      <div className='filter-icon-div'>
        <h1>FILTER</h1>
        <BsFilterLeft size={20} color='rgba(255, 255, 255, 1)' />
      </div>
      <div className='search-price-range-container'>
        <Input
          placeholder='Search'
          className='search-input-custom'
          prefix={<IoSearchOutline size={20} color='rgba(255, 255, 255, 1)' />}
        />
        <div className='price-range-container'>
          <div className='price-range-input-container'>
            <span>
              <h1>PRICE RANGE:</h1>
            </span>
            <Slider
              range
              min={0}
              max={500000000}
              value={[minPrice, maxPrice]}
              onChange={handleSliderChange}
              className='custom-slider'
            />
          </div>
          <div className='min-max-input'>
            <div className='input-container'>
              <Input
                type='number'
                value={minPrice}
                className='min-input'
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
            </div>
            <h1>-</h1>
            <div className='input-container'>
              <Input
                type='number'
                value={maxPrice}
                className='max-input'
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='region-location-type-container'>
        <Dropdown
          menu={{
            items: countries,
            onClick: handleMenuClick(setSelectCountry),
          }}
          overlayClassName='custom-dropdown'
          className='dropdown-custom'
          placement='bottomRight'
          trigger={['click']}
          dropdownRender={(menus) => (
            <div className='custom-dropdown-content'>{menus}</div>
          )}
        >
          <Button className='dropdown-button'>
            {selectCountry || 'Country'}
            <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown
          disabled={!selectCountry}
          menu={{
            items: citiesMenu,
            onClick: (e) => {
              const target = e.domEvent.target as HTMLElement
              setSelectCity(target.textContent || '')
            },
          }}
          overlayClassName='custom-dropdown'
          className={`dropdown-custom ${!selectCountry ? 'disabled' : ''}`}
          placement='bottomRight'
          trigger={['click']}
          dropdownRender={(menus) => (
            <div className='custom-dropdown-content'>{menus}</div>
          )}
        >
          <Button className='dropdown-button'>
            {selectCity || 'City'}
            <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown
          menu={{ items: typeItems, onClick: handleMenuClick(setSelectType) }}
          overlayClassName='custom-dropdown'
          className='dropdown-custom'
          placement='bottomRight'
          trigger={['click']}
          dropdownRender={(menus) => (
            <div className='custom-dropdown-content'>{menus}</div>
          )}
        >
          <Button className='dropdown-button'>
            {selectType || 'Type'}
            <DownOutlined />
          </Button>
        </Dropdown>
        <Button onClick={handleConfirm} className='confirm-button'>
          Confirm
        </Button>
      </div>
      <div className='clear-button-div'>
        <Button className='clear-button' onClick={clearFilters}>
          Clear filters
        </Button>
        <div className='line-div'></div>
      </div>
      <div className='amenties-bathrooms-rooms-container'>
        <div className='amenties-title-container'>
          <h1>Amenities</h1>
          <h1>Selected items: {amenities.filter((a) => a.selected).length}</h1>
        </div>
        <div className='amenties-container'>
          <div className='amenities'>
            <label className='label-container'>
              <input
                className='checkbox-custom'
                type='checkbox'
                checked={amenities.every((a) => a.selected)}
                onChange={toggleAllAmenities}
              />
              Select All
            </label>
            {amenities.map((amenity, index) => (
              <label className='label-container' key={amenity.key}>
                <input
                  className='checkbox-custom'
                  type='checkbox'
                  checked={amenity.selected}
                  onChange={() => toggleAmenity(index)}
                />
                {amenity.label}
              </label>
            ))}
          </div>
          <div className='counter-container'>
            <h3>Bathrooms</h3>
            <div className='bathroom-rooms-counter-increment-container'>
              <button
                onClick={() => setBathrooms(bathrooms > 0 ? bathrooms - 1 : 0)}
              >
                -
              </button>
              <div className='bathroom-rooms-counter'>{bathrooms}</div>
              <button onClick={() => setBathrooms(bathrooms + 1)}>+</button>
            </div>
          </div>
          <div className='counter-container'>
            <h3>Rooms</h3>
            <div className='bathroom-rooms-counter-increment-container'>
              <button onClick={() => setRooms(rooms > 0 ? rooms - 1 : 0)}>
                -
              </button>
              <div className='bathroom-rooms-counter'>{rooms}</div>
              <button onClick={() => setRooms(rooms + 1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PropertiesFilter
