'use client'
import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { ChartOptions, TooltipItem } from 'chart.js'
import './RevenueOverview.scss'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

// Example dataset for multiple years
type TimeFrame = 'weekly' | 'monthly' | 'annually'

interface DataSet {
  labels: string[]
  data: number[][]
}

interface YearlyDataSet {
  weekly: DataSet
  monthly: DataSet
  annually: DataSet
}

const dataSets: Record<2022 | 2023 | 2024, YearlyDataSet> = {
  2022: {
    weekly: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [[500000, 800000, 600000, 700000, 1000000, 1100000, 900000]],
    },
    monthly: {
      labels: [
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
      ],
      data: [
        [
          800000, 1200000, 1400000, 1600000, 1900000, 1700000, 2000000, 2050000,
          1950000, 1700000, 1600000, 1500000,
        ],
      ],
    },
    annually: {
      labels: ['2018', '2019', '2020', '2021', '2022'],
      data: [[1000000, 1500000, 2000000, 2500000, 3000000]],
    },
  },
  2023: {
    weekly: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [[600000, 700000, 900000, 1000000, 1200000, 1300000, 1100000]],
    },
    monthly: {
      labels: [
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
      ],
      data: [
        [
          900000, 1400000, 1500000, 1700000, 2000000, 1800000, 2100000, 2150000,
          2050000, 1800000, 1700000, 1600000,
        ],
      ],
    },
    annually: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      data: [[1000000, 1500000, 2000000, 2500000, 3000000, 3500000]],
    },
  },
  2024: {
    weekly: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [[100000, 500000, 1500000, 1800000, 2000000, 2200000, 1900000]],
    },
    monthly: {
      labels: [
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
      ],
      data: [
        [
          100000, 1400000, 1600000, 1800000, 2050000, 2000000, 2050000, 1900000,
          1800000, 1700000, 1600000, 1500000,
        ],
      ],
    },
    annually: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      data: [[1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000]],
    },
  },
}

const RevenueOverview = () => {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('monthly')
  const [year, setYear] = useState<2022 | 2023 | 2024>(2024)

  // Chart options with price range and correct typings
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(201, 142, 89, 1)',
        titleColor: '#FFF',
        bodyColor: '#FFF',
        cornerRadius: 6,
        padding: 10,
        callbacks: {
          label: (context: TooltipItem<'line'>) =>
            `$${((context.raw as number) / 1000000).toFixed(2)}M`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#FFF',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (tickValue: string | number) => {
            const value =
              typeof tickValue === 'string' ? parseFloat(tickValue) : tickValue
            if (value >= 1000000) return `$${(value / 1000000).toFixed(-0)}M`
            return `$${(value / 1000).toFixed(0)}K`
          },
          color: '#FFF',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        position: 'right',
      },
    },
  }

  // Get the data for the selected year and timeframe
  const mergedDataSets = {
    labels: dataSets[year][timeFrame].labels,
    datasets: [
      {
        label: 'Revenue',
        data: dataSets[year][timeFrame].data[0],
        borderColor: '#c27c49',
        backgroundColor: 'rgba(216, 216, 216, 0.2)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#c27c49',
      },
    ],
  }

  const handleYearChange = (direction: string) => {
    if (direction === 'prev' && year > 2022) {
      setYear((prev) =>
        prev === 2022 ? prev : ((prev - 1) as 2022 | 2023 | 2024),
      )
    } else if (direction === 'next' && year < 2024) {
      setYear((prev) =>
        prev === 2024 ? prev : ((prev + 1) as 2022 | 2023 | 2024),
      )
    }
  }

  return (
    <div className='revenue-overview'>
      <div className='header'>
        <h3>Revenue Overview</h3>
        <div className='controls'>
          <button
            className={`control-btn ${timeFrame === 'weekly' ? 'active' : ''}`}
            onClick={() => setTimeFrame('weekly')}
          >
            Weekly
          </button>
          <button
            className={`control-btn ${timeFrame === 'monthly' ? 'active' : ''}`}
            onClick={() => setTimeFrame('monthly')}
          >
            Monthly
          </button>
          <button
            className={`control-btn ${timeFrame === 'annually' ? 'active' : ''}`}
            onClick={() => setTimeFrame('annually')}
          >
            Annually
          </button>
        </div>
      </div>
      <div className='chart-container'>
        <Line data={mergedDataSets} options={options} />
      </div>
      <div className='year-selector'>
        <button onClick={() => handleYearChange('prev')}>&lt;</button>
        <span>{year}</span>
        <button onClick={() => handleYearChange('next')}>&gt;</button>
      </div>
    </div>
  )
}

export default RevenueOverview
