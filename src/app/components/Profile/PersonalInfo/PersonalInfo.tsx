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
  const [name, setName] = useState<string>(personalInfo.name)
  const [email, setEmail] = useState<string>(personalInfo.email)
  const [phone, setPhone] = useState<string>(personalInfo.phone)
  const [location, setLocation] = useState<string>(personalInfo.location)
  const [languages, setLanguages] = useState<string[]>(
    personalInfo.languages || [],
  )
  const [isPublic, setIsPublic] = useState<boolean>(initialIsPublic)

  // Avoid updating isPublic in a way that leads to re-render loops
  useEffect(() => {
    if (initialIsPublic !== isPublic && onTogglePublic) {
      onTogglePublic(isPublic)
    }
  }, [isPublic, initialIsPublic, onTogglePublic])

  const handleSave = () => {
    if (onSave) {
      onSave({ name, email, phone, location, languages })
    }
  }

  return (
    <div className='personal-info'>
      {isEditable || isPublic ? (
        <>
          <h3>Personal Information</h3>
          {isEditable ? (
            <div className='edit-items'>
              <div className='publicToggle-btn'>
                <span>{isPublic ? 'Public' : 'Private'}</span>
                <input
                  type='checkbox'
                  checked={isPublic}
                  onChange={() => setIsPublic(!isPublic)}
                  className='toggle-switch'
                />
              </div>
              <div className='edit-details'>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Name'
                />
                <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email'
                />
                <input
                  type='text'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='Phone'
                />
                <input
                  type='text'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder='Location'
                />
                <input
                  type='text'
                  value={languages.join(', ')}
                  onChange={(e) => setLanguages(e.target.value.split(', '))}
                  placeholder='Languages (comma-separated)'
                />
              </div>
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <>
              <p>
                <strong>Name:</strong> {name}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Phone:</strong> {phone}
              </p>
              <p>
                <strong>Location:</strong> {location}
              </p>
              <p>
                <strong>Languages:</strong> {languages.join(', ')}
              </p>
            </>
          )}
        </>
      ) : null}
    </div>
  )
}

export default PersonalInfo
