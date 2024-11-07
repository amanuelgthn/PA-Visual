'use client'

import React, { useEffect, useState } from 'react'
import { RecentlyPropertiesProps } from '../../components/RecentlyProperties/RecentlyProperties'
import PropertiesViewAll from '../../components/PropertiesViewAll/PropertiesViewAll'

const ClientSideViewAllProperties = () => {
  const [type, setType] = useState<string | null>(null)

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    setType(searchParams.get('type'))
  }, [])

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
        views: 120,
        finalPrice: '$3,400,000',
        neiborhoodTrend: 'Down 5%',
        createdAt: '2023-06-01',
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
        views: 150,
        finalPrice: '$1,150,000',
        neiborhoodTrend: 'Down 3%',
        createdAt: '2023-06-05',
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
        views: 90,
        finalPrice: '$740,000',
        neiborhoodTrend: 'Up 2%',
        createdAt: '2022-06-10',
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
        createdAt: '2024-06-15',
        finalPrice: '$440,000',
        views: 80,
        neiborhoodTrend: 'Down 3%',
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
        views: 200,
        finalPrice: '$2,750,000',
        neiborhoodTrend: 'Down 7%',
        createdAt: '2024-06-20',
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
        views: 50,
        neiborhoodTrend: 'Up 1%',
        finalPrice: '$640,000',
        propertyImages: [
          'https://i2.au.reastatic.net/800x600/ad30b4d19361c6cca90d80fbedc9751f4fc9dec9a34a5fd02c13b316b3e82544/image.jpg',
          'https://i2.au.reastatic.net/800x600/ad30b4d19361c6cca90d80fbedc9751f4fc9dec9a34a5fd02c13b316b3e82544/image.jpg',
        ],
        createdAt: '2023-06-25',
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
        views: 80,
        neiborhoodTrend: 'Down 3%',
        finalPrice: '$1,450,000',
        propertyImages: [
          'https://i2.au.reastatic.net/800x600/75df40224d7035806418b0166e677b4601780e4aec5054c10f4e18728e1315ca/image.jpg',
          'https://i2.au.reastatic.net/800x600/75df40224d7035806418b0166e677b4601780e4aec5054c10f4e18728e1315ca/image.jpg',
          'https://i2.au.reastatic.net/800x600/75df40224d7035806418b0166e677b4601780e4aec5054c10f4e18728e1315ca/image.jpg',
          'https://i2.au.reastatic.net/800x600/75df40224d7035806418b0166e677b4601780e4aec5054c10f4e18728e1315ca/image.jpg',
        ],
        createdAt: '2023-06-30',
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
        views: 100,
        neiborhoodTrend: 'Up 4%',
        finalPrice: '$1,750,000',
        propertyImages: [
          'https://i2.au.reastatic.net/800x600/a6fcd2fda359dec322292fbdb613b4e3b2fb6c393534d8534e5d69bc2221608c/image.jpg',
          'https://i2.au.reastatic.net/800x600/a6fcd2fda359dec322292fbdb613b4e3b2fb6c393534d8534e5d69bc2221608c/image.jpg',
          'https://i2.au.reastatic.net/800x600/a6fcd2fda359dec322292fbdb613b4e3b2fb6c393534d8534e5d69bc2221608c/image.jpg',
          'https://i2.au.reastatic.net/800x600/a6fcd2fda359dec322292fbdb613b4e3b2fb6c393534d8534e5d69bc2221608c/image.jpg',
        ],
        createdAt: '2023-07-05',
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
        views: 70,
        neiborhoodTrend: 'Up 2%',
        finalPrice: '$890,000',
        propertyImages: [
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
        ],
        createdAt: '2024-07-10',
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
        views: 60,
        neiborhoodTrend: 'Down 3%',
        finalPrice: '$2,150,000',
        propertyImages: [
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
          'https://rimh2.domainstatic.com.au/iPU_f8ZMJ3sJdYRPG-4ej0PH4LY=/610x480/filters:format(png):quality(80):no_upscale()/2017885432_1_1_220621_092015-w2560-h1709',
        ],
        createdAt: '2024-07-15',
      },
    ],
  }

  if (!type) {
    return null
  }

  return (
    <main>
      <PropertiesViewAll
        recentlyData={recentlyData}
        pageType={type as 'recentlySold' | 'recentlyAdded'}
      />
    </main>
  )
}

export default ClientSideViewAllProperties
