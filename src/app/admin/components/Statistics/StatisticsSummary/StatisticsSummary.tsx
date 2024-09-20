'use client'
import React, { useState } from 'react'
import './StatisticsSummary.scss'

const years = [
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
]

interface StatisticsSummaryProps {
  onYearChange: (year: string) => void
}

const StatisticsSummary: React.FC<StatisticsSummaryProps> = ({
  onYearChange,
}) => {
  const [selectedYear, setSelectedYear] = useState<string>(years[0].value)

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    setSelectedYear(event.target.value)
  }

  const handleUpdateClick = () => {
    onYearChange(selectedYear)
  }

  return (
    <div className='statistics-summary'>
      <div className='statistics-header'>
        <div className='header-left'>
          <h2>Statistics Summary</h2>
          <select value={selectedYear} onChange={handleYearChange}>
            {years.map((year) => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </select>
        </div>
        <button className='update-button' onClick={handleUpdateClick}>
          Update Statistics
        </button>
      </div>
    </div>
  )
}

export default StatisticsSummary
