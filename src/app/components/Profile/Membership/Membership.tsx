'use client'
import { FC, useState, useEffect } from 'react'
import './Membership.scss'

interface MembershipProps {
  membership?: {
    plan: string
    joinedOn: string
    nextBillingDate?: string
  }
  isEditable: boolean
  onSave?: (newPlan: string) => void
}

export const Membership: FC<MembershipProps> = ({
  membership,
  isEditable,
  // onSave,
}) => {
  // const availablePlans = ['Basic', 'Premium', 'Pro'] /

  const [selectedPlan, setSelectedPlan] = useState<string>(
    membership?.plan || 'Basic',
  )

  useEffect(() => {
    setSelectedPlan(membership?.plan || 'Basic')
  }, [membership?.plan])

  // const handleSave = () => {
  //   if (onSave) {
  //     onSave(selectedPlan)
  //   }
  // }

  const handleCancelMembership = () => {
    console.log('Cancel membership')
  }

  return (
    <div className='membership-management'>
      <h3>Membership Management</h3>
      <div className='membership-info'>
        <p>
          <strong>Current Plan:</strong>{' '}
          {membership?.plan || 'No plan selected'}
        </p>
        <p>
          <strong>Next Billing Date:</strong>{' '}
          {membership?.nextBillingDate || 'N/A'}
        </p>
      </div>

      {isEditable && (
        <div className='membership-actions'>
          <button className='upgrade-btn'>Upgrade Plan</button>
          <button className='change-btn'>Change Plan</button>
          <button className='cancel-btn' onClick={handleCancelMembership}>
            Cancel Membership
          </button>
          {/* hiding the state for now  */}
          {selectedPlan === null && <button>{selectedPlan}</button>}
        </div>
      )}
    </div>
  )
}

export default Membership
