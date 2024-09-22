import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import './PropertiesChart.scss'
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
interface PropertyOverViewChartProps {
  dataSets: {
    weekly: {
      labels: string[]
      data: { year: number; values: number[][] }[]
    }
    monthly: {
      labels: string[]
      data: { year: number; values: number[][] }[]
    }
    annually: {
      labels: string[]
      data: { year: number; values: number[][] }[]
    }
  }
}

const PropertyOverViewChart: React.FC<PropertyOverViewChartProps> = ({
  dataSets,
}) => {
  const [timeFrameSold, setTimeFrameSold] = useState<
    'weekly' | 'monthly' | 'annually'
  >('monthly')
  const [timeFrameListed, setTimeFrameListed] = useState<
    'weekly' | 'monthly' | 'annually'
  >('monthly')

  const [selectedYearSold, setSelectedYearSold] = useState<dayjs.Dayjs>(dayjs())
  const [selectedYearListed, setSelectedYearListed] =
    useState<dayjs.Dayjs>(dayjs())
  const [filteredDataSold, setFilteredDataSold] = useState<number[][]>([])
  const [filteredDataListed, setFilteredDataListed] = useState<number[][]>([])

  // Chart options (same for all time frames)
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
              return `$${(context.raw as number).toLocaleString()}`
            }
            return ''
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#FFF',
          callback: function (value: unknown, index: number) {
            // Customize the label format for months
            const monthNames = [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ]
            return monthNames[index % 12] // Assuming labels are in order of months
          },
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

  // Merge data with common styles
  //   const mergedDataSets = {
  //     weekly: {
  //       labels: dataSets.weekly.labels,
  //       sold: {
  //         label: 'Sold Property',
  //         data: dataSets.weekly.data[0],
  //         ...commonDatasetStyles.weekly[0],
  //       },
  //       listed: {
  //         label: 'Listed Property',
  //         data: dataSets.weekly.data[1],
  //         ...commonDatasetStyles.weekly[1],
  //       },
  //     },
  //     monthly: {
  //       labels: dataSets.monthly.labels,
  //       sold: {
  //         label: 'Sold Property',
  //         data: dataSets.monthly.data[0],
  //         ...commonDatasetStyles.monthly[0],
  //       },
  //       listed: {
  //         label: 'Listed Property',
  //         data: dataSets.monthly.data[1],
  //         ...commonDatasetStyles.monthly[1],
  //       },
  //     },
  //     annually: {
  //       labels: dataSets.annually.labels,
  //       sold: {
  //         label: 'Sold Property',
  //         data: dataSets.annually.data[0],
  //         ...commonDatasetStyles.annually[0],
  //       },
  //       listed: {
  //         label: 'Listed Property',
  //         data: dataSets.annually.data[1],
  //         ...commonDatasetStyles.annually[1],
  //       },
  //     },
  //   }
  const mergedDataSets = {
    weekly: {
      labels: dataSets.weekly.labels,
      sold: {
        label: 'Sold Property',
        data: filteredDataSold[0] || [],
        ...commonDatasetStyles.weekly[0],
      },
      listed: {
        label: 'Listed Property',
        data: filteredDataListed[1] || [],
        ...commonDatasetStyles.weekly[1],
      },
    },
    monthly: {
      labels: dataSets.monthly.labels,
      sold: {
        label: 'Sold Property',
        data: filteredDataSold[0] || [],
        ...commonDatasetStyles.monthly[0],
      },
      listed: {
        label: 'Listed Property',
        data: filteredDataListed[1] || [],
        ...commonDatasetStyles.monthly[1],
      },
    },
    annually: {
      labels: dataSets.annually.labels,
      sold: {
        label: 'Sold Property',
        data: filteredDataSold[0] || [],
        ...commonDatasetStyles.annually[0],
      },
      listed: {
        label: 'Listed Property',
        data: filteredDataListed[1] || [],
        ...commonDatasetStyles.annually[1],
      },
    },
  }
  const handleYearChangeSold: DatePickerProps['onChange'] = (date) => {
    if (date) {
      setSelectedYearSold(date)
      // Update the data for the sold properties chart based on the selected year
    }
  }
  const handleYearChangeListed: DatePickerProps['onChange'] = (date) => {
    if (date) {
      setSelectedYearListed(date)
      // Update the data for the listed properties chart based on the selected year
    }
  }

  useEffect(() => {
    const year = selectedYearSold.year()
    const filtered = dataSets[timeFrameSold].data.find((d) => d.year === year)
    setFilteredDataSold(filtered ? filtered.values : [])
  }, [selectedYearSold, timeFrameSold, dataSets])

  useEffect(() => {
    const year = selectedYearListed.year()
    const filtered = dataSets[timeFrameListed].data.find((d) => d.year === year)
    setFilteredDataListed(filtered ? filtered.values : [])
  }, [selectedYearListed, timeFrameListed, dataSets])

  return (
    <div className='card-wrapper'>
      {/* Timeframe Buttons for Sold Properties */}
      <div className='property-chart-wraper '>
        <div className='title-buttons'>
          <h1>Sold Properties</h1>
          <div className='time-frame-buttons'>
            <button
              onClick={() => setTimeFrameSold('weekly')}
              className={timeFrameSold === 'weekly' ? 'active' : ''}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeFrameSold('monthly')}
              className={timeFrameSold === 'monthly' ? 'active' : ''}
            >
              Monthly
            </button>
            <button
              onClick={() => setTimeFrameSold('annually')}
              className={timeFrameSold === 'annually' ? 'active' : ''}
            >
              Annually
            </button>
          </div>
        </div>
        {/* Bar Chart for Sold Properties */}
        <div className='chart'>
          <Bar
            data={{
              labels: mergedDataSets[timeFrameSold].labels,
              datasets: [mergedDataSets[timeFrameSold].sold],
            }}
            options={options}
          />
        </div>
        <YearPickerComponent onChange={handleYearChangeSold} />
      </div>

      {/* Timeframe Buttons for Listed Properties */}
      <div className='property-chart-wraper e'>
        <div className='title-buttons'>
          <h1>Listed Properties</h1>
          <div className='time-frame-buttons'>
            <button
              onClick={() => setTimeFrameListed('weekly')}
              className={timeFrameListed === 'weekly' ? 'active' : ''}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeFrameListed('monthly')}
              className={timeFrameListed === 'monthly' ? 'active' : ''}
            >
              Monthly
            </button>
            <button
              onClick={() => setTimeFrameListed('annually')}
              className={timeFrameListed === 'annually' ? 'active' : ''}
            >
              Annually
            </button>
          </div>
        </div>
        {/* Bar Chart for Listed Properties */}
        <div className='chart'>
          <Bar
            data={{
              labels: mergedDataSets[timeFrameListed].labels,
              datasets: [mergedDataSets[timeFrameListed].listed],
            }}
            options={options}
          />
        </div>
        <YearPickerComponent onChange={handleYearChangeListed} />
      </div>
    </div>
  )
}

export default PropertyOverViewChart
