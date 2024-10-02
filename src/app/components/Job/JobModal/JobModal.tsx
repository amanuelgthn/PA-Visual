import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './JobModal.scss'

type JobModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const JobModal: React.FC<JobModalProps> = ({ children, isOpen, onClose }) => {
  const [isClient, setIsClient] = useState(false)

  // Client rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClient(true)
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen && isClient) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, isClient])

  if (!isClient || !isOpen) return null

  return ReactDOM.createPortal(
    <div
      className='job-modal-overlay'
      onClick={onClose}
      aria-modal='true'
      role='dialog'
    >
      <div className='job-modal-content' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  )
}

export default JobModal
