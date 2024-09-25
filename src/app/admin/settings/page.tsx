'use client'
import React from 'react'
import GeneralSettings from '../components/Settinngs/GeneralSettings/GeneralSettings'
import AppearanceSettings from '../components/Settinngs/AppearanceSettings/AppearanceSettings'
import NotificationSettings from '../components/Settinngs/NotificationSettings/NotificationSettings'
import SecuritySettings from '../components/Settinngs/SecuritySettings/SecuritySettings'
import './settings.scss'

const SettingsPage: React.FC = () => {
  return (
    <div className='settings-wrapper'>
      <GeneralSettings />
      <AppearanceSettings />
      <SecuritySettings />
      <NotificationSettings />
      <button>submit</button>
    </div>
  )
}

export default SettingsPage
