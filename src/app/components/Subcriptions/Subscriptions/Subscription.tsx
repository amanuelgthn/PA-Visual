'use client'
import React, { useState } from 'react'
import './Subscription.scss'
import Image from 'next/image'
import SubscriptionCards from '../SubscriptionCard/SubscriptionCards'
import FaqSection from '../FaqSection/FaqSection'
import Link from 'next/link'

const Subscription = () => {
  const [activePlan, setActivePlan] = useState('monthly')

  return (
    <main>
      <div className='text-button'>
        <Image
          src='/subscription/security-icon.png'
          alt='security-icons'
          width={78}
          height={81}
        />
        <h1>SUBSCRIBE</h1>
        <p>And a subheading describing your pricing plans, too</p>
        <div className='plan'>
          <button
            className={activePlan === 'monthly' ? 'monthly' : 'annual'}
            onClick={() => {
              setActivePlan('monthly')
            }}
          >
            Monthly plans
          </button>
          <button
            className={activePlan === 'monthly' ? 'annual' : 'monthly'}
            onClick={() => {
              setActivePlan('annual')
            }}
          >
            Annual plans
          </button>
        </div>
      </div>
      <SubscriptionCards plan={activePlan} />
      <FaqSection />
      <div className='still-question'>
        <div className='question-text'>
          <h1>Still have questions?</h1>
          <p>
            Can’t find the answer you’re looking for? Please get in touch with
            our team.
          </p>
        </div>
        <Link href='/Contact'>
          <button>
            Get in touch
            <img src='/subscription/arrow.png' alt='arrow icons' />
          </button>
        </Link>
      </div>
    </main>
  )
}

export default Subscription
