import React, { useState, useEffect, useCallback } from 'react'
import './GeneralSettings.scss'
import { GeneralSettingsType } from '@/app/Types/DashbaordSettings/SettingsType'

interface GeneralSettingsProps {
  settings: GeneralSettingsType
  onSave: (data: Partial<GeneralSettingsType>) => void
}

const GeneralSettings: React.FC<GeneralSettingsProps> = ({
  settings,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    siteName: settings.siteName,
    siteDescription: settings.siteDescription,
    adminEmail: settings.adminEmail,
    password: '',
    confirmPassword: '',
  })

  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const [isSiteInfoChanged, setIsSiteInfoChanged] = useState(false)
  const [isPasswordChanged, setIsPasswordChanged] = useState(false)
  const [showPasswordError, setShowPasswordError] = useState(false)

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      siteName: settings.siteName,
      siteDescription: settings.siteDescription,
      adminEmail: settings.adminEmail,
    }))
    setIsSiteInfoChanged(false)
  }, [settings])

  // Handle change for any form field
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }))

      // Detect changes in specific fields
      if (['siteName', 'siteDescription', 'adminEmail'].includes(id)) {
        setIsSiteInfoChanged(true)
      } else if (id === 'password' || id === 'confirmPassword') {
        setIsPasswordChanged(true)
      }

      // Toggle the error message only when confirm password changes
      if (id === 'confirmPassword') {
        setShowPasswordError(true)
      }
    },
    [],
  )

  // Check if passwords match
  useEffect(() => {
    setPasswordsMatch(formData.password === formData.confirmPassword)
  }, [formData.password, formData.confirmPassword])

  // Function to reset password fields
  const resetPasswordFields = useCallback(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: '',
      confirmPassword: '',
    }))
    setShowPasswordError(false)
    setIsPasswordChanged(false)
  }, [])

  // Handle saving site info (site name, description, email)
  const handleSaveSiteInfo = useCallback(() => {
    const { siteName, siteDescription, adminEmail } = formData
    const siteInfo = { siteName, siteDescription, adminEmail }
    onSave(siteInfo)
    console.log('Site Info Saved:', siteInfo)
    setIsSiteInfoChanged(false)
  }, [formData, onSave])

  // Handle saving password
  const handleSavePassword = useCallback(() => {
    if (passwordsMatch) {
      onSave({ password: formData.password })
      console.log('Password Saved:', formData.password)
      resetPasswordFields()
    }
  }, [formData.password, passwordsMatch, onSave, resetPasswordFields])

  return (
    <div className='general-settings'>
      <h3>General Settings</h3>
      <hr className='divider' />
      <form className='general-settings-form'>
        <div className='form-group'>
          <label htmlFor='siteName'>Site Name:</label>
          <input
            type='text'
            id='siteName'
            aria-label='Site Name'
            value={formData.siteName}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='siteDescription'>Site Description:</label>
          <textarea
            id='siteDescription'
            aria-label='Site Description'
            value={formData.siteDescription}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='adminEmail'>Admin Email:</label>
          <input
            type='email'
            id='adminEmail'
            aria-label='Admin Email'
            value={formData.adminEmail}
            onChange={handleChange}
          />
        </div>

        {/* Save button for site name, site description, and admin email */}
        <button
          type='button'
          onClick={handleSaveSiteInfo}
          disabled={!isSiteInfoChanged}
          className={isSiteInfoChanged ? '' : 'disabled'}
        >
          Save Site Info
        </button>

        <div className='form-group'>
          <label className='password-label' htmlFor='password'>
            Change Password:
          </label>
          <input
            type='password'
            id='password'
            aria-label='New Password'
            placeholder='Enter new password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input
            type='password'
            id='confirmPassword'
            aria-label='Confirm New Password'
            placeholder='Confirm new password'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {showPasswordError && !passwordsMatch && (
            <small className='showPasswordError' aria-live='polite'>
              Passwords do not match
            </small>
          )}
        </div>

        {/* Save button for password */}
        <button
          type='button'
          onClick={handleSavePassword}
          disabled={!isPasswordChanged || !passwordsMatch}
          aria-disabled={!isPasswordChanged || !passwordsMatch}
          className={isPasswordChanged && passwordsMatch ? '' : 'disabled'}
        >
          Save Password
        </button>
      </form>
    </div>
  )
}

export default GeneralSettings
