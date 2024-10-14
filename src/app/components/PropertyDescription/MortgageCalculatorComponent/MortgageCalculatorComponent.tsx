import React, { useState } from 'react'
import './MortgageCalculatorComponent.scss'
import { Pie, Line } from 'react-chartjs-2' // Import Pie and Line charts
import {
  Chart,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js'
import { Property } from '@/app/Types/property/property'

Chart.register(
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
)

type MortgageCalculatorComponentProps = {
  property: Property
}

const MortgageCalculatorComponent = ({
  property,
}: MortgageCalculatorComponentProps) => {
  const [loanAmount, setLoanAmount] = useState<number>(0)
  const [interestRate, setInterestRate] = useState<number>(0)
  const [loanTerm, setLoanTerm] = useState<number>(0)
  const [errorFiled, setErrorFiled] = useState<boolean>(false)
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0)
  const [taxes, setTaxes] = useState<number>(property.taxes ?? 0) // Provide default value for taxes
  const [insurance, setInsurance] = useState<number>(property.insurance ?? 0) // Provide default value for insurance

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    }).format(number)
  }

  const calculateMonthlyPayment = () => {
    if (!loanAmount || !interestRate || !loanTerm) {
      setErrorFiled(true)
      return
    }

    const monthlyInterestRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    // Calculate P&I (Principal and Interest)
    const monthlyPIPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))

    // Calculate monthly taxes and insurance
    const monthlyTaxes = taxes / 12
    const monthlyInsurance = insurance / 12

    // Add everything together for the total monthly payment
    const totalMonthlyPayment =
      monthlyPIPayment + monthlyTaxes + monthlyInsurance

    setErrorFiled(false)
    setMonthlyPayment(totalMonthlyPayment) // Set the total payment including taxes and insurance
  }

  const pieData = {
    labels: ['P&I', 'Taxes', 'Insurance'],
    datasets: [
      {
        label: 'Payment Breakdown',
        data: [
          monthlyPayment - (taxes / 12 + insurance / 12), // P&I only
          taxes / 12, // Monthly taxes
          insurance / 12, // Monthly insurance
        ],
        backgroundColor: ['#d18a37', '#334955', '#e8e8e8'],
        hoverBackgroundColor: ['#b87531', '#293e45', '#dcdcdc'],
      },
    ],
  }

  const peOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Payment Breakdown',
      },
    },
  }

  const lineData = {
    labels: Array.from({ length: loanTerm }, (_, i) => `${i + 1} years`), // X-axis labels for each year
    datasets: [
      {
        label: 'P&I Over Time',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        data: Array.from({ length: loanTerm }, (_) => monthlyPayment), // Use constant P&I for now, you can modify for amortization later
        backgroundColor: 'rgba(209, 138, 55, 0.4)', // Shaded background color
        borderColor: '#d18a37', // Line color
        fill: true, // Fill the area under the line
        tension: 0.4, // Curve the line for a smooth appearance
        pointRadius: 0, // No dots for each point on the graph
        borderWidth: 2, // Make the line slightly thicker
      },
    ],
  }

  const lineOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        title: {
          display: false,
          text: 'Loan Term (Years)',
          color: '#ffffff', // Axis label color
          font: {
            size: 14,
          },
        },
        ticks: {
          color: '#ffffff', // X-axis tick label color
        },
      },
      y: {
        grid: {
          color: '#444444', // Horizontal grid line color (subtle gray)
        },
        title: {
          display: false,
          text: 'Monthly Payment ($)',
          color: '#ffffff', // Axis label color
          font: {
            size: 14,
          },
        },
        ticks: {
          color: '#ffffff', // Y-axis tick label color
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (tooltipItem: any) => `$${formatNumber(tooltipItem.raw)}`, // Format tooltip as currency
        },
      },
    },
  }

  const resetValues = () => {
    setLoanAmount(0)
    setInterestRate(0)
    setLoanTerm(0)
    setMonthlyPayment(0)
    setTaxes(property.taxes ?? 0) // Reset to initial property values
    setInsurance(property.insurance ?? 0) // Reset to initial property values
    setErrorFiled(false) // Reset error state too
  }

  return (
    <div className='calculator-component-container'>
      <div className='calculator-wrapper'>
        <h1>Mortgage Calculator</h1>
        <div className='line-div'></div>
        <label>Loan Amount ($)</label>
        <input
          value={loanAmount === 0 ? '' : loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          type='number'
          className={errorFiled ? 'input-error' : ''}
        />
        <label>Interest Rate (%)</label>
        <input
          value={interestRate === 0 ? '' : interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          type='number'
          className={errorFiled ? 'input-error' : ''}
        />
        <label>Loan Term (years)</label>
        <input
          value={loanTerm === 0 ? '' : loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
          type='number'
          className={errorFiled ? 'input-error' : ''}
        />
        {monthlyPayment ? (
          <button onClick={resetValues}>Reset</button>
        ) : (
          <button onClick={calculateMonthlyPayment}>CALCULATE</button>
        )}
      </div>
      <div className='result-container'>
        <h1>RESULTS</h1>
        <Pie data={pieData} options={peOptions} />
        <div className='mortgage-info-orange'>
          <span>
            <h1>${formatNumber(monthlyPayment)}</h1>
            <h1>P & I</h1>
          </span>
        </div>
        <div className='mortgage-info-grey'>
          <div className='line-div-aqua-dark'></div>
          <span>
            <h1>${formatNumber(taxes / 12)}</h1> {/* Display monthly taxes */}
            <h2>Taxes</h2>
          </span>
        </div>
        <div className='mortgage-info-grey'>
          <div className='line-div-aqua-white'></div>
          <span>
            <h1>${formatNumber(insurance / 12)}</h1>{' '}
            {/* Display monthly insurance */}
            <h2>Insurance</h2>
          </span>
        </div>
      </div>
      <div className='line-chart-container'>
        <Line data={lineData} options={lineOptions} className='line-chart' />
        <div className='line-chart-text'>
          <h1>ESTIMATED MONTHLY PAYMENT</h1>
          <h3>${formatNumber(monthlyPayment)}</h3>{' '}
        </div>
      </div>
    </div>
  )
}

export default MortgageCalculatorComponent
