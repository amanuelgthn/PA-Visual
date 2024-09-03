'use client'
import React from 'react'
import ModeratorRequest, {
  ModeratorTypes,
} from '../components/ModeratorRequest/ModeratorRequest'

const page = () => {
  const requests: ModeratorTypes[] = [
    {
      requestId: 'REQ001',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2023-05-20',
      status: 'Pending',
    },
    {
      requestId: 'REQ002',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2023-05-19',
      status: 'Approved',
    },
    {
      requestId: 'REQ004',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2023-05-19',
      status: 'Rejected',
    },
    {
      requestId: 'REQ004',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2023-05-20',
      status: 'Pending',
    },
    {
      requestId: 'REQ005',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2023-05-19',
      status: 'Approved',
    },
  ]

  const handleApprove = (requestId: string) => {
    alert(`Approveed this request id ${requestId}`)
  }

  const handleReject = (requestId: string) => {
    alert(`Rejected this request id ${requestId}`)
  }

  return (
    <div>
      <ModeratorRequest
        isLoading={false}
        requests={requests}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  )
}

export default page
