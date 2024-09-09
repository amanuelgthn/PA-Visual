'use client'
import React, { useState } from 'react'
import './AccountSecurity.scss'

const AccountSecurity = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleChangePassword = () => {
    // Handle password change functionality here
    console.log('Password Changed')
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

      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  )
}

export default AccountSecurity
