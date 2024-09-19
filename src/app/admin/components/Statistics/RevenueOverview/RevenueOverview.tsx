import React from 'react'
import './RevenueOverview.scss'

const RevenueOverview = () => {
  return (
    <div className='revenue-overview'>
      <div className='header'>
        <h3>Revenue Overview</h3>
        <div className='controls'>
          <button className='control-btn'>Weekly</button>
          <button className='control-btn active'>Monthly</button>
          <button className='control-btn'>Annually</button>
        </div>
      </div>
      <div className='chart'>
        {/* You would integrate a charting library here like Chart.js or ApexCharts */}
        <div className='chart-placeholder'>
          <p>$2.05M</p>
          {/* Placeholder for chart */}
        </div>
      </div>
      <div className='year-selector'>
        <button>&lt;</button>
        <span>2024</span>
        <button>&gt;</button>
      </div>
    </div>
  )
}

export default RevenueOverview
