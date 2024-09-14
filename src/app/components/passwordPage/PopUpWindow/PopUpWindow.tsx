'use client'

import React, { useRef, useEffect } from 'react'
import '@fontsource/montserrat'
import './PopUpWindow.scss'

interface PopUpWindowProps {
  onClose: () => void
}

const PopUpWindow: React.FC<PopUpWindowProps> = ({ onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  const handleResetPasswordClick = () => {
    window.location.href = '/resetPassword'
  }

  return (
    <section className='ConfirmationPopUpWindow'>
      <div className='PopUpWindow' ref={popupRef}>
        <div className='mainContainer'>
          <h1 className='titleContainer'>EMAIL CONFIRMATION</h1>
          <div className='descriptionContainer'>
            <p>Hello John Doe,</p>
            <p>
              We have received your request to reset your password. If it&apos;s
              you please click on the button below
            </p>
          </div>
          <button
            className='resetPasswordButton'
            onClick={handleResetPasswordClick}
          >
            Reset password
          </button>
        </div>
      </div>
    </section>
  )
}

export default PopUpWindow
