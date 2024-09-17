'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'
import AboutMe from '../components/Profile/AboutMe/AboutMe'
import Interest from '../components/Profile/Interest/Interest'
import PersonalInfo from '../components/Profile/PersonalInfo/PersonalInfo'
import AccountSecurity from '../components/ProfileSettings/AccountSecurity/AccountSecurity'
import Membership from '../components/Profile/Membership/Membership'
import PaymentMethods from '../components/ProfileSettings/PaymentMethods/PaymentMethods'
import BillingHistory from '../components/ProfileSettings/BillingHistory/BillingHistory'
import Header from '../components/Profile/Header/Header'
import { ProfileData } from '../Types/Profile/ProfileTypes'
import './ProfileSettings.scss'
import NotificationSettings from '../components/ProfileSettings/NotificationSettings/NotificationSettings'
import SavedProperties from '../components/ProfileSettings/SavedProperties/SavedProperties'
import Testimonial from '../components/Profile/Testimonial/Testimonial'
import { defaultProfileData } from '../Utils/mockProfileData/mockProfileData'

const ProfileSettings = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [isProfilePublic, setIsProfilePublic] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    const savedProfile = localStorage.getItem('profileData')
    const profileDataToUse: ProfileData = savedProfile
      ? JSON.parse(savedProfile)
      : defaultProfileData

    setProfileData(profileDataToUse)
    setIsProfilePublic(profileDataToUse.isPublic)
  }, [])

  useEffect(() => {
    if (profileData) {
      localStorage.setItem('profileData', JSON.stringify(profileData))
    }
  }, [profileData])

  const handleProfilePicChange = useCallback(
    (file: File) => {
      const reader = new FileReader()

      reader.onloadend = () => {
        const newProfilePic = reader.result as string
        const updatedProfile: ProfileData = {
          ...profileData!,
          profilePic: newProfilePic,
        }
        localStorage.setItem('profileData', JSON.stringify(updatedProfile))
        setProfileData(updatedProfile)
      }

      reader.onerror = () => {
        console.error('Error reading file:', reader.error)
      }

      if (file) reader.readAsDataURL(file)
    },
    [profileData],
  )

  const handleTogglePublic = useCallback(
    (isPublic: boolean) => {
      if (profileData) {
        setIsProfilePublic(isPublic)
        const updatedProfileData = { ...profileData, isPublic }
        localStorage.setItem('profileData', JSON.stringify(updatedProfileData))
        setProfileData(updatedProfileData)
      }
    },
    [profileData],
  )

  const handleGoBack = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      router.push('/profile')
    },
    [router],
  )

  if (!profileData) return null

  return (
    <div className='profile-settings-page'>
      <div className='ProfileWrapper'>
        <Header
          profileData={profileData}
          isEditable={true}
          onProfilePicChange={handleProfilePicChange}
        />
        <AboutMe
          aboutMe={profileData.aboutMe}
          isEditable={true}
          onSave={(newAboutMeText) =>
            setProfileData({ ...profileData, aboutMe: newAboutMeText })
          }
        />
        <Interest
          interests={profileData.interests}
          isEditable={true}
          onSave={(newInterests) =>
            setProfileData({ ...profileData, interests: newInterests })
          }
        />
        <PersonalInfo
          personalInfo={profileData.personalInfo}
          isEditable={true}
          onSave={(newPersonalInfo) =>
            setProfileData({ ...profileData, personalInfo: newPersonalInfo })
          }
          isPublic={isProfilePublic}
          onTogglePublic={handleTogglePublic}
        />
        <AccountSecurity />
        <Membership membership={profileData.membership} isEditable={true} />
        <PaymentMethods />
        <NotificationSettings />
        <SavedProperties />
        <BillingHistory />
        <Testimonial
          testimonial={profileData.testimonial}
          isEditable={true}
          onSave={(newTestimonial) =>
            setProfileData({ ...profileData, testimonial: newTestimonial })
          }
        />

        <div className='back-button-container'>
          <button type='button' className='back-button' onClick={handleGoBack}>
            <FaArrowLeft className='icon' />
            <span>Back to Profile</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings
