'use client'
import PropertyForms from '@/app/admin/components/PropertyForms/PropertyForms'
import { PropertyListTableTypes } from '@/app/admin/components/ProperTyListTable/PropertyListTable'
import React, { useEffect, useMemo, useState } from 'react'

type ParamsType = {
  propertyId: string
}

const EditPorperty = ({ params }: { params: ParamsType }) => {
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
  const [initialData, setInitialData] = useState<
    PropertyListTableTypes | undefined
  >(undefined)

  useEffect(() => {
    const property = properties.find(
      (property) => property.propertyId === params.propertyId,
    )
    if (property) {
      setInitialData(property)
    }
  }, [params.propertyId, properties])

  return (
    <div>
      <PropertyForms initialData={initialData} />
    </div>
  )
}

export default EditPorperty
