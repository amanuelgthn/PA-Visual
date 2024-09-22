import React from 'react'
import { Table, ConfigProvider, Popover } from 'antd'
import './PropertyListTable.scss'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Link from 'next/link'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { IoLocationOutline } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

export type PropertyListTableTypes = {
  propertyId: string
  propertyTitle: string
  propertyType: string
  propertyAddress: string
  propertyPrice: string
  propertyStatus: 'Available' | 'Pending' | 'Sold'
  propertyImages: string[]
  listingAgent: string
  listingAgentId: string
  listingAgentEmail: string
  listingAgentName: string
  propertyDescription: string
  propertyFeatures: string[]
  propertyBedRooms: number
  propertyGarageSpace: number
  propertyArea: number
  propertyPostingDate: string
}

type PropertyListTableProps = {
  properties: PropertyListTableTypes[]
  isLoading: boolean
  onDelete: (propertyId: string) => void
  // onEdit: (propertyId: string) => void
}

const PropertyListTable = ({
  properties,
  isLoading,
  onDelete,
  // onEdit,
}: PropertyListTableProps) => {
  const router = useRouter()
  const columns = [
    {
      title: 'Property',
      key: 'property',
      render: (text: unknown, record: PropertyListTableTypes) => (
        <div className='img-title-wrapper'>
          <img
            src={record.propertyImages[0]}
            alt={record.propertyTitle}
            width={50}
            height={40}
          />
          <div>
            <Link
              className='link'
              href={`/admin/properties/${record.propertyId}`}
            >
              <h1>{record.propertyTitle}</h1>
            </Link>
            <div className='address-wrapper'>
              <IoLocationOutline size={15} color='rgba(255, 255, 255, 0.5)' />
              <p>{record.propertyAddress}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Listing Agent',
      key: 'listingAgentName',
      render: (text: unknown, record: PropertyListTableTypes) => (
        <div className='img-title-wrapper'>
          <div>
            <h1>{record.listingAgentName}</h1>
            <span className='agent-span'>
              <p>{record.listingAgentId} | </p>{' '}
              <p>{record.listingAgentEmail}</p>
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'propertyPrice',
      key: 'propertyPrice',
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
    {
      title: '',
      key: 'actions',
      render: (text: unknown, record: PropertyListTableTypes) => (
        <Popover
          color='rgba(104, 110, 114, 1)'
          content={
            <div className='popover-conent'>
              <span
                onClick={() => {
                  router.push(`/admin/properties/edit/${record.propertyId}`)
                }}
              >
                <CiEdit size={18} />
                <p>Edit</p>
              </span>
              <span>
                <RiDeleteBin5Line
                  onClick={() => onDelete(record.propertyId)}
                  size={18}
                />
                <p>Delete</p>
              </span>
            </div>
          }
          trigger='click'
        >
          <BsThreeDotsVertical className='dott' />
        </Popover>
      ),
    },
  ]
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: 'rgba(50, 54, 56, 1)',
          borderRadius: 8,
          lineWidth: 0,
          linkDecoration: 'none',
          colorText: 'rgba(255, 255, 255, 1)',
        },
      }}
    >
      <Table
        columns={columns}
        dataSource={properties}
        loading={isLoading}
        pagination={false}
      />
    </ConfigProvider>
  )
}

export default PropertyListTable
