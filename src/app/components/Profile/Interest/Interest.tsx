'use client'
import { useState, useEffect } from 'react'

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
  const [currentInterests, setCurrentInterests] = useState<string[]>([]) // Default to empty array
  const [newInterest, setNewInterest] = useState<string>('')

  const availableInterests = [
    'Luxury Properties',
    'Market Analysis',
    'Property Investment',
    'Urban Development',
  ]

  // Initialize currentInterests state when interests prop changes
  useEffect(() => {
    setCurrentInterests(interests || [])
  }, [interests])

  const handleAddInterest = () => {
    if (newInterest && !currentInterests.includes(newInterest)) {
      setCurrentInterests([...currentInterests, newInterest])
      setNewInterest('') // Clear the input after adding
    }
  }

  const handleRemoveInterest = (interestToRemove: string) => {
    setCurrentInterests(
      currentInterests.filter((interest) => interest !== interestToRemove),
    )
  }

  const handleSave = () => {
    if (onSave) {
      onSave(currentInterests) // Pass the updated interests to parent
    }
  }

  return (
    <div className='interest'>
      <h3>Interests</h3>
      <div className='current-interests'>
        {/* Map over currentInterests array */}
        {currentInterests.length > 0 ? (
          currentInterests.map((interest, index) => (
            <span key={index}>
              {interest}{' '}
              {isEditable && (
                <button onClick={() => handleRemoveInterest(interest)}>
                  Remove
                </button>
              )}
            </span>
          ))
        ) : (
          <p>No interests added yet.</p> // Handle empty array case
        )}
      </div>

      {isEditable && (
        <>
          <select
            value={newInterest}
            onChange={(e) => setNewInterest(e.target.value)}
          >
            <option value=''>Select Interest</option>
            {availableInterests.map((interest, index) => (
              <option key={index} value={interest}>
                {interest}
              </option>
            ))}
          </select>
          <button onClick={handleAddInterest}>Add Interest</button>
          <button onClick={handleSave}>Save Interests</button>
        </>
      )}
    </div>
  )
}

export default Interest
