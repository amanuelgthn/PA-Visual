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
  const [profileData, setProfileData] = useState<ProfileData>(() => {
    const savedProfile = localStorage.getItem('profileData')
    return savedProfile
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
  })

  // Listen for changes in localStorage and update the profile data accordingly
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedProfile = localStorage.getItem('profileData')
      if (updatedProfile) {
        setProfileData(JSON.parse(updatedProfile))
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return (
    <div className='profile-page'>
      <div className='ProfileWrapper'>
        {/* Pass profileData to Header */}
        <Header profileData={profileData} isEditable={false} />

        {/* Pass "aboutMe" prop to AboutMe component */}
        <AboutMe aboutMe={profileData.aboutMe} isEditable={false} />

        {/* Pass "interests" prop to Interest component */}
        <Interest interests={profileData.interests} isEditable={false} />

        {/* Pass "personalInfo" prop to PersonalInfo component */}
        <PersonalInfo
          personalInfo={profileData.personalInfo}
          isEditable={false}
        />

        {/* Pass "membership" prop to Membership component */}
        <Membership membership={profileData.membership} isEditable={false} />

        {/* Pass "reviewedProperties" prop to ReviewedProperties component */}
        <ReviewedProperties
          reviewedProperties={profileData.reviewedProperties}
        />

        {/* Testimonial component does not seem to need specific props */}
        <Testimonial />
      </div>
    </div>
  )
}

export default Profile
