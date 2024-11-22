import React from 'react'
import Subscription from '../components/Subcriptions/Subscriptions/Subscription'
import './Subscription.scss'

const subscriptionPage = () => {
  return (
    <div id='bg-sub' className='wrapper'>
      <div className='wrapper-assist'>
        <Subscription />
      </div>
    </div>
  )
}
export default subscriptionPage
