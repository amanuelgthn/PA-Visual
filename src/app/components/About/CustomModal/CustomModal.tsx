import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import './CustomModal.scss'

// this subcomponent is used in the TeamHeader component
// it is a modal that displays information about a team member
// it is displayed when a team member is clicked
// it will need to be styled to match the design of the TeamHeader component

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='modal-container' ref={modalRef}>
        <button className='modal-close-button' onClick={onClose}>
          &times;
        </button>
        <div className='modal-content'>{children}</div>
      </div>
    </div>,
    document.body,
  )
}

export default CustomModal
