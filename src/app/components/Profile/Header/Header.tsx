'use client'
import './Header.scss'
import { ProfileData } from '@/app/Types/Profile/ProfileTypes'
import { useState, useEffect } from 'react'
import { FiSettings, FiLogOut, FiCamera } from 'react-icons/fi'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCrown } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import ProfileModal from '@/app/components/ProfileSettings/ProfileModal/ProfileModal'
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
  const [isModalVisible, setIsModalVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setImagePreview(profileData.profilePic)
  }, [profileData.profilePic])

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5000000) {
        alert('File size too large. Please select an image under 5MB.')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
        if (onProfilePicChange) {
          onProfilePicChange(file)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSettingsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/profileSettings')
  }

  // ACTION FOR MODAL
  const handleDeleteAccount = () => {
    console.log('Account deleted')
    setIsModalVisible(true)
  }

  const handleConfirmDelete = () => {
    console.log('Account deleted')
    setIsModalVisible(false) // Close the modal after confirming the delete
  }

  const handleCancelDelete = () => {
    setIsModalVisible(false) // Close the modal if the user cancels
  }

  return (
    <div className='header'>
      <div className='profile-content'>
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
              <FaCrown className='icon' />
              Premium Member
            </span>
            <span>
              <BsFillPersonFill className='icon' />
              User
            </span>
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
      </div>

      <div className='actions'>
        {!isEditable ? (
          <>
            <button className='actionsFlex' onClick={handleSettingsClick}>
              <FiSettings className='icon' /> <span>Settings</span>
            </button>
            <button className='actionsFlex'>
              <FiLogOut className='icon' /> <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            <button onClick={handleDeleteAccount} className='delete-button'>
              DELETE ACCOUNT
            </button>
            {/* Modal for confirming account deletion */}
            <ProfileModal
              title='Delete Account'
              message='Are you sure you want to delete your account? This action cannot be undone.'
              confirmLabel='Confirm'
              cancelLabel='Cancel'
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
              isVisible={isModalVisible}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Header
