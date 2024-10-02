import React, { useState } from 'react'
import './Applied.scss'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const Applied: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const minYear = 2018
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [timeFrame, setTimeFrame] = useState<'weekly' | 'monthly' | 'annual'>(
    'monthly',
  )

  const handleTimeFrameChange = (
    newTimeFrame: 'weekly' | 'monthly' | 'annual',
  ) => {
    setTimeFrame(newTimeFrame)
  }

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

  const dataByYear: { [year: number]: { name: string; value: number }[] } = {
    2024: [
      { name: 'Jan', value: 25 },
      { name: 'Feb', value: 30 },
      { name: 'Mar', value: 35 },
      { name: 'Apr', value: 40 },
      { name: 'May', value: 45 },
      { name: 'Jun', value: 50 },
      { name: 'Jul', value: 55 },
      { name: 'Aug', value: 60 },
      { name: 'Sep', value: 65 },
      { name: 'Oct', value: 70 },
      { name: 'Nov', value: 75 },
      { name: 'Dec', value: 80 },
    ],
    2023: [
      { name: 'Jan', value: 30 },
      { name: 'Feb', value: 35 },
      { name: 'Mar', value: 40 },
      { name: 'Apr', value: 45 },
      { name: 'May', value: 50 },
      { name: 'Jun', value: 55 },
      { name: 'Jul', value: 60 },
      { name: 'Aug', value: 65 },
      { name: 'Sep', value: 70 },
      { name: 'Oct', value: 75 },
      { name: 'Nov', value: 80 },
      { name: 'Dec', value: 85 },
    ],
  }

  const getData = () => {
    const yearData = dataByYear[selectedYear] || []
    if (timeFrame === 'weekly') {
      return yearData.map((month) => ({
        name: month.name,
        value: Math.round(month.value * 0.25),
      }))
    } else if (timeFrame === 'monthly') {
      return yearData
    } else if (timeFrame === 'annual') {
      const totalValue = yearData.reduce((sum, month) => sum + month.value, 0)
      return [{ name: 'Year Total', value: totalValue }]
    }
    return yearData
  }

  const data = getData()

  return (
    <div className='chart-wrapper'>
      <div className='header'>
        <h1>Applied</h1>
        <div className='timeframe-buttons'>
          <button
            onClick={() => handleTimeFrameChange('weekly')}
            className={`weekly-button ${timeFrame === 'weekly' ? 'active' : ''}`}
          >
            Weekly
          </button>
          <button
            onClick={() => handleTimeFrameChange('monthly')}
            className={`monthly-button ${timeFrame === 'monthly' ? 'active' : ''}`}
          >
            Monthly
          </button>
          <button
            onClick={() => handleTimeFrameChange('annual')}
            className={`annual-button ${timeFrame === 'annual' ? 'active' : ''}`}
          >
            Annually
          </button>
        </div>
      </div>
      <div className='chart-container'>
        <ResponsiveContainer width='100%' height={200}>
          <BarChart data={data} barCategoryGap='30%'>
            <XAxis
              dataKey='name'
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              ticks={[20, 40, 60, 80, 100]}
              domain={[20, 100]}
              allowDataOverflow={false}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              contentStyle={{
                backgroundColor: '#2A2E30',
                color: '#f2f2f2',
                borderRadius: '0.5rem',
              }}
            />
            <Bar
              className='bar'
              dataKey='value'
              fill='#C98E59'
              barSize={4}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
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
    </div>
  )
}

export default Applied
