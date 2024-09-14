import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
)

interface StatCardProps {
  region: string
  percentageChange: string
  data: number[] // For the line chart
  isPositive: boolean
}

const StatCard: React.FC<StatCardProps> = ({
  region,
  percentageChange,
  data,
  isPositive,
}) => {
  const chartData = {
    labels: data.map((_, index) => index.toString()), // X axis as indices
    datasets: [
      {
        data: data,
        fill: true,
        backgroundColor: 'rgba(255, 180, 76, 0.1)', // Slight fill
        borderColor: isPositive ? '#C98E59' : '#e74c3c', // Color based on positive/negative
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    scales: {
      x: { display: false }, // Hide x-axis
      y: { display: false }, // Hide y-axis
    },
    plugins: {
      legend: { display: false }, // Disable legend
      tooltip: { enabled: false }, // Disable tooltips
    },
    elements: {
      point: { radius: 0 }, // Remove points for a cleaner look
    },
  }

  return (
    <div className='stat-card'>
      <div className='card-content'>
        <h4>Properties in {region}</h4>
        <p className={`percentage ${isPositive ? 'positive' : 'negative'}`}>
          {percentageChange}
        </p>
      </div>
      <div className='chart'>
        <Line data={chartData} options={options} />
      </div>
    </div>
  )
}

export default StatCard
