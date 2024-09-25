import React from 'react'
import './SecuritySettings.scss'

const SecuritySettings = () => {
  return (
    <div className='security-settings'>
      <h3>Security Settings</h3>
      <hr className='divider' />

      <form className='security-settings-form'>
        <div className='form-group'>
          <label htmlFor='two-factor-auth'>
            Enable Two-Factor Authentication:
          </label>
          <input
            type='checkbox'
            id='two-factor-auth'
            className='custom-slider'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='session-timeout'>Session Timeout (minutes):</label>
          <input type='number' id='session-timeout' value='30' />
        </div>
      </form>
    </div>
  )
}

export default SecuritySettings
