'use client'
import { ProfileData } from '@/app/Types/Profile/ProfileTypes'
import { useState, useEffect } from 'react'
import { FiSettings, FiLogOut, FiCamera } from 'react-icons/fi' // Added Camera Icon for edit mode
import { BsFillPersonFill, BsAwardFill } from 'react-icons/bs' // Icons for Premium Member and User
import './Header.scss'

interface HeaderProps {
  profileData: ProfileData
  isEditable: boolean
  onProfilePicChange?: (newProfilePic: File) => void
}

export const Header: React.FC<HeaderProps> = ({
  profileData,
  isEditable,
  onProfilePicChange,
}) => {
  const [imagePreview, setImagePreview] = useState<string>(
    profileData.profilePic,
  )

  // Profile/Header.tsx
  useEffect(() => {
    setImagePreview(profileData.profilePic)
  }, [profileData.profilePic]) // This ensures the preview updates with new profilePic

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string) // Preview the new image
        if (onProfilePicChange) {
          onProfilePicChange(file) // Simulate saving the new profile picture
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDeleteAccount = () => {
    console.log('Account deleted') // Simulate account deletion
  }

  return (
    <div className='header'>
      <div className='profile-container'>
        <div className='image-wrapper'>
          <img src={imagePreview} alt='Profile' className='profile-pic' />
          {isEditable && (
            <>
              <label htmlFor='upload-pic' className='edit-icon'>
                <FiCamera />
              </label>
              <input
                type='file'
                id='upload-pic'
                style={{ display: 'none' }}
                onChange={handleProfilePicChange}
              />
            </>
          )}
        </div>
        <div className='profile-details'>
          <h2>{profileData.personalInfo.name}</h2>
          <div className='user-info'>
            <span>
              <BsAwardFill className='icon' />
              Premium Member
            </span>
            <span>
              <BsFillPersonFill className='icon' />
              User
            </span>
          </div>
        </div>
      </div>

      <div className='stats'>
        <div className='stat-item'>
          <span>{profileData.reviewedProperties.length}</span>
          <span>Properties Reviewed</span>
        </div>
        <div className='stat-item'>
          <span>99.3%</span>
          <span>Accuracy Rate</span>
        </div>
      </div>

      <div className='actions'>
        {!isEditable ? (
          <>
            <div className='actionsFlex'>
              <FiSettings className='icon' /> <span>Settings</span>
            </div>
            <div className='actionsFlex'>
              <FiLogOut className='icon' /> <span>Logout</span>
            </div>
          </>
        ) : (
          <>
            <button onClick={handleDeleteAccount} className='delete-button'>
              DELETE ACCOUNT
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
