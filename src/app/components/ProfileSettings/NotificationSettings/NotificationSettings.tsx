'use client'
import React, { useState } from 'react'
import './NotificationSettings.scss'

const NotificationSettings = () => {
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [smsNotification, setSmsNotification] = useState(false)
  const [propertyUpdates, setPropertyUpdates] = useState(true)

  return (
    <div className='notification-settings'>
      <h3>Notification Settings</h3>

      <div className='notification-item'>
        <p>Email Alerts</p>
        <label className='switch'>
          <input
            type='checkbox'
            checked={emailAlerts}
            onChange={() => setEmailAlerts(!emailAlerts)}
            aria-label={`Email alerts ${emailAlerts ? 'enabled' : 'disabled'}`}
          />
          <span className='slider'></span>
        </label>
      </div>

      <div className='notification-item'>
        <p>SMS Notification</p>
        <label className='switch'>
          <input
            type='checkbox'
            checked={smsNotification}
            onChange={() => setSmsNotification(!smsNotification)}
            aria-label={`SMS notifications ${smsNotification ? 'enabled' : 'disabled'}`}
          />
          <span className='slider'></span>
        </label>
      </div>

      <div className='notification-item'>
        <p>Property Updates</p>
        <label className='switch'>
          <input
            type='checkbox'
            checked={propertyUpdates}
            onChange={() => setPropertyUpdates(!propertyUpdates)}
            aria-label={`Property updates ${propertyUpdates ? 'enabled' : 'disabled'}`}
          />
          <span className='slider'></span>
        </label>
      </div>
    </div>
  )
}

export default NotificationSettings
