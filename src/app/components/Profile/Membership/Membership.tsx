'use client'
import { FC, useState, useEffect } from 'react'
import './Membership.scss'
import ProfileModal from '@/app/components/ProfileSettings/ProfileModal/ProfileModal' // Assuming you have this path

interface MembershipProps {
  membership?: {
    plan: string
    joinedOn: string
    nextBillingDate?: string
  }
  isEditable: boolean
}

export const Membership: FC<MembershipProps> = ({ membership, isEditable }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>(
    membership?.plan || 'Basic',
  )
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalType, setModalType] = useState('') // To differentiate between different actions

  useEffect(() => {
    setSelectedPlan(membership?.plan || 'Basic')
  }, [membership?.plan])

  // Handlers for each action
  const handleUpgradePlan = () => {
    setModalType('upgrade')
    setIsModalVisible(true)
  }

  const handleChangePlan = () => {
    setModalType('change')
    setIsModalVisible(true)
  }

  const handleCancelMembership = () => {
    setModalType('cancel')
    setIsModalVisible(true)
  }

  // Modal Confirm and Cancel actions
  const handleConfirmAction = () => {
    switch (modalType) {
      case 'upgrade':
        console.log('Plan upgraded')
        break
      case 'change':
        console.log('Plan changed')
        break
      case 'cancel':
        console.log('Membership canceled')
        break
      default:
        break
    }
    setIsModalVisible(false)
  }

  const handleCancelAction = () => {
    setIsModalVisible(false)
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
          <button
            className='member-upgrade-btn m-btn'
            onClick={handleUpgradePlan}
          >
            Upgrade Plan
          </button>
          <button
            className='member-change-btn  m-btn'
            onClick={handleChangePlan}
          >
            Change Plan
          </button>
          <button
            className='member-cancel-btn m-btn'
            onClick={handleCancelMembership}
          >
            Cancel Membership
          </button>
          {selectedPlan === null && <p>{selectedPlan}</p>}
        </div>
      )}

      {/* Conditionally rendering the modal */}
      {isModalVisible && (
        <ProfileModal
          title={
            modalType === 'upgrade'
              ? 'Upgrade Plan'
              : modalType === 'change'
                ? 'Change Plan'
                : 'Cancel Membership'
          }
          message={
            modalType === 'upgrade'
              ? 'Are you sure you want to upgrade your plan?'
              : modalType === 'change'
                ? 'Are you sure you want to change your plan?'
                : 'Are you sure you want to cancel your membership?'
          }
          confirmLabel='Confirm'
          cancelLabel='Cancel'
          onConfirm={handleConfirmAction}
          onCancel={handleCancelAction}
          isVisible={isModalVisible}
        />
      )}
    </div>
  )
}

export default Membership
