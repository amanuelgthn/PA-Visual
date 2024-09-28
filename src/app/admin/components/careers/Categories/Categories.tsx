// Categories.tsx
import React, { useState } from 'react'
import './Categories.scss'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

interface CategoryData {
  name: string
  value: number
}

interface CategoriesProps {
  data?: CategoryData[] // Made data optional
}

const COLORS = ['#C98E59', '#734124', '#839096', '#2A2E30']

const defaultData: CategoryData[] = [
  { name: 'Developers', value: 50 },
  { name: 'Designers', value: 30 },
  { name: 'Managers', value: 15 },
  { name: 'QA', value: 5 },
]

const Categories: React.FC<CategoriesProps> = ({ data = defaultData }) => {
  // State for selected year and timeframe
  const currentYear = new Date().getFullYear()
  const minYear = 2018 // Set the minimum year
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [timeFrame, setTimeFrame] = useState<'weekly' | 'monthly' | 'annual'>(
    'monthly',
  )

  // Mock data by year and timeframe (Replace with real data fetching logic)
  const dataByYear: {
    [year: number]: {
      weekly: CategoryData[]
      monthly: CategoryData[]
      annual: CategoryData[]
    }
  } = {
    2024: {
      weekly: [
        { name: 'Developers', value: 12 },
        { name: 'Designers', value: 8 },
        { name: 'Managers', value: 4 },
        { name: 'QA', value: 1 },
      ],
      monthly: [
        { name: 'Developers', value: 50 },
        { name: 'Designers', value: 30 },
        { name: 'Managers', value: 15 },
        { name: 'QA', value: 5 },
      ],
      annual: [
        { name: 'Developers', value: 600 },
        { name: 'Designers', value: 360 },
        { name: 'Managers', value: 180 },
        { name: 'QA', value: 60 },
      ],
    },
    2023: {
      weekly: [
        { name: 'Developers', value: 15 },
        { name: 'Designers', value: 10 },
        { name: 'Managers', value: 5 },
        { name: 'QA', value: 2 },
      ],
      monthly: [
        { name: 'Developers', value: 60 },
        { name: 'Designers', value: 36 },
        { name: 'Managers', value: 18 },
        { name: 'QA', value: 6 },
      ],
      annual: [
        { name: 'Developers', value: 720 },
        { name: 'Designers', value: 432 },
        { name: 'Managers', value: 216 },
        { name: 'QA', value: 72 },
      ],
    },
    // Add more years as needed
  }

  // Function to get data based on selected year and timeframe
  const getData = () => {
    const yearData = dataByYear[selectedYear]
    if (yearData) {
      return yearData[timeFrame]
    }
    return defaultData
  }

  const chartData = getData()

  // Handlers for timeframe buttons
  const handleTimeFrameChange = (
    newTimeFrame: 'weekly' | 'monthly' | 'annual',
  ) => {
    setTimeFrame(newTimeFrame)
  }

  // Handlers for year selection buttons
  const handlePrevYear = () => {
    if (selectedYear > minYear) {
      setSelectedYear(selectedYear - 1)
    }
  }

  const handleNextYear = () => {
    if (selectedYear < currentYear) {
      setSelectedYear(selectedYear + 1)
    }
  }

  return (
    <div className='chart-wrapper'>
      {/* Header with Title and Timeframe Buttons */}
      <div className='header'>
        <h1>Categories</h1>
        <div className='timeframe-buttons'>
          <button
            onClick={() => handleTimeFrameChange('weekly')}
            className={timeFrame === 'weekly' ? 'active' : ''}
          >
            Weekly
          </button>
          <button
            onClick={() => handleTimeFrameChange('monthly')}
            className={timeFrame === 'monthly' ? 'active' : ''}
          >
            Monthly
          </button>
          <button
            onClick={() => handleTimeFrameChange('annual')}
            className={timeFrame === 'annual' ? 'active' : ''}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Chart and Categories Container */}
      <div className='chart-container'>
        {/* Left Side: Donut Chart and Year Selector */}
        <div className='left'>
          <ResponsiveContainer width={150} height={150}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey='value'
                nameKey='name'
                innerRadius={60}
                outerRadius={75}
                startAngle={90}
                endAngle={-270}
                paddingAngle={2}
                stroke='none'
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number, name: string) => [`${value}%`, name]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Year Selector */}
          <div className='year-selector'>
            <button onClick={handlePrevYear} disabled={selectedYear <= minYear}>
              {'<'}
            </button>
            <span>{selectedYear}</span>
            <button
              onClick={handleNextYear}
              disabled={selectedYear >= currentYear}
            >
              {'>'}
            </button>
          </div>
        </div>

        {/* Right Side: Categories List */}
        <div className='right'>
          <div className='categories-list'>
            {chartData.length > 0 ? (
              chartData.map((entry, index) => (
                <div className='category-item' key={index}>
                  <p>{entry.name}</p>
                  <h3>{entry.value}%</h3>
                </div>
              ))
            ) : (
              <p>No data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
