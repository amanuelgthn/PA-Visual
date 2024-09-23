'use client'
import React, { useCallback } from 'react'
import './PaymentStatus.scss'

interface StatusItem {
  label: string
  value: string
}

const statusItems: StatusItem[] = [
  { label: 'Pending', value: '5%' },
  { label: 'Credit card', value: '60%' },
  { label: 'Bank transfers', value: '60%' },
  { label: 'Failed', value: '5%' },
  { label: 'Paypal', value: '60%' },
]

const PaymentStatus: React.FC = () => {
  const calculateCompletedPercentage = useCallback(
    (items: StatusItem[]): number => {
      let positiveTotal = 0
      let negativeTotal = 0

      const positiveItems = ['Credit card', 'Paypal', 'Bank transfers']
      const negativeItems = ['Pending', 'Failed']

      items.forEach((item) => {
        if (positiveItems.includes(item.label)) {
          positiveTotal += parseFloat(item.value)
        }
        if (negativeItems.includes(item.label)) {
          negativeTotal += parseFloat(item.value)
        }
      })

      const totalCompletion = positiveTotal - negativeTotal
      const normalizedPercentage = totalCompletion / positiveItems.length

      return Math.max(0, Math.min(100, Math.round(normalizedPercentage)))
    },
    [],
  )

  const completedPercentage = calculateCompletedPercentage(statusItems)

  return (
    <div className='payment-wrapper'>
      <h2>Payments Status</h2>
      <div className='payment-status'>
        <div className='status-left'>
          <div
            className='donut'
            style={
              {
                '--percentage': `${completedPercentage}%`,
              } as React.CSSProperties
            }
          >
            <div className='inner-circle'></div>
            <div className='center-text'>{completedPercentage}%</div>
            <p className='completed-text'>Completed</p>
          </div>
        </div>

        <div className='status-right'>
          <div className='flex-1'>
            {statusItems.slice(0, 3).map((item, index) => (
              <div key={index} className='status-item'>
                <p>{item.label}</p>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          <div className='flex-2'>
            {statusItems.slice(3).map((item, index) => (
              <div key={index} className='status-item'>
                <p>{item.label}</p>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentStatus
