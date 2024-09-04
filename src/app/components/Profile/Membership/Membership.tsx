'use client'
import { FC, useState, useEffect } from 'react'

interface MembershipProps {
  membership?: {
    plan: string
    joinedOn: string
  }
  isEditable: boolean
  onSave?: (newPlan: string) => void
}

export const Membership: FC<MembershipProps> = ({
  membership,
  isEditable,
  onSave,
}) => {
  const availablePlans = ['Basic', 'Premium', 'Pro'] // Example membership plans

  // Check if membership is defined, otherwise use a default value
  const [selectedPlan, setSelectedPlan] = useState<string>(
    membership?.plan || 'Basic',
  )

  useEffect(() => {
    // Update selectedPlan if the membership plan changes
    setSelectedPlan(membership?.plan || 'Basic')
  }, [membership?.plan])

  const handleSave = () => {
    if (onSave) {
      onSave(selectedPlan) // Pass the selected plan back to the parent component
    }
  }

  return (
    <div className='membership'>
      <h3>Membership</h3>
      {/* Safely access membership properties */}
      <p>Joined On: {membership?.joinedOn || 'N/A'}</p>
      {isEditable ? (
        <>
          <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
          >
            {availablePlans.map((plan, index) => (
              <option key={index} value={plan}>
                {plan}
              </option>
            ))}
          </select>
          <button onClick={handleSave}>Save Plan</button>
        </>
      ) : (
        <p>Plan: {membership?.plan || 'No plan selected'}</p>
      )}
    </div>
  )
}

export default Membership
