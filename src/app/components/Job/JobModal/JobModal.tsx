import React, { useState } from 'react'
import { Modal, ModalProps } from 'antd'
import './JobModal.scss'

type JobModalProps = {
  children: React.ReactNode
  isOpen: boolean
} & ModalProps

const JobModal: React.FC<JobModalProps> = ({
  children,
  isOpen,
  ...modalProps
}) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  // const showModal = () => {
  //   setIsModalOpen(true)
  // }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Modal
        className='job-modal'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        {...modalProps}
        footer={null}
      >
        {children}
      </Modal>
    </>
  )
}

export default JobModal
