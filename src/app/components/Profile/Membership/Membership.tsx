'use client'
import { FC, useState } from 'react'
import './Membership.scss'
import ProfileModal from '@/app/components/ProfileSettings/ProfileModal/ProfileModal'

interface MembershipProps {
  membership?: {
    plan: string
    joinedOn: string
    nextBillingDate?: string
  }
  isEditable: boolean
}

export const Membership: FC<MembershipProps> = ({ membership, isEditable }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalType, setModalType] = useState('')

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
        // Handle upgrade logic here
        break
      case 'change':
        // Handle change logic here
        break
      case 'cancel':
        // Handle cancel logic here
        break
      default:
        break
    }
    setIsModalVisible(false)
  }

  const handleCancelAction = () => {
    setIsModalVisible(false)
  }

  // Function to get modal title and message based on modalType
  const getModalContent = (modalType: string) => {
    switch (modalType) {
      case 'upgrade':
        return {
          title: 'Upgrade Plan',
          message: 'Are you sure you want to upgrade your plan?',
        }
      case 'change':
        return {
          title: 'Change Plan',
          message: 'Are you sure you want to change your plan?',
        }
      case 'cancel':
        return {
          title: 'Cancel Membership',
          message: 'Are you sure you want to cancel your membership?',
        }
      default:
        return {
          title: '',
          message: '',
        }
    }
  }

  const { title, message } = getModalContent(modalType)

  return (
    <div className='membership-management'>
      <h3>Membership Management</h3>
      <div className='membership-info'>
        <p>
          <strong>Current Plan:</strong>{' '}
          {membership?.plan || 'No plan selected'}
        </p>

        {!isEditable && (
          <p>
            <strong>Joined On:</strong> {membership?.joinedOn || 'N/A'}
          </p>
        )}

        {isEditable && (
          <p>
            <strong>Next Billing Date:</strong>{' '}
            {membership?.nextBillingDate || 'N/A'}
          </p>
        )}
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
            className='member-change-btn m-btn'
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
        </div>
      )}

      {isModalVisible && (
        <ProfileModal
          title={title}
          message={message}
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
