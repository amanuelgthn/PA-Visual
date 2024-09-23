import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './JobModal.scss'

type JobModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const JobModal: React.FC<JobModalProps> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className='job-modal-overlay' onClick={onClose}>
      <div className='job-modal-content' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  )
}

export default JobModal
