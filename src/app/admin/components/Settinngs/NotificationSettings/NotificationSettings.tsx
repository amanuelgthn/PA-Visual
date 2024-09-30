'use client'
import React, { useState, useEffect, useCallback } from 'react'
import './NotificationSettings.scss'
import { NotificationSettingsType } from '@/app/Types/DashbaordSettings/SettingsType'

interface NotificationSettingsProps {
  settings: NotificationSettingsType
  onSave: (data: Partial<NotificationSettingsType>) => void
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  settings,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    emailNotificationsEnabled: settings.emailNotificationsEnabled,
    pushNotificationsEnabled: settings.pushNotificationsEnabled,
  })

  const [isFormChanged, setIsFormChanged] = useState(false)

  useEffect(() => {
    setFormData({
      emailNotificationsEnabled: settings.emailNotificationsEnabled,
      pushNotificationsEnabled: settings.pushNotificationsEnabled,
    })
    setIsFormChanged(false)
  }, [settings])

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target

    // Update local state
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: checked,
    }))

    setIsFormChanged(true)
  }

  // Handle form submission
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
    <div className='notification-settings'>
      <h3>Notification Settings</h3>
      <hr className='divider' />

      <form onSubmit={handleSubmit}>
        <div className='notification-settings-form'>
          <div className='form-group'>
            <label htmlFor='emailNotificationsEnabled'>
              Enable Email Notifications:
            </label>
            <input
              type='checkbox'
              id='emailNotificationsEnabled'
              className='custom-slider'
              checked={formData.emailNotificationsEnabled}
              onChange={handleChange}
              aria-label='Enable Email Notifications'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='pushNotificationsEnabled'>
              Enable Push Notifications:
            </label>
            <input
              type='checkbox'
              id='pushNotificationsEnabled'
              className='custom-slider'
              checked={formData.pushNotificationsEnabled}
              onChange={handleChange}
              aria-label='Enable Push Notifications'
            />
          </div>
        </div>
        <button
          type='submit'
          disabled={!isFormChanged}
          aria-disabled={!isFormChanged}
          className={isFormChanged ? '' : 'disabled'}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default NotificationSettings
