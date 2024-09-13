import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import './PropertyOverView.scss'
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Define props interface
interface PropertyOverViewChartProps {
  dataSets: {
    weekly: {
      labels: string[]
      data: number[][]
    }
    monthly: {
      labels: string[]
      data: number[][]
    }
    annually: {
      labels: string[]
      data: number[][]
    }
  }
}

const PropertyOverViewChart: React.FC<PropertyOverViewChartProps> = ({
  dataSets,
}) => {
  const [timeFrame, setTimeFrame] = useState<'weekly' | 'monthly' | 'annually'>(
    'monthly',
  )

  // Chart options (same for all time frames)
  const options = {
    responsive: true,
    plugins: {
      legend: {
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
  const mergedDataSets = {
    weekly: {
      labels: dataSets.weekly.labels,
      datasets: dataSets.weekly.data.map((data, index) => ({
        label: index === 0 ? 'Sold Property' : 'Listed Property',
        data,
        ...commonDatasetStyles.weekly[index],
      })),
    },
    monthly: {
      labels: dataSets.monthly.labels,
      datasets: dataSets.monthly.data.map((data, index) => ({
        label: index === 0 ? 'Sold Property' : 'Listed Property',
        data,
        ...commonDatasetStyles.monthly[index],
      })),
    },
    annually: {
      labels: dataSets.annually.labels,
      datasets: dataSets.annually.data.map((data, index) => ({
        label: index === 0 ? 'Sold Property' : 'Listed Property',
        data,
        ...commonDatasetStyles.annually[index],
      })),
    },
  }

  return (
    <div className='property-overview-chart-wraper'>
      <div className='title-buttons'>
        <h1>Property Overview</h1>
        {/* Timeframe Buttons */}
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

      {/* Bar Chart */}
      <Bar data={mergedDataSets[timeFrame]} options={options} />
    </div>
  )
}

export default PropertyOverViewChart
