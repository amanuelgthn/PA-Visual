'use client'

import { useState, useEffect } from 'react'
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

const ProfileSettings = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [isProfilePublic, setIsProfilePublic] = useState<boolean>(true)

  useEffect(() => {
    const savedProfile = localStorage.getItem('profileData')
    const defaultProfileData: ProfileData = savedProfile
      ? JSON.parse(savedProfile)
      : {
          profilePic: '/path-to-profile-pic.jpg',
          aboutMe: 'With over 10 years of experience in real estate...',
          interests: ['Luxury Properties', 'Market Analysis'],
          personalInfo: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '+1 (555) 23-4567',
            location: 'Spain, Europe',
            languages: ['Spanish', 'English', 'French'],
          },
          membership: {
            plan: 'Premium',
            joinedOn: 'August 15, 2023',
          },
          reviewedProperties: [
            {
              title: 'Luxury Condo',
              price: '$1,200,000',
              location: 'New York, NY',
            },
            {
              title: 'Beachfront Villa',
              price: '$3,500,000',
              location: 'Miami, FL',
            },
          ],
          isPublic: true,
          testimonial: '', // Default empty testimonial field
        }

    setProfileData(defaultProfileData)
  }, [])

  // Sync profileData with localStorage whenever it changes
  useEffect(() => {
    if (profileData) {
      localStorage.setItem('profileData', JSON.stringify(profileData))
    }
  }, [profileData])

  if (!profileData) return null

  // Handlers for updating the profile data fields
  const handleProfilePicChange = (file: File) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const newProfilePic = reader.result as string
      const updatedProfile: ProfileData = {
        ...profileData,
        profilePic: newProfilePic,
      }

      localStorage.setItem('profileData', JSON.stringify(updatedProfile))
      setProfileData(updatedProfile)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const handleAboutMeChange = (newAboutMeText: string) => {
    setProfileData((prev) => {
      if (prev) {
        return { ...prev, aboutMe: newAboutMeText }
      }
      return prev
    })
  }

  const handleInterestsChange = (newInterests: string[]) => {
    setProfileData((prev) => {
      if (prev) {
        return { ...prev, interests: newInterests }
      }
      return prev
    })
  }

  const handlePersonalInfoChange = (newPersonalInfo: {
    name: string
    email: string
    phone: string
    location: string
    languages: string[]
  }) => {
    setProfileData((prev) => {
      if (prev) {
        return { ...prev, personalInfo: newPersonalInfo }
      }
      return prev
    })
  }

  const handleMembershipChange = (newPlan: string) => {
    setProfileData((prev) => {
      if (prev) {
        return {
          ...prev,
          membership: {
            ...prev.membership,
            plan: newPlan,
          },
        }
      }
      return prev
    })
  }

  const handleTogglePublic = (isPublic: boolean) => {
    setIsProfilePublic(isPublic)
    const updatedProfileData = { ...profileData, isPublic }
    localStorage.setItem('profileData', JSON.stringify(updatedProfileData))
    setProfileData(updatedProfileData)
  }

  const handleTestimonialChange = (newTestimonial: string) => {
    setProfileData((prev) => {
      if (prev) {
        return { ...prev, testimonial: newTestimonial }
      }
      return prev
    })
  }

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
          onSave={handleAboutMeChange}
        />
        <Interest
          interests={profileData.interests}
          isEditable={true}
          onSave={handleInterestsChange}
        />
        <PersonalInfo
          personalInfo={profileData.personalInfo}
          isEditable={true}
          onSave={handlePersonalInfoChange}
          isPublic={isProfilePublic}
          onTogglePublic={handleTogglePublic}
        />
        <AccountSecurity />
        <Membership
          membership={profileData.membership}
          isEditable={true}
          onSave={handleMembershipChange}
        />
        <PaymentMethods />
        <NotificationSettings />
        <SavedProperties />
        <BillingHistory />
        <Testimonial
          testimonial={profileData.testimonial}
          isEditable={true}
          onSave={handleTestimonialChange}
        />
      </div>
    </div>
  )
}

export default ProfileSettings
