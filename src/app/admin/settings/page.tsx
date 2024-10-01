'use client'
import React, { useState, useCallback } from 'react'
import GeneralSettings from '../components/Settinngs/GeneralSettings/GeneralSettings'
import AppearanceSettings from '../components/Settinngs/AppearanceSettings/AppearanceSettings'
import NotificationSettings from '../components/Settinngs/NotificationSettings/NotificationSettings'
import SecuritySettings from '../components/Settinngs/SecuritySettings/SecuritySettings'
import { SettingsType } from '@/app/Types/DashbaordSettings/SettingsType'
import './settings.scss'

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<SettingsType>({
    general: {
      siteName: 'Global Property Admin',
      siteDescription:
        'Manage global properties efficiently with our admin panel.',
      adminEmail: 'admin@globalproperty.com',
      password: '',
    },
    appearance: {
      theme: 'dark',
      primaryColor: '#3498DB',
      secondaryColor: '#2ECC71',
    },
    security: {
      twoFactorAuthEnabled: false,
      sessionTimeout: 30,
    },
    notification: {
      emailNotificationsEnabled: true,
      pushNotificationsEnabled: false,
    },
  })

  // Update settings function for each section
  const updateSettings = useCallback(
    <T extends keyof SettingsType>(
      section: T,
      updatedData: Partial<SettingsType[T]>,
    ) => {
      setSettings((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          ...updatedData,
        },
      }))
    },
    [],
  )

  return (
    <div className='settings-wrapper'>
      <GeneralSettings
        settings={settings.general}
        onSave={(data) => updateSettings('general', data)}
      />
      <AppearanceSettings
        settings={settings.appearance}
        onSave={(data) => updateSettings('appearance', data)}
      />
      <SecuritySettings
        settings={settings.security}
        onSave={(data) => updateSettings('security', data)}
      />
      <NotificationSettings
        settings={settings.notification}
        onSave={(data) => updateSettings('notification', data)}
      />
    </div>
  )
}

export default SettingsPage
