'use client'
import { useState, useEffect } from 'react'
import './AboutMe.scss'

interface AboutMeProps {
  aboutMe: string
  isEditable: boolean
  onSave?: (newAboutMe: string) => void
}

export const AboutMe: React.FC<AboutMeProps> = ({
  aboutMe,
  isEditable,
  onSave,
}) => {
  const [aboutMeText, setAboutMeText] = useState<string>(aboutMe)

  // Sync internal state with props when aboutMe prop changes
  useEffect(() => {
    setAboutMeText(aboutMe)
  }, [aboutMe])

  const handleSave = () => {
    if (onSave) {
      onSave(aboutMeText)
    }
  }

  return (
    <div className='about-me'>
      <h3>About Me</h3>
      {isEditable ? (
        <div className='about-me-edit'>
          <textarea
            value={aboutMeText}
            onChange={(e) => setAboutMeText(e.target.value)}
            placeholder='Tell us about yourself...'
          />
          <button className='save-button' onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <p>{aboutMeText}</p>
      )}
    </div>
  )
}

export default AboutMe
