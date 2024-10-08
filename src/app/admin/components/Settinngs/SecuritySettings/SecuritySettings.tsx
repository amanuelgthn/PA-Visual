import React, { useState, useEffect, useCallback } from 'react'
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

  const [isFormChanged, setIsFormChanged] = useState(false)

  useEffect(() => {
    setFormData({
      twoFactorAuthEnabled: settings.twoFactorAuthEnabled,
      sessionTimeout: settings.sessionTimeout,
    })
    setIsFormChanged(false)
  }, [settings])

  // Handle change for  form field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    const updatedValue = type === 'checkbox' ? checked : Number(value)

    // Update local state
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: updatedValue,
    }))

    setIsFormChanged(true)
  }

  // Handle form submit to save settings
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log('Form Submitted:', formData)
      onSave(formData)
      setIsFormChanged(false)
    },
    [formData, onSave],
  )

  return (
    <div className='security-settings'>
      <h3>Security Settings</h3>
      <hr className='divider' />

      <form onSubmit={handleSubmit}>
        <div className='security-settings-form'>
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
              aria-label='Enable two-factor authentication'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='sessionTimeout'>Session Timeout (minutes):</label>
            <input
              type='number'
              id='sessionTimeout'
              value={formData.sessionTimeout}
              onChange={handleChange}
              aria-label='Session timeout in minutes'
            />
          </div>
        </div>
        <button
          type='submit'
          disabled={!isFormChanged}
          aria-disabled={!isFormChanged}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SecuritySettings
