'use client'
import React from 'react'
import './ProfileModal.scss'

interface ModalProps {
  title: string
  message: string
  confirmLabel: string
  cancelLabel: string
  onConfirm: () => void
  onCancel: () => void
  isVisible: boolean
}

const ProfileModal: React.FC<ModalProps> = ({
  title,
  message,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  isVisible,
}) => {
  if (!isVisible) return null

  return (
    <div className='modal-overlay'>
      <div className='modal-box'>
        <button className='m-close-btn' onClick={onCancel}>
          ✖
        </button>
        <h3>{title}</h3>
        <p>{message}</p>
        <div className='modal-actions'>
          <button className='m-confirm-btn' onClick={onConfirm}>
            {confirmLabel}
          </button>
          <button className='m-cancel-btn ' onClick={onCancel}>
            {cancelLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
