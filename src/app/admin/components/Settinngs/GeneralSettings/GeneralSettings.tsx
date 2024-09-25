import React from 'react'
import './GeneralSettings.scss'

const GeneralSettings = () => {
  return (
    <div className='general-settings'>
      <h3>General Settings</h3>
      <hr className='divider' />
      <form className='general-settings-form'>
        <div className='form-group'>
          <label htmlFor='site-name'>Site Name:</label>
          <input type='text' id='site-name' value='Global Property Admin' />
        </div>

        <div className='form-group'>
          <label htmlFor='site-description'>Site Description:</label>
          <textarea
            id='site-description'
            value='Manage global properties efficiently with our admin panel.'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='admin-email'>Admin Email:</label>
          <input
            type='email'
            id='admin-email'
            value='admin@globalproperty.com'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='change-password'>Change Password:</label>
          <input
            type='password'
            id='change-password'
            placeholder='Leave blank to keep current password'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='confirm-password'>Confirm Password:</label>
          <input
            type='password'
            id='confirm-password'
            placeholder='Leave blank to keep current password'
          />
        </div>
      </form>
    </div>
  )
}

export default GeneralSettings
