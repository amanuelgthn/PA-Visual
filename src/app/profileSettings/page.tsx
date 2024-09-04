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

const ProfileSettings = () => {
  // Load from localStorage or provide default data
  const [profileData, setProfileData] = useState<ProfileData>(() => {
    try {
      const savedProfile = localStorage.getItem('profileData')
      return savedProfile
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
          }
    } catch (e) {
      console.error('Failed to load profile data from localStorage', e)
      return {
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
      }
    }
  })

  // Sync profileData with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('profileData', JSON.stringify(profileData))
  }, [profileData])

  // Handlers for updating the profile data fields
  const handleProfilePicChange = (newProfilePic: string) => {
    setProfileData((prev) => ({ ...prev, profilePic: newProfilePic }))
  }

  const handleAboutMeChange = (newAboutMeText: string) => {
    setProfileData((prev) => ({ ...prev, aboutMe: newAboutMeText }))
  }

  const handleInterestsChange = (newInterests: string[]) => {
    setProfileData((prev) => ({ ...prev, interests: newInterests }))
  }

  const handlePersonalInfoChange = (newPersonalInfo: {
    name: string
    email: string
    phone: string
    location: string
    languages: string[]
  }) => {
    setProfileData((prev) => ({
      ...prev,
      personalInfo: newPersonalInfo,
    }))
  }

  const handleMembershipChange = (newPlan: string) => {
    setProfileData((prev) => ({
      ...prev,
      membership: {
        ...prev.membership,
        plan: newPlan,
      },
    }))
  }

  return (
    <div className='profile-settings-page'>
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
      />
      <AccountSecurity />
      <Membership
        membership={profileData.membership}
        isEditable={true}
        onSave={handleMembershipChange}
      />
      <PaymentMethods />
      <BillingHistory />
    </div>
  )
}

export default ProfileSettings
