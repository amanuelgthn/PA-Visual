import React from 'react'
import './StatisticsSummary.scss'

const years = [
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
]

const StatisticsSummary = () => {
  return (
    <div className='statistics-summary'>
      <div className='statistics-header'>
        <div className='header-left'>
          <h2>Statistics Summary</h2>
          <select>
            {years.map((year) => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </select>
        </div>
        <button className='update-button'>Update Statistics</button>
      </div>
    </div>
  )
}

export default StatisticsSummary
