'use client'

import { useState, useEffect } from 'react'
import PersonalInfo from '../components/Profile/PersonalInfo/PersonalInfo'
import Membership from '../components/Profile/Membership/Membership'
import ReviewedProperties from '../components/Profile/ReviewedProperties/ReviewedProperties'
import Testimonial from '../components/Profile/Testimonial/Testimonial'
import './Profile.scss'
import Header from '../components/Profile/Header/Header'
import AboutMe from '../components/Profile/AboutMe/AboutMe'
import Interest from '../components/Profile/Interest/Interest'
import { ProfileData } from '../Types/Profile/ProfileTypes'

const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null)

  useEffect(() => {
    const savedProfile = localStorage.getItem('profileData')
    const defaultProfileData: ProfileData = savedProfile
      ? JSON.parse(savedProfile)
      : {
          profilePic: '/path-to-profile-pic.jpg',
          aboutMe: 'With over 10 years of experience in real estate...',
          interests: [
            'Luxury Properties',
            'Market Analysis',
            'Urban Development',
          ],
          personalInfo: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '+1 (555) 23-4567',
            location: 'Spain, Europe',
            languages: ['Spanish', 'English', 'French'],
          },
          membership: { plan: 'Premium', joinedOn: 'August 15, 2023' },
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

    setProfileData(defaultProfileData)

    // Listen for the 'profileDataChanged' event to update the profile data
    const handleProfileDataChanged = (e: Event) => {
      const customEvent = e as CustomEvent<ProfileData>
      setProfileData(customEvent.detail)
    }

    window.addEventListener(
      'profileDataChanged',
      handleProfileDataChanged as EventListener,
    )

    return () => {
      window.removeEventListener(
        'profileDataChanged',
        handleProfileDataChanged as EventListener,
      )
    }
  }, [])

  if (!profileData) return null // Wait until profileData is loaded

  return (
    <div className='profile-page'>
      <div className='ProfileWrapper'>
        <Header profileData={profileData} isEditable={false} />

        <AboutMe aboutMe={profileData.aboutMe} isEditable={false} />

        <Interest interests={profileData.interests} isEditable={false} />

        <PersonalInfo
          personalInfo={profileData.personalInfo}
          isEditable={false}
        />

        <Membership membership={profileData.membership} isEditable={false} />

        <ReviewedProperties
          reviewedProperties={profileData.reviewedProperties}
        />

        <Testimonial />
      </div>
    </div>
  )
}

export default Profile
