import React, { useEffect, useState } from 'react'
import './PropertiesViewAll.scss'
import { ConfigProvider, DatePickerProps, Image, Table } from 'antd'
import { RecentlyProperties } from '../RecentlyProperties/RecentlyProperties'
import { CiLocationOn } from 'react-icons/ci'
import { useRouter } from 'next/navigation'
import { IoIosTrendingUp, IoIosTrendingDown } from 'react-icons/io'
import YearPickerComponent from '../YearPicker/YearPicker'
import dayjs from 'dayjs'

type PropertiesViewAllProps = {
  recentlyData: {
    recentlySoldProperties: RecentlyProperties[]
    recentlyAddedProperties: RecentlyProperties[]
  }
  pageType: 'recentlySold' | 'recentlyAdded'
}

const PropertiesViewAll = ({
  recentlyData,
  pageType,
}: PropertiesViewAllProps) => {
  const router = useRouter()
  type RecentlyDataType = {
    recentlySoldProperties: RecentlyProperties[]
    recentlyAddedProperties: RecentlyProperties[]
  }
  const [year, setYear] = useState<number>(dayjs().year())
  const [recentlyDataState, setRecentlyDataState] = useState<RecentlyDataType>({
    recentlySoldProperties: [],
    recentlyAddedProperties: [],
  })

  const calculateDaysOnMarket = (property: RecentlyProperties) => {
    const today = new Date()
    const listedDate = new Date(property.createdAt!)
    const timeDifference = today.getTime() - listedDate.getTime()
    const daysDifference = timeDifference / (1000 * 3600 * 24)
    return Math.floor(daysDifference)
  }

  const filterPropertiesByYear = (
    properties: RecentlyProperties[],
    year: number,
  ) => {
    return properties.filter((property) => {
      const propertyYear = new Date(property.createdAt!).getFullYear()
      return propertyYear === year
    })
  }

  const columns = [
    {
      title: 'Property',
      dataIndex: 'propertyTitle',
      key: 'propertyTitle',
      render: (text: string, record: RecentlyProperties) => (
        <div className='property-details'>
          <Image
            src={record.propertyImages[0]}
            alt={record.propertyTitle}
            className='property-image'
            preview={false}
          />
          <div className='property-info'>
            <h1
              onClick={() =>
                router.push(`/admin/properties/${record.propertyId}`)
              }
            >
              {record.propertyTitle}
            </h1>
            <span>
              <p>{record.propertyAddress}</p>
              <CiLocationOn size={15} color='rgba(255, 255, 255, 0.5)' />
            </span>
          </div>
        </div>
      ),
    },
    pageType === 'recentlyAdded'
      ? {
          title: 'Listing Agent',
          dataIndex: 'listingAgentName',
          key: 'listingAgentName',
          render: (text: string, record: RecentlyProperties) => (
            <div className='view-all-client-details'>
              <p className='recent-client-name'>{record.listingAgentName}</p>
              <p className='recent-client-email '>{record.listingAgentEmail}</p>
            </div>
          ),
        }
      : {
          title: 'Client',
          dataIndex: 'propertyBuyerName',
          key: 'propertyBuyerName',
          render: (text: string, record: RecentlyProperties) => (
            <div className='view-all-client-details'>
              <p className='recent-client-name'>{record.propertyBuyerName}</p>
              <p className='recent-client-email '>
                {record.propertyBuyerEmail}
              </p>
            </div>
          ),
        },
    {
      title: 'Days on Market',
      dataIndex: 'daysOnMarket', // Use pre-calculated days on market
      key: 'daysOnMarket',
    },
    {
      title: 'Views',
      dataIndex: 'views',
      key: 'views',
    },
    {
      title: 'Listing Price',
      dataIndex: 'propertyPrice',
      key: 'propertyPrice',
    },
    pageType === 'recentlyAdded'
      ? {
          title: 'Neighborhood Trend',
          dataIndex: 'neiborhoodTrend',
          key: 'neiborhoodTrend',
          render: (text: string, record: RecentlyProperties) => {
            const trend = record.neiborhoodTrend || ''
            const [direction, percent] = trend.split(' ')

            return (
              <div className='neighborhood-trend'>
                <span
                  className={
                    direction === 'Up' ? 'positive-trend' : 'negative-trend'
                  }
                >
                  {direction === 'Up' ? (
                    <IoIosTrendingUp size={18} color='rgba(31, 215, 60, 1)' />
                  ) : (
                    <IoIosTrendingDown size={18} color='rgba(235, 6, 6, 1)' />
                  )}
                  <h2>{percent}</h2>
                </span>
              </div>
            )
          },
        }
      : {
          title: 'Final Price',
          dataIndex: 'finalPrice',
          key: 'finalPrice',
        },
  ]

  const data =
    pageType === 'recentlyAdded'
      ? recentlyDataState.recentlyAddedProperties.map((property) => ({
          ...property,
          daysOnMarket: calculateDaysOnMarket(property),
        }))
      : recentlyDataState.recentlySoldProperties.map((property) => ({
          ...property,
          daysOnMarket: calculateDaysOnMarket(property),
        }))

  const onChange: DatePickerProps['onChange'] = (date) => {
    const selectedYear = dayjs(date).year()
    setYear(selectedYear)

    const filteredData = {
      recentlySoldProperties: filterPropertiesByYear(
        recentlyData.recentlySoldProperties,
        selectedYear,
      ),
      recentlyAddedProperties: filterPropertiesByYear(
        recentlyData.recentlyAddedProperties,
        selectedYear,
      ),
    }

    setRecentlyDataState(filteredData)
  }

  useEffect(() => {
    if (recentlyData.recentlyAddedProperties.length > 0) {
      const filteredData = {
        recentlySoldProperties: filterPropertiesByYear(
          recentlyData.recentlySoldProperties,
          year,
        ),
        recentlyAddedProperties: filterPropertiesByYear(
          recentlyData.recentlyAddedProperties,
          year,
        ),
      }

      setRecentlyDataState(filteredData)
    }
  }, [recentlyData, year])

  return (
    <main className='recent-properties-wrapper'>
      <YearPickerComponent
        onChange={onChange}
        title={
          pageType === 'recentlyAdded'
            ? 'Properties Added '
            : 'Properties Sold '
        }
      />
      <div className='property-list'>
        <div className='card-header'>
          <h1>
            {pageType === 'recentlyAdded'
              ? 'Recently Added Properties'
              : 'Recently Sold Properties'}
          </h1>
        </div>

        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: 'rgba(50, 54, 56, 1)',
              borderRadius: 8,
              lineWidth: 0,
              linkDecoration: 'none',
              colorText: 'rgba(255, 255, 255, 1)',
              fontFamily: 'Montserrat , sans-serif',
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={data}
            rowKey='propertyId'
            pagination={false}
            className='recent-properties-table'
          />
        </ConfigProvider>
      </div>
    </main>
  )
}

export default PropertiesViewAll
