import React, { useState } from 'react'
import './Applied.scss'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from 'recharts'

const Applied: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const minYear = 2018 // Set the minimum year
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [timeFrame, setTimeFrame] = useState('monthly')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleTimeFrameChange = (newTimeFrame: string) => {
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

  const onMouseEnter = (data: any, index: number) => {
    setActiveIndex(index)
  }

  const onMouseLeave = () => {
    setActiveIndex(null)
  }

  // Base data with all months
  const allMonths = [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 0 },
    { name: 'Mar', value: 0 },
    { name: 'Apr', value: 0 },
    { name: 'May', value: 0 },
    { name: 'Jun', value: 0 },
    { name: 'Jul', value: 0 },
    { name: 'Aug', value: 0 },
    { name: 'Sep', value: 0 },
    { name: 'Oct', value: 0 },
    { name: 'Nov', value: 0 },
    { name: 'Dec', value: 0 },
  ]

  // Mock data for the bar chart
  const monthlyDataByYear: { [year: number]: any[] } = {
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

  // Function to get data based on selected year and timeframe
  const getData = () => {
    const baseData = allMonths.map((month) => ({ ...month })) // Clone the base data

    const yearData = monthlyDataByYear[selectedYear] || []

    // Merge baseData with yearData
    yearData.forEach((monthData) => {
      const month = baseData.find((m) => m.name === monthData.name)
      if (month) {
        month.value = monthData.value
      }
    })

    if (timeFrame === 'weekly') {
      return baseData.map((month) => ({
        name: month.name,
        value: Math.round(month.value * 0.25), // Example adjustment
      }))
    } else if (timeFrame === 'monthly') {
      return baseData
    } else {
      const totalValue = baseData.reduce((sum, month) => sum + month.value, 0)
      return baseData.map((month) => ({
        name: month.name,
        value: Math.round(totalValue / 12), // Distribute total value evenly
      }))
    }
  }

  const data = getData()

  // Custom shape to control hover behavior and color change
  const CustomBar = (props: any) => {
    const { fill, x, y, width, height, index } = props
    const hoverColor = '#2A2E30' // Hover background color

    return (
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={activeIndex === index ? hoverColor : fill}
        onMouseEnter={() => onMouseEnter(props, index)}
        onMouseLeave={onMouseLeave}
      />
    )
  }

  return (
    <div className='chart-wrapper'>
      <div className='header'>
        <h1>Applied</h1>
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
            <Tooltip />
            <Bar
              className='bar'
              dataKey='value'
              fill='#C98E59'
              barSize={4}
              shape={CustomBar}
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
