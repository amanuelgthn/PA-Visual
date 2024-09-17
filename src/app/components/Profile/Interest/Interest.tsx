'use client'
import { useState, useEffect, useCallback } from 'react'
import './Interest.scss'

interface InterestProps {
  interests?: string[]
  isEditable: boolean
  onSave?: (newInterests: string[]) => void
}

export const Interest: React.FC<InterestProps> = ({
  interests = [],
  isEditable,
  onSave,
}) => {
  const [currentInterests, setCurrentInterests] = useState<string[]>(
    interests || [],
  )

  const availableInterests = [
    'Luxury Properties',
    'Market Analysis',
    'Property Investment',
    'Urban Development',
  ]

  //  currentInterests state when interests prop changes
  useEffect(() => {
    setCurrentInterests(interests || [])
  }, [interests])

  // Automatically add interest when user selects from the dropdown
  const handleInterestSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedInterest = e.target.value
    if (selectedInterest && !currentInterests.includes(selectedInterest)) {
      const updatedInterests = [...currentInterests, selectedInterest]
      setCurrentInterests(updatedInterests)
      e.target.value = ''
      if (onSave) {
        onSave(updatedInterests)
      }
    }
  }

  // Remove selected interest
  const handleRemoveInterest = useCallback(
    (interestToRemove: string) => {
      const updatedInterests = currentInterests.filter(
        (interest) => interest !== interestToRemove,
      )
      setCurrentInterests(updatedInterests)

      if (onSave) {
        onSave(updatedInterests)
      } else {
        console.error('Unable to save interests.')
      }
    },
    [currentInterests, onSave],
  )

  return (
    <div className='interest'>
      <h3>Interests</h3>
      {isEditable && (
        <select onChange={handleInterestSelect}>
          <option value=''>Select Interest</option>
          {availableInterests.map((interest, index) => (
            <option key={index} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      )}

      <div className='current-interests'>
        {currentInterests.length > 0 ? (
          currentInterests.map((interest, index) => (
            <span
              key={index}
              style={{
                backgroundColor: isEditable ? '#828282' : '#BF8654',
              }}
            >
              {interest}{' '}
              {isEditable && (
                <button onClick={() => handleRemoveInterest(interest)}>
                  X
                </button>
              )}
            </span>
          ))
        ) : (
          <p>No interests added yet.</p>
        )}
      </div>
    </div>
  )
}

export default Interest
