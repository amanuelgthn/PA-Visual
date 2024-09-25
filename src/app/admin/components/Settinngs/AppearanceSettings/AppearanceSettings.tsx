import React from 'react'
import './AppearanceSettings.scss'

const AppearanceSettings = () => {
  return (
    <div className='appearance-settings'>
      <h3>Appearance Settings</h3>
      <hr className='divider' />

      <form className='appearance-settings-form'>
        <div className='form-group'>
          <label htmlFor='theme'>Theme</label>
          <select id='theme' name='theme'>
            <option value='dark'>Dark</option>
            <option value='light'>Light</option>
          </select>
        </div>

        <div className='color-group'>
          <div className='colors'>
            <label htmlFor='primary-color'>Primary Color</label>
            <input
              type='color'
              id='primary-color'
              name='primary-color'
              value='#007BFF'
            />
          </div>
          <div className='colors'>
            <label htmlFor='secondary-color'>Secondary Color</label>
            <input
              type='color'
              id='secondary-color'
              name='secondary-color'
              value='#28A745'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AppearanceSettings
