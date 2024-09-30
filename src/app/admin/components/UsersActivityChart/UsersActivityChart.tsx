import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import './UsersActivityChart.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js'
import YearPickerComponent from '../YearPicker/YearPicker'
import dayjs from 'dayjs'
import { DatePickerProps } from 'antd'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Define props interface
interface UserAcitivityChartProps {
  dataSets: {
    weekly: {
      labels: string[]
      data: { year: number; values: number[][] }[]
      totalData: {
        users: number
        revenue: number
        propertySold: number
        propertyReviewed: number
      }
    }
    monthly: {
      labels: string[]
      data: { year: number; values: number[][] }[]
      totalData: {
        users: number
        revenue: number
        propertySold: number
        propertyReviewed: number
      }
    }
    annually: {
      labels: string[]
      data: { year: number; values: number[][] }[]
      totalData: {
        users: number
        revenue: number
        propertySold: number
        propertyReviewed: number
      }
    }
  }
}

const UsersActivityChart = ({ dataSets }: UserAcitivityChartProps) => {
  const [timeFrame, setTimeFrame] = useState<'weekly' | 'monthly' | 'annually'>(
    'monthly',
  )
  const [selectedYear, setSelectedYear] = useState<dayjs.Dayjs>(dayjs())
  const [filteredData, setFilteredData] = useState<number[][]>([])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom' as const,
        labels: {
          color: '#FFF',
        },
      },
      title: {
        display: false,
        text: 'Property Overview',
        color: '#FFF',
        font: {
          size: 16,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(201, 142, 89, 1)',
        titleColor: '#FFF',
        bodyColor: '#FFF',
        borderColor: '#FFF',
        borderWidth: 1,
        cornerRadius: 6,
        padding: 10,
        callbacks: {
          label: (context: TooltipItem<'bar'>) => {
            if (context.raw !== undefined) {
              return `${(context.raw as number).toLocaleString()}`
            }
            return ''
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          display: false, // Hide x-axis labels
          color: '#FFF',
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#FFF',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  }

  // Define common dataset styles
  const commonDatasetStyles = {
    weekly: [
      {
        backgroundColor: '#D8956E',
        borderColor: '#D8956E',
        borderWidth: 1,
        barThickness: 10,
      },
      {
        backgroundColor: '#BDBDBD',
        borderColor: '#BDBDBD',
        borderWidth: 1,
        barThickness: 10,
      },
    ],
    monthly: [
      {
        backgroundColor: 'rgba(191, 134, 84, 1)',
        borderColor: '#D8956E',
        borderWidth: 0,
        barThickness: 10,
        borderRadius: 5,
      },
      {
        backgroundColor: 'rgba(130, 130, 130, 1)',
        borderColor: '#BDBDBD',
        borderWidth: 0,
        barThickness: 10,
        borderRadius: 5,
      },
    ],
    annually: [
      {
        backgroundColor: '#D8956E',
        borderColor: '#D8956E',
        borderWidth: 1,
        barThickness: 10,
      },
      {
        backgroundColor: '#BDBDBD',
        borderColor: '#BDBDBD',
        borderWidth: 1,
        barThickness: 10,
      },
    ],
  }

  const mergedDataSets = {
    weekly: {
      labels: dataSets.weekly.labels,
      users: {
        label: 'Recent users',
        data: filteredData[0] || [],
        ...commonDatasetStyles.weekly[0],
      },
    },
    monthly: {
      labels: dataSets.monthly.labels,
      users: {
        label: 'Recent users',
        data: filteredData[1] || [],
        ...commonDatasetStyles.monthly[0],
      },
    },
    annually: {
      labels: dataSets.annually.labels,
      users: {
        label: 'Recent users',
        data: filteredData[1] || [],
        ...commonDatasetStyles.annually[0],
      },
    },
  }

  const handleYearChange: DatePickerProps['onChange'] = (date) => {
    if (date) {
      setSelectedYear(date)
      // Update the data for the listed properties chart based on the selected year
    }
  }

  useEffect(() => {
    const year = selectedYear.year()
    const filtered = dataSets[timeFrame].data.find((item) => item.year === year)
    if (filtered) {
      setFilteredData(filtered.values)
    }
  }, [timeFrame, selectedYear, dataSets])

  const totalData = dataSets[timeFrame].totalData

  return (
    <div className='chart-container-specific'>
      <div className='property-chart-wraper-user'>
        <div className='title-buttons'>
          <h1>Recent Activity</h1>

          <div className='time-frame-buttons'>
            <button
              onClick={() => setTimeFrame('weekly')}
              className={timeFrame === 'weekly' ? 'active' : ''}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeFrame('monthly')}
              className={timeFrame === 'monthly' ? 'active' : ''}
            >
              Monthly
            </button>
            <button
              onClick={() => setTimeFrame('annually')}
              className={timeFrame === 'annually' ? 'active' : ''}
            >
              Annually
            </button>
          </div>
        </div>
        <div className='date-picker-text-wrapper'>
          <span>
            <p>(+23)</p>
            <h1> than last week</h1>
          </span>

          <YearPickerComponent onChange={handleYearChange} />
        </div>
        <div className='chart'>
          <Bar
            className='chart-bar-user'
            data={{
              labels: mergedDataSets[timeFrame].labels,
              datasets: [
                {
                  label: 'Recent users',
                  data: mergedDataSets[timeFrame].users.data,
                  ...commonDatasetStyles[timeFrame][0],
                },
              ],
            }}
            options={options}
          />
        </div>
      </div>
      <div className='chart-container-specific-footer'>
        <div className='footer-item'>
          <h1>Users</h1>
          <p>{totalData.users}</p>
        </div>
        <div className='footer-item'>
          <h1>Revenue</h1>
          <p>{totalData.revenue}m</p>
        </div>
        <div className='footer-item'>
          <h1>Property Sold</h1>
          <p>${totalData.propertySold}</p>
        </div>
        <div className='footer-item'>
          <h1>Property Reviewed</h1>
          <p>{totalData.propertyReviewed}</p>
        </div>
      </div>
    </div>
  )
}

export default UsersActivityChart
