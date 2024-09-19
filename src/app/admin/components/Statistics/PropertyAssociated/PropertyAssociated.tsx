import React from 'react'
import './PropertyAssociated.scss'
import Image from 'next/image'

const properties = [
  {
    name: 'Pemu Ridge Apartment',
    associate: 'Amya Nase',
    date: '12.02.2024',
    amount: '$412,300',
    image: '/dashboard/PemuRidgeApartments.jpg',
  },
  {
    name: 'Pemu Ridge Apartment',
    associate: 'Amya Nase',
    date: '12.02.2024',
    amount: '$412,300',
    image: '/dashboard/PemuRidgeApartments2.jpg',
  },
  {
    name: 'Pemu Ridge Apartment',
    associate: 'Amya Nase',
    date: '12.02.2024',
    amount: '$412,300',
    image: '/dashboard/PemuRidgeApartments3.jpg',
  },
  {
    name: 'Pemu Ridge Apartment',
    associate: 'Amya Nase',
    date: '12.02.2024',
    amount: '$412,300',
    image: '/dashboard/PemuRidgeApartments4.jpg',
  },
]

const PropertyAssociated = () => {
  return (
    <div className='property-associated'>
      <div className='header'>
        <h3>Recent payments</h3>
        <a href='#' className='view-all'>
          View all
        </a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Property associated</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property, index) => (
            <tr key={index}>
              <td>
                <div className='property-info'>
                  <Image
                    src={property.image}
                    alt='Property'
                    width={500}
                    height={500}
                    objectFit='cover'
                  />
                  <div>
                    <p className='property-name'>{property.name}</p>
                    <p className='associate'>
                      {property.associate} | {property.date}
                    </p>
                  </div>
                </div>
              </td>
              <td>{property.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PropertyAssociated
