import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    setFormData({
      emailNotificationsEnabled: settings.emailNotificationsEnabled,
      pushNotificationsEnabled: settings.pushNotificationsEnabled,
    })
  }, [settings])

  // Handle input changes and save dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target

    // Update local state
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: checked,
    }))

    // Immediately save changes
    onSave({
      ...formData,
      [id]: checked,
    })
  }

  return (
    <div className='notification-settings'>
      <h3>Notification Settings</h3>
      <hr className='divider' />

      <form className='notification-settings-form'>
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
          />
        </div>
      </form>
    </div>
  )
}

export default NotificationSettings
