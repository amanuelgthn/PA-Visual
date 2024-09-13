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

  const resetForm = () => {
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  const handleChangePassword = () => {
    // Validate password
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
    // Handle actual password change functionality here
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
          View Change Password Form
        </button>
      ) : (
        <>
          <div className='form'>
            <input
              type='password'
              id='current-password'
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder='Enter current password'
            />

            <input
              type='password'
              id='new-password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder='Enter new password'
            />
            {newPassword && newPassword.length < 6 && (
              <p className='helper-text'>
                Password must be at least 6 characters long.
              </p>
            )}

            <input
              type='password'
              id='confirm-password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm new password'
            />

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
          onCancel={handleCancelForm} // Ensures modal closes on cancel
          isVisible={isModalVisible}
        />
      )}
    </div>
  )
}

export default AccountSecurity
