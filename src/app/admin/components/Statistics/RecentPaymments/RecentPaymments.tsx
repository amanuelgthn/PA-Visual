'use client'

import React, { useState, useRef } from 'react'
import './RecentPaymments.scss'
import Image from 'next/image'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'

interface Payment {
  client: string
  contact: string
  property: string
  location: string
  amount: string
  method: string
  image: string
}

const recentPayments: Payment[] = [
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    method: 'Paypal',
    image: '/dashboard/PemuRidgeApartments.jpg',
  },
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    method: 'Credit card',
    image: '/dashboard/PemuRidgeApartments2.jpg',
  },
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    method: 'Credit card',
    image: '/dashboard/PemuRidgeApartments3.jpg',
  },
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    method: 'Paypal',
    image: '/dashboard/PemuRidgeApartments4.jpg',
  },
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    method: 'Paypal',
    image: '/dashboard/PemuRidgeApartments.jpg',
  },
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    method: 'Credit card',
    image: '/dashboard/PemuRidgeApartments2.jpg',
  },
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    method: 'Credit card',
    image: '/dashboard/PemuRidgeApartments3.jpg',
  },
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    method: 'Paypal',
    image: '/dashboard/PemuRidgeApartments4.jpg',
  },
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    method: 'Paypal',
    image: '/dashboard/PemuRidgeApartments.jpg',
  },
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    method: 'Credit card',
    image: '/dashboard/PemuRidgeApartments2.jpg',
  },
]

const RecentPaymments: React.FC = () => {
  const [displayCount, setDisplayCount] = useState<number>(4)
  const paymentsRef = useRef<HTMLDivElement>(null)

  const handleToggleClick = (): void => {
    if (displayCount >= recentPayments.length) {
      setDisplayCount(4)
    } else {
      setDisplayCount((prevCount) =>
        Math.min(prevCount + 4, recentPayments.length),
      )
    }
    paymentsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='recent-payments'>
      <div className='payments-header'>
        <h2>Recent payments</h2>
        <Link href='#' className='view-all' onClick={handleToggleClick}>
          {displayCount >= recentPayments.length ? 'View less' : `View more`}
          {' (' + (recentPayments.length - displayCount) + ' more)'}
        </Link>
      </div>
      <div className='table-wrapper'>
        <table className='payments-table'>
          <thead>
            <tr>
              <th>Client</th>
              <th>Property</th>
              <th>Amount</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            {recentPayments.slice(0, displayCount).map((payment, index) => (
              <tr key={index}>
                <td>
                  <p className='client-name'>{payment.client}</p>
                  <p className='client-contact'>{payment.contact}</p>
                </td>
                <td>
                  <div className='property-info'>
                    <Image
                      src={payment.image}
                      alt='Property'
                      width={500}
                      height={500}
                      className='img'
                    />
                    <div>
                      <p className='property-name'>{payment.property}</p>
                      <p className='property-location'>
                        <FaMapMarkerAlt className='location-icon' />
                        {payment.location}
                      </p>
                    </div>
                  </div>
                </td>
                <td>{payment.amount}</td>
                <td>{payment.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='Ref' ref={paymentsRef}></div>
      </div>
    </div>
  )
}

export default RecentPaymments
