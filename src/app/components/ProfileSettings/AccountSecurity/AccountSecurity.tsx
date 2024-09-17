'use client'
import React, { useState } from 'react'
import './AccountSecurity.scss'
import ProfileModal from '@/app/components/ProfileSettings/ProfileModal/ProfileModal'

const AccountSecurity = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [passwordError, setPasswordError] = useState('')

  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const resetForm = () => {
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match.')
      return
    }
    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters long.')
      return
    }
    setPasswordError('')
    setIsModalVisible(true)
  }

  const handleConfirmChangePassword = () => {
    console.log('Password Changed')
    resetForm()
    setIsModalVisible(false)
    setIsFormVisible(false)
  }

  const handleCancelForm = () => {
    resetForm()
    setIsModalVisible(false)
    setIsFormVisible(false)
  }

  return (
    <div className='account-security'>
      <h3>Account Security</h3>

      {!isFormVisible ? (
        <button
          className='view-btn-actions'
          onClick={() => setIsFormVisible(true)}
        >
          Change Password
        </button>
      ) : (
        <>
          <div className='form'>
            {/* Current Password Field */}
            <div className='password-field'>
              <input
                type={showCurrentPassword ? 'text' : 'password'}
                id='current-password'
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder='Enter current password'
              />
              <span
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className='password-toggle'
                aria-label={
                  showCurrentPassword
                    ? 'Hide current password'
                    : 'Show current password'
                }
              >
                {showCurrentPassword ? '🙈' : '👁️'}
              </span>
            </div>

            {/* New Password Field */}
            <div className='password-field'>
              <input
                type={showNewPassword ? 'text' : 'password'}
                id='new-password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder='Enter new password'
              />
              <span
                onClick={() => setShowNewPassword(!showNewPassword)}
                className='password-toggle'
                aria-label={
                  showNewPassword ? 'Hide new password' : 'Show new password'
                }
              >
                {showNewPassword ? '🙈' : '👁️'}
              </span>
            </div>

            {/* Confirm Password Field */}
            <div className='password-field'>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id='confirm-password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Confirm new password'
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className='password-toggle'
                aria-label={
                  showConfirmPassword
                    ? 'Hide confirm password'
                    : 'Show confirm password'
                }
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </span>
            </div>

            {passwordError && <p className='error-text'>{passwordError}</p>}
          </div>

          <div className='button-group'>
            <button className='save-btn' onClick={handleChangePassword}>
              Save
            </button>
            <button className='cancel-btn' onClick={handleCancelForm}>
              Cancel
            </button>
          </div>
        </>
      )}

      {isModalVisible && (
        <ProfileModal
          title='Change Password'
          message='Are you sure you want to change your password?'
          confirmLabel='Confirm'
          cancelLabel='Cancel'
          onConfirm={handleConfirmChangePassword}
          onCancel={handleCancelForm}
          isVisible={isModalVisible}
        />
      )}
    </div>
  )
}

export default AccountSecurity
