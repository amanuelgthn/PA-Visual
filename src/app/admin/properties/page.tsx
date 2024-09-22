'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { type DatePickerProps } from 'antd'
import PerformanceOverView from '../components/PerformanceOverview/PerformanceOverView'
import YearPickerComponent from '../components/YearPicker/YearPicker'

import PropertyListTable, {
  PropertyListTableTypes,
} from '../components/ProperTyListTable/PropertyListTable'
import RecentlyProperties, {
  RecentlyPropertiesProps,
} from '../components/RecentlyProperties/RecentlyProperties'
import dayjs from 'dayjs'
import PropertiesChart from '../components/PropertiesChar/PropertiesChart'

const PropertiesManagement: React.FC = () => {
  const [year, setYear] = useState<number>(dayjs().year())
  const [filteredPorperties, setFilteredPorperties] = useState<
    PropertyListTableTypes[]
  >([])

  const data = [
    {
      label: 'Total Properties',
      value: '1,245',
      percentageChange: 25,
      changeDirection: 'up',
    },
    {
      label: 'Properties Sold',
      value: 500,
      percentageChange: 25,
      changeDirection: 'up',
    },
    {
      label: 'Active Listings',
      value: 200,
      percentageChange: 25,
      changeDirection: 'down',
    },
    {
      label: 'Total Revenue',
      value: '$542M',
      percentageChange: 25,
      changeDirection: 'up',
    },
  ]
  const properties: PropertyListTableTypes[] = useMemo(
    () => [
      {
        propertyId: '1',
        propertyTitle: 'Luxury Villa',
        propertyType: 'Villa',
        propertyAddress: 'Beverly Hills, CA',
        propertyPrice: '$5,000,000',
        propertyStatus: 'Sold',
        propertyImages: [
          'https://prod.rockmedialibrary.com/api/public/content/ff061825fa8e44bf8108de5c786c0062?v=4c4f7c7a',
          'https://prod.rockmedialibrary.com/api/public/content/ff061825fa8e44bf8108de5c786c0062?v=4c4f7c7a',
          'https://prod.rockmedialibrary.com/api/public/content/ff061825fa8e44bf8108de5c786c0062?v=4c4f7c7a',
          'https://prod.rockmedialibrary.com/api/public/content/ff061825fa8e44bf8108de5c786c0062?v=4c4f7c7a',
        ],
        listingAgent: 'agent1',
        listingAgentId: 'agent1',
        listingAgentEmail: 'agent1@example.com',
        listingAgentName: 'John Doe',
        propertyDescription:
          'This is a beautiful luxury villa located in Beverly Hills, CA.',
        propertyFeatures: ['5 bedrooms', '5 bathrooms', '2,500 sqft'],
        propertyBedRooms: 5,
        propertyGarageSpace: 2,
        propertyArea: 2500,
        propertyPostingDate: '2023-11-01',
      },
      {
        propertyId: '2',
        propertyTitle: 'Modern Apartment',
        propertyType: 'Apartment',
        propertyAddress: 'New York, NY',
        propertyPrice: '$2,500,000',
        propertyStatus: 'Available',
        propertyImages: [
          'https://digiestateorg.wordpress.com/wp-content/uploads/2023/11/ask-us-1024x583-1.jpg',
          'https://digiestateorg.wordpress.com/wp-content/uploads/2023/11/ask-us-1024x583-1.jpg',
          'https://digiestateorg.wordpress.com/wp-content/uploads/2023/11/ask-us-1024x583-1.jpg',
          'https://digiestateorg.wordpress.com/wp-content/uploads/2023/11/ask-us-1024x583-1.jpg',
        ],
        listingAgent: 'agent2',
        listingAgentId: 'agent2',
        listingAgentEmail: 'agent2@example.com',
        listingAgentName: 'Jane Smith',
        propertyDescription:
          'This is a modern apartment located in New York, NY.',
        propertyFeatures: ['3 bedrooms', '2 bathrooms', '1,200 sqft'],
        propertyBedRooms: 3,
        propertyGarageSpace: 1,
        propertyArea: 1200,
        propertyPostingDate: '2023-11-05',
      },
      {
        propertyId: '3',
        propertyTitle: 'Cozy Cottage',
        propertyType: 'Cottage',
        propertyAddress: 'Napa Valley, CA',
        propertyPrice: '$850,000',
        propertyStatus: 'Pending',
        propertyImages: [
          'https://en.idei.club/uploads/posts/2023-06/thumbs/1687330274_en-idei-club-p-real-estate-house-dizain-pinterest-13.jpg',
          'https://en.idei.club/uploads/posts/2023-06/thumbs/1687330274_en-idei-club-p-real-estate-house-dizain-pinterest-13.jpg',
          'https://en.idei.club/uploads/posts/2023-06/thumbs/1687330274_en-idei-club-p-real-estate-house-dizain-pinterest-13.jpg',
          'https://en.idei.club/uploads/posts/2023-06/thumbs/1687330274_en-idei-club-p-real-estate-house-dizain-pinterest-13.jpg',
        ],
        listingAgent: 'agent3',
        listingAgentId: 'agent3',
        listingAgentEmail: 'agent3@example.com',
        listingAgentName: 'Mike Johnson',
        propertyDescription:
          'This is a cozy cottage located in Napa Valley, CA.',
        propertyFeatures: ['2 bedrooms', '1 bathroom', '800 sqft'],
        propertyBedRooms: 2,
        propertyGarageSpace: 0,
        propertyArea: 800,
        propertyPostingDate: '2022-11-10',
      },
      {
        propertyId: '4',
        propertyTitle: 'Beachfront Mansion',
        propertyType: 'Mansion',
        propertyAddress: 'Malibu, CA',
        propertyPrice: '$10,000,000',
        propertyStatus: 'Available',
        propertyImages: [
          'https://img.jamesedition.com/listing_images/2024/08/22/15/17/50/c84ac666-9f77-4bf2-9e78-3d6b01c578aa/je/760x470xc.jpg',
          'https://img.jamesedition.com/listing_images/2024/08/22/15/17/50/c84ac666-9f77-4bf2-9e78-3d6b01c578aa/je/760x470xc.jpg',
          'https://img.jamesedition.com/listing_images/2024/08/22/15/17/50/c84ac666-9f77-4bf2-9e78-3d6b01c578aa/je/760x470xc.jpg',
          'https://img.jamesedition.com/listing_images/2024/08/22/15/17/50/c84ac666-9f77-4bf2-9e78-3d6b01c578aa/je/760x470xc.jpg',
        ],
        listingAgent: 'agent4',
        listingAgentId: 'agent4',
        listingAgentEmail: 'agent4@example.com',
        listingAgentName: 'Sara Williams',
        propertyDescription:
          'This is a beautiful beachfront mansion located in Malibu, CA.',
        propertyFeatures: ['6 bedrooms', '6 bathrooms', '5,000 sqft'],
        propertyBedRooms: 6,
        propertyGarageSpace: 3,
        propertyArea: 5000,
        propertyPostingDate: '2024-05-15',
      },
      {
        propertyId: '5',
        propertyTitle: 'Downtown Penthouse',
        propertyType: 'Penthouse',
        propertyAddress: 'Miami, FL',
        propertyPrice: '$3,750,000',
        propertyStatus: 'Pending',
        propertyImages: [
          'https://i2.au.reastatic.net/800x600/5c1d715190d61b24a67c6d7ac877ecc68c6c13d531c39b6e9fbea2015e2a5dd9/image.jpg',
          'https://i2.au.reastatic.net/800x600/5c1d715190d61b24a67c6d7ac877ecc68c6c13d531c39b6e9fbea2015e2a5dd9/image.jpg',
          'https://i2.au.reastatic.net/800x600/5c1d715190d61b24a67c6d7ac877ecc68c6c13d531c39b6e9fbea2015e2a5dd9/image.jpg',
          'https://i2.au.reastatic.net/800x600/5c1d715190d61b24a67c6d7ac877ecc68c6c13d531c39b6e9fbea2015e2a5dd9/image.jpg',
        ],
        listingAgent: 'agent5',
        listingAgentId: 'agent5',
        listingAgentEmail: 'agent5@example.com',
        listingAgentName: 'Chris Brown',
        propertyDescription:
          'This is a luxurious penthouse located in Miami, FL.',
        propertyFeatures: ['4 bedrooms', '4 bathrooms', '3,000 sqft'],
        propertyBedRooms: 4,
        propertyGarageSpace: 2,
        propertyArea: 3000,
        propertyPostingDate: '2024-06-20',
      },
      {
        propertyId: '6',
        propertyTitle: 'Countryside Farmhouse',
        propertyType: 'Farmhouse',
        propertyAddress: 'Austin, TX',
        propertyPrice: '$1,200,000',
        propertyStatus: 'Available',
        propertyImages: [
          'https://i2.au.reastatic.net/800x600/a8f2aca44e69ae0b00b83350f1a1238f5d9a7d3a28f7c4c1e541902a7a4d6bba/image.jpg',
          'https://i2.au.reastatic.net/800x600/a8f2aca44e69ae0b00b83350f1a1238f5d9a7d3a28f7c4c1e541902a7a4d6bba/image.jpg',
          'https://i2.au.reastatic.net/800x600/a8f2aca44e69ae0b00b83350f1a1238f5d9a7d3a28f7c4c1e541902a7a4d6bba/image.jpg',
          'https://i2.au.reastatic.net/800x600/a8f2aca44e69ae0b00b83350f1a1238f5d9a7d3a28f7c4c1e541902a7a4d6bba/image.jpg',
        ],
        listingAgent: 'agent6',
        listingAgentId: 'agent6',
        listingAgentEmail: 'agent6@example.com',
        listingAgentName: 'Emily Davis',
        propertyDescription:
          'This is a beautiful farmhouse located in Austin, TX.',
        propertyFeatures: ['3 bedrooms', '2 bathrooms', '1,500 sqft'],
        propertyBedRooms: 3,
        propertyGarageSpace: 2,
        propertyArea: 1500,
        propertyPostingDate: '2021-07-25',
      },
      {
        propertyId: '7',
        propertyTitle: 'Mountain Cabin',
        propertyType: 'Cabin',
        propertyAddress: 'Aspen, CO',
        propertyPrice: '$950,000',
        propertyStatus: 'Available',
        propertyImages: [
          'https://i2.au.reastatic.net/800x600/ad30b4d19361c6cca90d80fbedc9751f4fc9dec9a34a5fd02c13b316b3e82544/image.jpg',
          'https://i2.au.reastatic.net/800x600/ad30b4d19361c6cca90d80fbedc9751f4fc9dec9a34a5fd02c13b316b3e82544/image.jpg',
          'https://i2.au.reastatic.net/800x600/ad30b4d19361c6cca90d80fbedc9751f4fc9dec9a34a5fd02c13b316b3e82544/image.jpg',
          'https://i2.au.reastatic.net/800x600/ad30b4d19361c6cca90d80fbedc9751f4fc9dec9a34a5fd02c13b316b3e82544/image.jpg',
        ],
        listingAgent: 'agent7',
        listingAgentId: 'agent7',
        listingAgentEmail: 'agent7@example.com',
        listingAgentName: 'David Wilson',
        propertyDescription:
          'This is a cozy mountain cabin located in Aspen, CO.',
        propertyFeatures: ['2 bedrooms', '1 bathroom', '1,000 sqft'],
        propertyBedRooms: 2,
        propertyGarageSpace: 0,
        propertyArea: 1000,
        propertyPostingDate: '2021-08-15',
      },
      {
        propertyId: '8',
        propertyTitle: 'Suburban Home',
        propertyType: 'House',
        propertyAddress: 'Seattle, WA',
        propertyPrice: '$1,500,000',
        propertyStatus: 'Pending',
        propertyImages: [
          'https://i2.au.reastatic.net/800x600/a6fcd2fda359dec322292fbdb613b4e3b2fb6c393534d8534e5d69bc2221608c/image.jpg',
          'https://i2.au.reastatic.net/800x600/a6fcd2fda359dec322292fbdb613b4e3b2fb6c393534d8534e5d69bc2221608c/image.jpg',
          'https://i2.au.reastatic.net/800x600/a6fcd2fda359dec322292fbdb613b4e3b2fb6c393534d8534e5d69bc2221608c/image.jpg',
          'https://i2.au.reastatic.net/800x600/a6fcd2fda359dec322292fbdb613b4e3b2fb6c393534d8534e5d69bc2221608c/image.jpg',
        ],
        listingAgent: 'agent8',
        listingAgentId: 'agent8',
        listingAgentEmail: 'agent8@example.com',
        listingAgentName: 'Laura White',
        propertyDescription:
          'This is a beautiful suburban home located in Seattle, WA.',
        propertyFeatures: ['4 bedrooms', '3 bathrooms', '2,000 sqft'],
        propertyBedRooms: 4,
        propertyGarageSpace: 2,
        propertyArea: 2000,
        propertyPostingDate: '2023-09-20',
      },
      {
        propertyId: '9',
        propertyTitle: 'Historic Townhouse',
        propertyType: 'Townhouse',
        propertyAddress: 'Charleston, SC',
        propertyPrice: '$1,300,000',
        propertyStatus: 'Available',
        propertyImages: [
          'https://i2.au.reastatic.net/800x600/75df40224d7035806418b0166e677b4601780e4aec5054c10f4e18728e1315ca/image.jpg',
          'https://i2.au.reastatic.net/800x600/75df40224d7035806418b0166e677b4601780e4aec5054c10f4e18728e1315ca/image.jpg',
          'https://i2.au.reastatic.net/800x600/75df40224d7035806418b0166e677b4601780e4aec5054c10f4e18728e1315ca/image.jpg',
          'https://i2.au.reastatic.net/800x600/75df40224d7035806418b0166e677b4601780e4aec5054c10f4e18728e1315ca/image.jpg',
        ],
        listingAgent: 'agent9',
        listingAgentId: 'agent9',
        listingAgentEmail: 'agent9@example.com',
        listingAgentName: 'Mark Taylor',
        propertyDescription:
          'This is a historic townhouse located in Charleston, SC.',
        propertyFeatures: ['3 bedrooms', '2 bathrooms', '1,800 sqft'],
        propertyBedRooms: 3,
        propertyGarageSpace: 1,
        propertyArea: 1800,
        propertyPostingDate: '2024-01-10',
      },
      {
        propertyId: '10',
        propertyTitle: 'Lakeside Cottage',
        propertyType: 'Cottage',
        propertyAddress: 'Lake Tahoe, NV',
        propertyPrice: '$750,000',
        propertyStatus: 'Pending',
        propertyImages: [
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
        ],
        listingAgent: 'agent10',
        listingAgentId: 'agent10',
        listingAgentEmail: 'agent10@example.com',
        listingAgentName: 'Anna Thompson',
        propertyDescription:
          'This is a cozy lakeside cottage located in Lake Tahoe, NV.',
        propertyFeatures: ['2 bedrooms', '1 bathroom', '900 sqft'],
        propertyBedRooms: 2,
        propertyGarageSpace: 0,
        propertyArea: 900,
        propertyPostingDate: '2023-10-05',
      },
    ],
    [],
  )

  const onChange: DatePickerProps['onChange'] = (date) => {
    setYear(dayjs(date).year())
  }
  const recentlyData: RecentlyPropertiesProps['recentlyData'] = {
    recentlySoldProperties: [
      {
        propertyId: '1',
        propertyTitle: 'Luxury Villa in Malibu',
        propertyPrice: '$3,500,000',
        propertyStatus: 'Sold',
        propertyBedRooms: 4,
        propertyGarageSpace: 2,
        propertyArea: 4500,
        propertyAddress: '123 Beachfront Dr, Malibu, CA',
        propertyDescription:
          'A luxurious villa with ocean views and modern amenities.',
        propertyFeatures: [
          'Ocean View',
          'Swimming Pool',
          'Private Beach',
          'Home Theater',
        ],
        listingAgentName: 'John Doe',
        listingAgentEmail: 'johnDoe@com',
        propertyImages: [
          'https://prod.rockmedialibrary.com/api/public/content/ff061825fa8e44bf8108de5c786c0062?v=4c4f7c7a',
          'https://prod.rockmedialibrary.com/api/public/content/ff061825fa8e44bf8108de5c786c0062?v=4c4f7c7a',
          'https://prod.rockmedialibrary.com/api/public/content/ff061825fa8e44bf8108de5c786c0062?v=4c4f7c7a',
          'https://prod.rockmedialibrary.com/api/public/content/ff061825fa8e44bf8108de5c786c0062?v=4c4f7c7a',
        ],
        propertyBuyerEmail: 'buyer1@com',
        propertyBuyerName: 'buyer1',
      },
      {
        propertyId: '2',
        propertyTitle: 'Modern Apartment in NYC',
        propertyPrice: '$1,200,000',
        propertyStatus: 'Sold',
        propertyBedRooms: 2,
        propertyGarageSpace: 1,
        propertyArea: 1200,
        propertyAddress: '456 5th Ave, New York, NY',
        propertyDescription:
          'A sleek modern apartment in the heart of the city.',
        propertyFeatures: ['City View', 'Gym Access', 'Concierge Service'],
        listingAgentName: 'Jane Smith',
        listingAgentEmail: 'janeSmith@com',
        propertyImages: [
          'https://digiestateorg.wordpress.com/wp-content/uploads/2023/11/ask-us-1024x583-1.jpg',
          'https://digiestateorg.wordpress.com/wp-content/uploads/2023/11/ask-us-1024x583-1.jpg',
          'https://digiestateorg.wordpress.com/wp-content/uploads/2023/11/ask-us-1024x583-1.jpg',
          'https://digiestateorg.wordpress.com/wp-content/uploads/2023/11/ask-us-1024x583-1.jpg',
        ],
        propertyBuyerEmail: 'buyer2@com',
        propertyBuyerName: 'buyer2',
      },
      {
        propertyId: '3',
        propertyTitle: 'Suburban Family Home',
        propertyPrice: '$750,000',
        propertyStatus: 'Sold',
        propertyBedRooms: 3,
        propertyGarageSpace: 2,
        propertyArea: 2500,
        propertyAddress: '789 Maple St, Springfield, IL',
        propertyDescription: 'A cozy home perfect for a growing family.',
        propertyFeatures: ['Large Backyard', 'Fireplace', 'Near Schools'],
        listingAgentName: 'Mary Johnson',
        listingAgentEmail: 'maryJohnson@com',
        propertyImages: [
          'https://en.idei.club/uploads/posts/2023-06/thumbs/1687330274_en-idei-club-p-real-estate-house-dizain-pinterest-13.jpg',
          'https://en.idei.club/uploads/posts/2023-06/thumbs/1687330274_en-idei-club-p-real-estate-house-dizain-pinterest-13.jpg',
          'https://en.idei.club/uploads/posts/2023-06/thumbs/1687330274_en-idei-club-p-real-estate-house-dizain-pinterest-13.jpg',
          'https://en.idei.club/uploads/posts/2023-06/thumbs/1687330274_en-idei-club-p-real-estate-house-dizain-pinterest-13.jpg',
        ],
        propertyBuyerEmail: 'buyer3@com',
        propertyBuyerName: 'buyer3',
      },
      {
        propertyId: '4',
        propertyTitle: 'Cottage in the Countryside',
        propertyPrice: '$450,000',
        propertyStatus: 'Sold',
        propertyBedRooms: 2,
        propertyGarageSpace: 1,
        propertyArea: 1800,
        propertyAddress: '123 Country Ln, Asheville, NC',
        propertyDescription: 'A charming cottage surrounded by nature.',
        propertyFeatures: ['Mountain View', 'Garden', 'Fire Pit'],
        listingAgentName: 'Michael Brown',
        listingAgentEmail: 'michaelBrown@com',
        propertyImages: [
          'https://i2.au.reastatic.net/800x600/a8f2aca44e69ae0b00b83350f1a1238f5d9a7d3a28f7c4c1e541902a7a4d6bba/image.jpg',
          'https://i2.au.reastatic.net/800x600/a8f2aca44e69ae0b00b83350f1a1238f5d9a7d3a28f7c4c1e541902a7a4d6bba/image.jpg',
          'https://i2.au.reastatic.net/800x600/a8f2aca44e69ae0b00b83350f1a1238f5d9a7d3a28f7c4c1e541902a7a4d6bba/image.jpg',
          'https://i2.au.reastatic.net/800x600/a8f2aca44e69ae0b00b83350f1a1238f5d9a7d3a28f7c4c1e541902a7a4d6bba/image.jpg',
        ],
        propertyBuyerEmail: 'buyer4@com',
        propertyBuyerName: 'buyer4',
      },
      {
        propertyId: '5',
        propertyTitle: 'Penthouse in Miami',
        propertyPrice: '$2,800,000',
        propertyStatus: 'Sold',
        propertyBedRooms: 3,
        propertyGarageSpace: 2,
        propertyArea: 3000,
        propertyAddress: '789 Ocean Dr, Miami, FL',
        propertyDescription:
          'A stunning penthouse with ocean views and modern design.',
        propertyFeatures: ['Rooftop Pool', 'Private Elevator', 'Ocean View'],
        listingAgentName: 'Emily Davis',
        listingAgentEmail: 'emilyDavis@com',
        propertyImages: [
          'https://img.jamesedition.com/listing_images/2024/08/22/15/17/50/c84ac666-9f77-4bf2-9e78-3d6b01c578aa/je/760x470xc.jpg',
          'https://img.jamesedition.com/listing_images/2024/08/22/15/17/50/c84ac666-9f77-4bf2-9e78-3d6b01c578aa/je/760x470xc.jpg',
          'https://img.jamesedition.com/listing_images/2024/08/22/15/17/50/c84ac666-9f77-4bf2-9e78-3d6b01c578aa/je/760x470xc.jpg',
          'https://img.jamesedition.com/listing_images/2024/08/22/15/17/50/c84ac666-9f77-4bf2-9e78-3d6b01c578aa/je/760x470xc.jpg',
        ],
        propertyBuyerEmail: 'buyer5@com',
        propertyBuyerName: 'buyer5',
      },
    ],
    recentlyAddedProperties: [
      {
        propertyId: '6',
        propertyTitle: 'Townhouse in Chicago',
        propertyPrice: '$650,000',
        propertyStatus: 'Available',
        propertyBedRooms: 3,
        propertyGarageSpace: 1,
        propertyArea: 2100,
        propertyAddress: '345 Lincoln Park Ave, Chicago, IL',
        propertyDescription: 'A modern townhouse in a vibrant neighborhood.',
        propertyFeatures: [
          'Rooftop Terrace',
          'Open Floor Plan',
          'Near Downtown',
        ],
        listingAgentName: 'David Green',
        listingAgentEmail: 'davidGreen@com',
        propertyImages: [
          'https://i2.au.reastatic.net/800x600/ad30b4d19361c6cca90d80fbedc9751f4fc9dec9a34a5fd02c13b316b3e82544/image.jpg',
          'https://i2.au.reastatic.net/800x600/ad30b4d19361c6cca90d80fbedc9751f4fc9dec9a34a5fd02c13b316b3e82544/image.jpg',
          'https://i2.au.reastatic.net/800x600/ad30b4d19361c6cca90d80fbedc9751f4fc9dec9a34a5fd02c13b316b3e82544/image.jpg',
          'https://i2.au.reastatic.net/800x600/ad30b4d19361c6cca90d80fbedc9751f4fc9dec9a34a5fd02c13b316b3e82544/image.jpg',
        ],
      },
      {
        propertyId: '7',
        propertyTitle: 'Beach House in Florida',
        propertyPrice: '$1,500,000',
        propertyStatus: 'Available',
        propertyBedRooms: 4,
        propertyGarageSpace: 2,
        propertyArea: 3500,
        propertyAddress: '678 Oceanview Blvd, Tampa, FL',
        propertyDescription: 'A spacious beach house with stunning views.',
        propertyFeatures: [
          'Ocean View',
          'Private Beach Access',
          'Outdoor Shower',
        ],
        listingAgentName: 'Sophia White',
        listingAgentEmail: 'sophiaWhite@com',
        propertyImages: [
          'https://i2.au.reastatic.net/800x600/75df40224d7035806418b0166e677b4601780e4aec5054c10f4e18728e1315ca/image.jpg',
          'https://i2.au.reastatic.net/800x600/75df40224d7035806418b0166e677b4601780e4aec5054c10f4e18728e1315ca/image.jpg',
          'https://i2.au.reastatic.net/800x600/75df40224d7035806418b0166e677b4601780e4aec5054c10f4e18728e1315ca/image.jpg',
          'https://i2.au.reastatic.net/800x600/75df40224d7035806418b0166e677b4601780e4aec5054c10f4e18728e1315ca/image.jpg',
        ],
      },
      {
        propertyId: '8',
        propertyTitle: 'Mountain Retreat in Colorado',
        propertyPrice: '$1,800,000',
        propertyStatus: 'Available',
        propertyBedRooms: 5,
        propertyGarageSpace: 3,
        propertyArea: 5000,
        propertyAddress: '456 Alpine Rd, Aspen, CO',
        propertyDescription: 'A luxurious retreat in the mountains.',
        propertyFeatures: ['Ski-In/Ski-Out', 'Hot Tub', 'Mountain View'],
        listingAgentName: 'Olivia Martinez',
        listingAgentEmail: 'oliviaMartinez@com',
        propertyImages: [
          'https://i2.au.reastatic.net/800x600/a6fcd2fda359dec322292fbdb613b4e3b2fb6c393534d8534e5d69bc2221608c/image.jpg',
          'https://i2.au.reastatic.net/800x600/a6fcd2fda359dec322292fbdb613b4e3b2fb6c393534d8534e5d69bc2221608c/image.jpg',
          'https://i2.au.reastatic.net/800x600/a6fcd2fda359dec322292fbdb613b4e3b2fb6c393534d8534e5d69bc2221608c/image.jpg',
          'https://i2.au.reastatic.net/800x600/a6fcd2fda359dec322292fbdb613b4e3b2fb6c393534d8534e5d69bc2221608c/image.jpg',
        ],
      },
      {
        propertyId: '9',
        propertyTitle: 'Loft Apartment in San Francisco',
        propertyPrice: '$900,000',
        propertyStatus: 'Available',
        propertyBedRooms: 1,
        propertyGarageSpace: 1,
        propertyArea: 1000,
        propertyAddress: '123 Market St, San Francisco, CA',
        propertyDescription: 'A trendy loft in the heart of the city.',
        propertyFeatures: ['City View', 'Exposed Brick', 'High Ceilings'],
        listingAgentName: 'James Wilson',
        listingAgentEmail: 'jamesWilson@com',
        propertyImages: [
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
        ],
      },
      {
        propertyId: '10',
        propertyTitle: 'Historic Home in Boston',
        propertyPrice: '$2,200,000',
        propertyStatus: 'Available',
        propertyBedRooms: 4,
        propertyGarageSpace: 2,
        propertyArea: 4000,
        propertyAddress: '456 Beacon Hill, Boston, MA',
        propertyDescription: 'A beautiful historic home with modern upgrades.',
        propertyFeatures: ['Renovated Kitchen', 'Original Woodwork', 'Garden'],
        listingAgentName: 'Ava Thompson',
        listingAgentEmail: 'avaThompson@com',
        propertyImages: [
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
        ],
      },
    ],
  }

  const sampleDataSets = {
    weekly: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [
        {
          year: 2024,
          values: [
            [200, 250, 220, 240], // Sold Property
            [400, 450, 420, 440], // Listed Property
          ],
        },
        {
          year: 2023,
          values: [
            [180, 230, 210, 200], // Sold Property
            [380, 430, 410, 400], // Listed Property
          ],
        },
        {
          year: 2022,
          values: [
            [160, 220, 200, 190], // Sold Property
            [360, 410, 390, 370], // Listed Property
          ],
        },
      ],
    },
    monthly: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      data: [
        {
          year: 2024,
          values: [
            [
              2000, 2500, 2200, 2400, 2600, 2700, 3000, 3200, 3100, 3300, 3400,
              3500,
            ], // Sold Property
            [
              4000, 4500, 4200, 4400, 4600, 4700, 5000, 5200, 5100, 5300, 5400,
              5500,
            ], // Listed Property
          ],
        },
        {
          year: 2023,
          values: [
            [
              1800, 2300, 2100, 2000, 2500, 2600, 2900, 3100, 3000, 3200, 3300,
              3400,
            ], // Sold Property
            [
              3800, 4300, 4100, 4000, 4500, 4600, 4900, 5100, 5000, 5200, 5300,
              5400,
            ], // Listed Property
          ],
        },
        {
          year: 2022,
          values: [
            [
              1600, 2100, 1900, 1800, 2300, 2400, 2700, 2900, 2800, 3000, 3100,
              3200,
            ], // Sold Property
            [
              3600, 4100, 3900, 3800, 4300, 4400, 4700, 4900, 4800, 5000, 5100,
              5200,
            ], // Listed Property
          ],
        },
      ],
    },
    annually: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      data: [
        {
          year: 2024,
          values: [
            [15000, 16000, 17000, 18000, 19000], // Sold Property
            [20000, 21000, 22000, 23000, 24000], // Listed Property
          ],
        },
        {
          year: 2023,
          values: [
            [14000, 15000, 16000, 17000, 18000], // Sold Property
            [19000, 20000, 21000, 22000, 23000], // Listed Property
          ],
        },
        {
          year: 2022,
          values: [
            [13000, 14000, 15000, 16000, 17000], // Sold Property
            [18000, 19000, 20000, 21000, 22000], // Listed Property
          ],
        },
      ],
    },
  }

  useEffect(() => {
    if (year) {
      const data = properties.filter((property) => {
        return dayjs(property.propertyPostingDate).year() === year
      })
      setFilteredPorperties(data)
    }
  }, [properties, year])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <YearPickerComponent title='Properties Summary ' onChange={onChange} />
      <PerformanceOverView data={data} pageType='property' />
      <PropertyListTable
        isLoading={false}
        onDelete={(e) => {
          alert('deleteing propery with id  ' + e)
        }}
        properties={filteredPorperties}
      />
      <RecentlyProperties recentlyData={recentlyData} />
      <PropertiesChart dataSets={sampleDataSets} />
    </div>
  )
}

export default PropertiesManagement
