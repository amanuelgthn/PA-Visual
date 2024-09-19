'use client'
import { FC, useState, useEffect } from 'react'
import './PersonalInfo.scss'

interface PersonalInfoProps {
  personalInfo: {
    name: string
    email: string
    phone: string
    location: string
    languages: string[]
  }
  isEditable: boolean
  isPublic?: boolean
  onSave?: (newPersonalInfo: {
    name: string
    email: string
    phone: string
    location: string
    languages: string[]
  }) => void
  onTogglePublic?: (isPublic: boolean) => void
}

export const PersonalInfo: FC<PersonalInfoProps> = ({
  personalInfo,
  isEditable,
  isPublic: initialIsPublic = true,
  onSave,
  onTogglePublic,
}) => {
  const [personalDetails, setPersonalDetails] = useState({
    name: personalInfo.name,
    email: personalInfo.email,
    phone: personalInfo.phone,
    location: personalInfo.location,
    languages: personalInfo.languages || [],
  })

  const [isPublic, setIsPublic] = useState<boolean>(initialIsPublic)
  const [isEditMode, setIsEditMode] = useState<boolean>(false)

  useEffect(() => {
    if (initialIsPublic !== isPublic && onTogglePublic) {
      onTogglePublic(isPublic)
    }
  }, [isPublic, initialIsPublic, onTogglePublic])

  // Check if changes were made
  const isSaveDisabled =
    personalDetails.name === personalInfo.name &&
    personalDetails.email === personalInfo.email &&
    personalDetails.phone === personalInfo.phone &&
    personalDetails.location === personalInfo.location &&
    personalDetails.languages.join(', ') === personalInfo.languages.join(', ')

  // change handler for form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target
    setPersonalDetails({
      ...personalDetails,
      [name]: name === 'languages' ? value.split(', ') : value,
    })
  }

  const handleSave = () => {
    if (onSave) {
      onSave(personalDetails)
    }
    setIsEditMode(false)
  }

  const handleCancel = () => {
    setPersonalDetails({
      name: personalInfo.name,
      email: personalInfo.email,
      phone: personalInfo.phone,
      location: personalInfo.location,
      languages: personalInfo.languages || [],
    })
    setIsEditMode(false)
  }

  return (
    <div className='personal-info'>
      {(isEditable || isPublic) && (
        <>
          <h3>Personal Information</h3>
          {isEditable && (
            <div className='publicToggle-btn'>
              <span>{isPublic ? 'Public' : 'Private'}</span>
              <input
                type='checkbox'
                checked={isPublic}
                onChange={() => setIsPublic(!isPublic)}
                className='toggle-switch'
              />
            </div>
          )}

          {isEditable ? (
            isEditMode ? (
              <div className='edit-items'>
                <div className='edit-details'>
                  <input
                    type='text'
                    name='name'
                    value={personalDetails.name}
                    onChange={handleInputChange}
                    placeholder='Name'
                  />
                  <input
                    type='text'
                    name='email'
                    value={personalDetails.email}
                    onChange={handleInputChange}
                    placeholder='Email'
                  />
                  <input
                    type='text'
                    name='phone'
                    value={personalDetails.phone}
                    onChange={handleInputChange}
                    placeholder='Phone'
                  />
                  <input
                    type='text'
                    name='location'
                    value={personalDetails.location}
                    onChange={handleInputChange}
                    placeholder='Location'
                  />
                  <input
                    type='text'
                    name='languages'
                    value={personalDetails.languages.join(', ')}
                    onChange={handleInputChange}
                    placeholder='Languages (comma-separated)'
                  />
                </div>
                <div className='button-group'>
                  <button
                    className='save-button'
                    onClick={handleSave}
                    disabled={isSaveDisabled}
                  >
                    Save
                  </button>
                  <button className='cancel-button' onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                className='edit-button'
                onClick={() => setIsEditMode(true)}
              >
                Update Profile
              </button>
            )
          ) : (
            <>
              <p>
                <strong>Name:</strong> {personalDetails.name}
              </p>
              <p>
                <strong>Email:</strong> {personalDetails.email}
              </p>
              <p>
                <strong>Phone:</strong> {personalDetails.phone}
              </p>
              <p>
                <strong>Location:</strong> {personalDetails.location}
              </p>
              <p>
                <strong>Languages:</strong>{' '}
                {personalDetails.languages.join(', ')}
              </p>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default PersonalInfo
