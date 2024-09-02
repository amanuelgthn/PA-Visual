'use client'
import React, { useEffect, useState } from 'react'
import LoginForm from '../Login/LoginForm'
import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm'
import { Modal, ModalProps } from 'antd'
import './DashboardAuthForm.scss'
import SignUpForm from '../SignUp/SignUpForm'

type DashboardAuthFormProps = {
  formType: 'login' | 'signup' | 'password-reset'
  title: string
  note: string | ''
  isOpen: boolean
} & ModalProps

const DashboardAuthForm: React.FC<DashboardAuthFormProps> = ({
  formType,
  isOpen,
  title,
  note,
  ...modalProps
}) => {
  const [isClient, setIsClient] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const renderForm = () => {
    switch (formType) {
      case 'login':
        return <LoginForm title={title} />
      case 'signup':
        return <SignUpForm title={title} note={note} />
      case 'password-reset':
        return <ForgotPasswordForm note={note} title={title} />
      default:
        return null
    }
  }

  if (!isClient) {
    return null
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {isModalOpen && (
        <div className='div-background'>
          <Modal
            className='auth-modal'
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            {...modalProps}
          >
            {renderForm()}
          </Modal>
        </div>
      )}
    </>
  )
}

export default DashboardAuthForm
