import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import './RevenueOverView.scss'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // Import Filler for fill property
  ChartOptions,
  TooltipItem,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // Register Filler
)

interface DataSet {
  labels: string[]
  data: number[]
}

interface RevenueOverViewChartProps {
  dataSets: {
    weekly: DataSet
    monthly: DataSet
    annually: DataSet
  }
}

const RevenueOverViewChart: React.FC<RevenueOverViewChartProps> = ({
  dataSets,
}) => {
  const [timeFrame, setTimeFrame] = useState<'weekly' | 'monthly' | 'annually'>(
    'monthly',
  )

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#FFF',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(201, 142, 89, 1)',
        bodyColor: '#FFF',
        titleColor: '#FFF',
        borderWidth: 1,
        cornerRadius: 6,
        padding: 10,
        callbacks: {
          label: (context: TooltipItem<'line'>) => {
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
          callback: (tickValue) => {
            if (typeof tickValue === 'number') {
              return `$${tickValue.toLocaleString()}`
            }
            return tickValue
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  }

  // Define common dataset styles
  const commonDatasetStyles = {
    backgroundColor: 'rgba(216, 216, 216, 0.5)', // Semi-transparent fill color
    borderColor: 'rgba(201, 142, 89, 1)',
    borderWidth: 3,
    tension: 0.4,
    fill: true, // Ensure fill is set to true
  }

  // Merge data with common styles
  const mergedDataSets = {
    weekly: {
      labels: dataSets.weekly.labels,
      datasets: [
        {
          label: 'Revenue',
          data: dataSets.weekly.data,
          ...commonDatasetStyles,
        },
      ],
    },
    monthly: {
      labels: dataSets.monthly.labels,
      datasets: [
        {
          label: 'Revenue',
          data: dataSets.monthly.data,
          ...commonDatasetStyles,
        },
      ],
    },
    annually: {
      labels: dataSets.annually.labels,
      datasets: [
        {
          label: 'Revenue',
          data: dataSets.annually.data,
          ...commonDatasetStyles,
        },
      ],
    },
  }

  return (
    <div className='property-overview-chart-wraper'>
      <div className='title-buttons'>
        <h1>Revenue Overview</h1>
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

      {/* Line Chart */}
      <Line data={mergedDataSets[timeFrame]} options={options} />
    </div>
  )
}

export default RevenueOverViewChart
