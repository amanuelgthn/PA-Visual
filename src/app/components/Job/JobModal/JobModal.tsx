import React from 'react'
import { Modal, ModalProps } from 'antd'
import './JobModal.scss'

type JobModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
} & ModalProps

const JobModal: React.FC<JobModalProps> = ({
  children,
  isOpen,
  onClose,
  ...modalProps
}) => {
  return (
    <>
      <Modal
        className='job-modal'
        open={isOpen}
        onCancel={onClose}
        {...modalProps}
        footer={null}
      >
        {children}
      </Modal>
    </>
  )
}

export default JobModal
