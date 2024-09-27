import React, { useState, useEffect } from 'react'
import './SecuritySettings.scss'
import { SecuritySettingsType } from '@/app/Types/DashbaordSettings/SettingsType'

interface SecuritySettingsProps {
  settings: SecuritySettingsType
  onSave: (data: Partial<SecuritySettingsType>) => void
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({
  settings,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    twoFactorAuthEnabled: settings.twoFactorAuthEnabled,
    sessionTimeout: settings.sessionTimeout,
  })

  useEffect(() => {
    setFormData({
      twoFactorAuthEnabled: settings.twoFactorAuthEnabled,
      sessionTimeout: settings.sessionTimeout,
    })
  }, [settings])

  // Handle input changes and save dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    const updatedValue = type === 'checkbox' ? checked : value

    // Update local state
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: updatedValue,
    }))

    // Immediately save changes
    onSave({
      ...formData,
      [id]: updatedValue,
    })
  }

  return (
    <div className='security-settings'>
      <h3>Security Settings</h3>
      <hr className='divider' />

      <form className='security-settings-form'>
        <div className='form-group'>
          <label htmlFor='twoFactorAuthEnabled'>
            Enable Two-Factor Authentication:
          </label>
          <input
            type='checkbox'
            id='twoFactorAuthEnabled'
            className='custom-slider'
            checked={formData.twoFactorAuthEnabled}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='sessionTimeout'>Session Timeout (minutes):</label>
          <input
            type='number'
            id='sessionTimeout'
            value={formData.sessionTimeout}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  )
}

export default SecuritySettings
