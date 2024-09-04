import { FC, useState, useEffect } from 'react'

interface PersonalInfoProps {
  personalInfo: {
    name: string
    email: string
    phone: string
    location: string
    languages: string[]
  }
  isEditable: boolean
  onSave?: (newPersonalInfo: {
    name: string
    email: string
    phone: string
    location: string
    languages: string[]
  }) => void
}

export const PersonalInfo: FC<PersonalInfoProps> = ({
  personalInfo,
  isEditable,
  onSave,
}) => {
  const [name, setName] = useState<string>(personalInfo.name)
  const [email, setEmail] = useState<string>(personalInfo.email)
  const [phone, setPhone] = useState<string>(personalInfo.phone)
  const [location, setLocation] = useState<string>(personalInfo.location)
  const [languages, setLanguages] = useState<string[]>(
    personalInfo.languages || [],
  )

  useEffect(() => {
    // Update state if personalInfo prop changes
    if (personalInfo) {
      setName(personalInfo.name)
      setEmail(personalInfo.email)
      setPhone(personalInfo.phone)
      setLocation(personalInfo.location)
      setLanguages(personalInfo.languages)
    }
  }, [personalInfo])

  const handleSave = () => {
    if (onSave) {
      onSave({ name, email, phone, location, languages })
    }
  }

  return (
    <div className='personal-info'>
      <h3>Personal Information</h3>
      {isEditable ? (
        <>
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
          <button onClick={handleSave}>Save</button>
        </>
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
    </div>
  )
}

export default PersonalInfo
