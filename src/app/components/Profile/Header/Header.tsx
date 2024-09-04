'use client'
import { ProfileData } from '@/app/Types/Profile/ProfileTypes'
import { useState } from 'react'

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
      <img src={imagePreview} alt='Profile' className='profile-pic' />
      <h2>{profileData.name}</h2>
      {isEditable && (
        <>
          <input type='file' onChange={handleProfilePicChange} />
          <button onClick={handleDeleteAccount}>Delete Account</button>
        </>
      )}
    </div>
  )
}

export default Header
