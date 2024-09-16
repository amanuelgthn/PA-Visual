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
  const [isEditing, setIsEditing] = useState<boolean>(false)

  // Sync internal state with props when aboutMe prop changes
  useEffect(() => {
    setAboutMeText(aboutMe)
  }, [aboutMe])

  const handleSave = () => {
    if (onSave) {
      onSave(aboutMeText)
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setAboutMeText(aboutMe)
    setIsEditing(false)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  return (
    <div className='about-me'>
      <h3>About Me</h3>
      {/* Only show the "Edit" button in edit mode and when not editing */}
      {isEditable && !isEditing && (
        <button className='edit-button' onClick={handleEdit}>
          Edit About Me
        </button>
      )}
      {/* Show the text area and save/cancel buttons when editing */}
      {isEditable && isEditing && (
        <div className='about-me-edit'>
          <textarea
            value={aboutMeText}
            onChange={(e) => setAboutMeText(e.target.value)}
            placeholder='Tell us about yourself...'
          />
          <div className='button-group'>
            <button className='save-button' onClick={handleSave}>
              Save
            </button>
            <button className='cancel-button' onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
      {/* Show the Aboutme content when not in edit mode */}
      {!isEditable && <p>{aboutMeText}</p>}
    </div>
  )
}

export default AboutMe
