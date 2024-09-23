import React from 'react'
import { PropertyListTableTypes } from '../../components/ProperTyListTable/PropertyListTable'
import { ConfigProvider, Table, Image } from 'antd'
import { IoLocationOutline } from 'react-icons/io5'
import { FaEdit } from 'react-icons/fa'
import Link from 'next/link'
import './PropertyDetail.scss'

type PropertyDetailsProps = {
  property: PropertyListTableTypes | null
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  const columns = [
    {
      title: 'Location',
      key: 'location',
      render: (text: unknown, record: PropertyListTableTypes) => (
        <div className='location-wrapper'>
          <IoLocationOutline size={15} />
          <p>{record.propertyAddress}</p>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'propertyPrice',
      key: 'propertyPrice',
    },
    {
      title: 'Listing Agent',
      key: 'listingAgentName',
      render: (text: unknown, record: PropertyListTableTypes) => (
        <div className='agent-wrapper'>
          <p>{record.listingAgentName} | </p> <p>{record.listingAgentEmail}</p>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'propertyStatus',
      key: 'propertyStatus',
      render: (text: 'Available' | 'Pending' | 'Sold') => {
        let className = ''
        switch (text) {
          case 'Available':
            className = 'status-available'
            break
          case 'Pending':
            className = 'status-pending'
            break
          case 'Sold':
            className = 'status-sold'
            break
        }
        return <span className={className}>{text}</span>
      },
    },
  ]

  return (
    <main className='property-wrapper'>
      <header className='property-header'>
        <div className='image-tittle-edit-wrapper'>
          <div className='image-tittle-wrapper'>
            <Image
              src={property?.propertyImages[0]}
              alt={property?.propertyTitle}
            />
            <h1>{property?.propertyTitle}</h1>
          </div>
          <Link href={`/admin/properties/edit/${property?.propertyId}`}>
            <div className='edit-wrapper'>
              <FaEdit size={20} color='rgba(231, 141, 59, 1)' />
              <p>Edit</p>
            </div>
          </Link>
        </div>
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: 'rgba(50, 54, 56, 1)',
              borderRadius: 8,
              lineWidth: 0,
              linkDecoration: 'none',
              colorText: 'rgba(255, 255, 255, 1)',
              fontFamily: 'Montserrat',
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={property ? [property] : []}
            rowKey='propertyId'
            pagination={false}
          />
        </ConfigProvider>
      </header>
      <section className='property-section'>
        <span>
          <h1>Description</h1>
          <p>{property?.propertyDescription}</p>
        </span>
        <span>
          <h1>Features:</h1>
          <ul>
            {property?.propertyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </span>
      </section>
      <footer className='photo-wrapper'>
        <h1>Photos</h1>
        <div className='photos'>
          {property?.propertyImages.map((image, index) => (
            <Image key={index} src={image} alt={property?.propertyTitle} />
          ))}
        </div>
      </footer>
    </main>
  )
}

export default PropertyDetails
