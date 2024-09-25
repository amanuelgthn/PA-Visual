import React from 'react'
import './NotificationSettings.scss'

const NotificationSettings = () => {
  return (
    <div className='notification-settings'>
      <h3>Notification Settings</h3>
      <hr className='divider' />

      <form className='notification-settings-form'>
        <div className='form-group'>
          <label htmlFor='email-notifications'>
            Enable Email Notifications:
          </label>
          <input
            type='checkbox'
            id='email-notifications'
            className='custom-slider'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='push-notifications'>Enable Push Notifications:</label>
          <input
            type='checkbox'
            id='push-notifications'
            className='custom-slider'
          />
        </div>
      </form>
    </div>
  )
}

export default NotificationSettings
