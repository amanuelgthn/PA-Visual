import React, { useState } from 'react'
import './Categories.scss'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

interface CategoryData {
  name: string
  value: number
}

const COLORS = ['#C98E59', '#734124', '#839096', '#2A2E30']

const defaultData: CategoryData[] = [
  { name: 'Developers', value: 50 },
  { name: 'Designers', value: 30 },
  { name: 'Managers', value: 15 },
  { name: 'QA', value: 5 },
]

const yearData: {
  [key: number]: {
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
    monthly: defaultData,
    annual: [
      { name: 'Developers', value: 600 },
      { name: 'Designers', value: 360 },
      { name: 'Managers', value: 180 },
      { name: 'QA', value: 60 },
    ],
  },
}

const Categories: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const minYear = 2018
  const [selectedYear, setSelectedYear] = useState<number>(currentYear)
  const [timeFrame, setTimeFrame] = useState<'weekly' | 'monthly' | 'annual'>(
    'monthly',
  )
  const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(
    null,
  )

  const getData = (): CategoryData[] => {
    const year = yearData[selectedYear]
    return year ? year[timeFrame] : defaultData
  }

  const chartData = selectedCategory ? [selectedCategory] : getData()

  const handleTimeFrameChange = (
    newTimeFrame: 'weekly' | 'monthly' | 'annual',
  ) => {
    setTimeFrame(newTimeFrame)
    setSelectedCategory(null)
  }

  const handlePrevYear = () => {
    if (selectedYear > minYear) {
      setSelectedYear(selectedYear - 1)
      setSelectedCategory(null)
    }
  }

  const handleNextYear = () => {
    if (selectedYear < currentYear) {
      setSelectedYear(selectedYear + 1)
      setSelectedCategory(null)
    }
  }

  const handleCategoryClick = (category: CategoryData) => {
    setSelectedCategory(category)
  }

  return (
    <div className='chart-wrapper'>
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

      <div className='chart-container'>
        <div className='left'>
          <div className='donut-container'>
            <ResponsiveContainer width={150} height={150}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey='value'
                  nameKey='name'
                  innerRadius={72}
                  outerRadius={75}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={2}
                  stroke='none'
                >
                  {chartData.map((entry: CategoryData, index: number) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number, name: string) => [
                    `${value}%`,
                    name,
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

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

        <div className='right'>
          <div className='categories-list'>
            {getData().map((entry: CategoryData, index: number) => (
              <div
                key={index}
                className={`category-item ${
                  selectedCategory?.name === entry.name ? 'active' : ''
                }`}
                onClick={() => handleCategoryClick(entry)}
              >
                <p>{entry.name}</p>
                <h3>{entry.value}%</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
