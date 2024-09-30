import React, { useState, useEffect } from 'react'
import './AppearanceSettings.scss'
import { AppearanceSettingsType } from '@/app/Types/DashbaordSettings/SettingsType'

interface AppearanceSettingsProps {
  settings: AppearanceSettingsType
  onSave: (data: Partial<AppearanceSettingsType>) => void
}

const AppearanceSettings: React.FC<AppearanceSettingsProps> = ({
  settings,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    theme: settings.theme,
    primaryColor: settings.primaryColor,
    secondaryColor: settings.secondaryColor,
  })

  useEffect(() => {
    setFormData({
      theme: settings.theme,
      primaryColor: settings.primaryColor,
      secondaryColor: settings.secondaryColor,
    })
  }, [settings])

  // Handle input changes dynamically and save immediately
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target

    // Update local state
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))

    // Immediately save changes
    onSave({
      ...formData,
      [id]: value,
    })
  }

  return (
    <div className='appearance-settings'>
      <h3>Appearance Settings</h3>
      <hr className='divider' />

      <form className='appearance-settings-form'>
        <div className='form-group'>
          <label htmlFor='theme'>Theme</label>
          <select
            id='theme'
            name='theme'
            value={formData.theme}
            onChange={handleChange}
          >
            <option value='dark'>Dark</option>
            <option value='light'>Light</option>
          </select>
        </div>

        <div className='color-group'>
          <div className='colors'>
            <label htmlFor='primaryColor'>Primary Color</label>
            <input
              type='color'
              id='primaryColor'
              name='primary-color'
              value={formData.primaryColor}
              onChange={handleChange}
            />
          </div>
          <div className='colors'>
            <label htmlFor='secondaryColor'>Secondary Color</label>
            <input
              type='color'
              id='secondaryColor'
              name='secondary-color'
              value={formData.secondaryColor}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AppearanceSettings
