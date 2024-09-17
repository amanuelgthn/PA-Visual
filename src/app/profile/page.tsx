'use client'

import { useState, useEffect, useCallback } from 'react'
import PersonalInfo from '../components/Profile/PersonalInfo/PersonalInfo'
import Membership from '../components/Profile/Membership/Membership'
import ReviewedProperties from '../components/Profile/ReviewedProperties/ReviewedProperties'
import Testimonial from '../components/Profile/Testimonial/Testimonial'
import './Profile.scss'
import Header from '../components/Profile/Header/Header'
import AboutMe from '../components/Profile/AboutMe/AboutMe'
import Interest from '../components/Profile/Interest/Interest'
import { ProfileData } from '../Types/Profile/ProfileTypes'
import Comments from '../components/Profile/Comments/Comments'
import { defaultProfileData } from '../Utils/mockProfileData/mockProfileData'

const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null)

  useEffect(() => {
    const savedProfile = localStorage.getItem('profileData')
    const profileDataToUse: ProfileData = savedProfile
      ? JSON.parse(savedProfile)
      : defaultProfileData

    setProfileData(profileDataToUse)

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

  const handleTogglePublic = useCallback(
    (isPublic: boolean) => {
      if (!profileData) return
      const updatedProfileData = { ...profileData, isPublic }
      localStorage.setItem('profileData', JSON.stringify(updatedProfileData))
      setProfileData(updatedProfileData)
    },
    [profileData],
  )

  if (!profileData) return null

  return (
    <div className='profile-page'>
      <div className='ProfileWrapper'>
        <Header profileData={profileData} isEditable={false} />

        <AboutMe aboutMe={profileData.aboutMe} isEditable={false} />

        <Interest interests={profileData.interests} isEditable={false} />

        <PersonalInfo
          personalInfo={profileData.personalInfo}
          isEditable={false}
          isPublic={profileData.isPublic}
          onTogglePublic={handleTogglePublic}
        />

        <Membership membership={profileData.membership} isEditable={false} />

        <ReviewedProperties
          reviewedProperties={profileData.reviewedProperties}
        />
        <Testimonial testimonial={profileData.testimonial} isEditable={false} />

        <Comments
          comments={profileData.comments}
          profilePic={profileData.profilePic}
        />
      </div>
    </div>
  )
}

export default Profile
