import React from 'react'
import './RecentPaymments.scss'
import Image from 'next/image'

const recentPayments = [
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    image: '/dashboard/PemuRidgeApartments.jpg',
  },
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    image: '/dashboard/PemuRidgeApartments2.jpg',
  },
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    image: '/dashboard/PemuRidgeApartments3.jpg',
  },
  {
    client: 'Sam Wheeler',
    contact: '072000000 | Amynase@gmail.com',
    property: 'Pemu Ridge Apartments',
    location: 'New York, 335W, Karen center',
    amount: '$412,300',
    image: '/dashboard/PemuRidgeApartments4.jpg',
  },
]

const RecentPaymments = () => {
  return (
    <div className='recent-payments'>
      <div className='payments-header'>
        <h2>Recent payments</h2>
        <a href='#' className='view-all'>
          View all
        </a>
      </div>
      <div className='table-wrapper'>
        <table className='payments-table'>
          <thead>
            <tr>
              <th>Client</th>
              <th>Property</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recentPayments.map((payment, index) => (
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
                      objectFit='cover'
                    />
                    <div>
                      <p className='property-name'>{payment.property}</p>
                      <p className='property-location'>{payment.location}</p>
                    </div>
                  </div>
                </td>
                <td>{payment.amount}</td>
                <td>
                  <button className='dots-button'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentPaymments
