'use client'
import React, { useState } from 'react'
import './AccountSecurity.scss'
import ProfileModal from '@/app/components/ProfileSettings/ProfileModal/ProfileModal'

const AccountSecurity = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  // / ACTION
  const handleChangePassword = () => {
    setIsModalVisible(true)
  }

  const handleConfirmChangePassword = () => {
    // Handle actual password change functionality here
    console.log('Password Changed')
    setIsModalVisible(false)
  }

  const handleCancelChangePassword = () => {
    setIsModalVisible(false)
  }

  return (
    <div className='account-security'>
      <h3>Account Security</h3>
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

        <input
          type='password'
          id='confirm-password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm new password'
        />
      </div>

      <button className='Acc-btn' onClick={handleChangePassword}>
        Change Password
      </button>
      {isModalVisible && (
        <ProfileModal
          title='Change Password'
          message='Are you sure you want to change your password?'
          confirmLabel='Confirm'
          cancelLabel='Cancel'
          onConfirm={handleConfirmChangePassword}
          onCancel={handleCancelChangePassword}
          isVisible={isModalVisible}
        />
      )}
    </div>
  )
}

export default AccountSecurity
