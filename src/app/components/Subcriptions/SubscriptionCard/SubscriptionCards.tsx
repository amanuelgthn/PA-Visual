import React from 'react'
import './SubscriptionCards.scss'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

type CardPlanProps = {
  plan: string
}

const SubscriptionCards = ({ plan }: CardPlanProps) => {
  const cardPlans = [
    {
      name: 'BASIC',
      price: plan === 'monthly' ? '$10' : '$100',
      isPopular: false,
      headerDescription: 'Basic card description',
      includes: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      name: 'PLATINUM',
      price: plan === 'monthly' ? '$20' : '$200',
      isPopular: true,
      headerDescription: 'Platinum card description',
      includes: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      name: 'DIAMOND',
      price: plan === 'monthly' ? '$30' : '$300',
      isPopular: false,
      headerDescription: 'Diamond card description',
      includes: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
  ]

  const getDottClass = (planName: string) => {
    switch (planName) {
      case 'BASIC':
        return 'dott basic'
      case 'PLATINUM':
        return 'dott platinum'
      case 'DIAMOND':
        return 'dott diamond'
      default:
        return 'dott'
    }
  }

  const getSvgClass = (planName: string, index: number) => {
    switch (planName) {
      case 'BASIC':
        return index < 2 ? 'svg-green' : ''
      case 'PLATINUM':
        return index < 3 ? 'svg-green' : ''
      case 'DIAMOND':
        return 'svg-green'
      default:
        return ''
    }
  }

  return (
    <div className='card-wraper'>
      {cardPlans.map((plan, index) => (
        <div key={index} className='card-container'>
          <div className='card-header'>
            <div className={getDottClass(plan.name)}></div>
            <h1>{plan.name}</h1>
            <p>{plan.headerDescription}</p>
          </div>
          <div className='card-content'>
            <span>
              <h1>{plan.price}</h1>
              <p>per month</p>
            </span>
            <button>Get Started</button>
          </div>
          <div className='card-footer'>
            <h1>What’s included</h1>
            <ul>
              {plan.includes.map((include, index) => (
                <li key={index}>
                  {getSvgClass(plan.name, index) ? (
                    <IoIosCheckmarkCircle size={20} fill='green' />
                  ) : (
                    <IoIosCheckmarkCircleOutline size={20} />
                  )}
                  {include}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SubscriptionCards
