'use client'
import React, { useState } from 'react'
import './ModeratorRequest.scss'
import { Button, Table } from 'antd'

export type ModeratorTypes = {
  requestId: string
  type: string
  submittedBy: string
  date: string
  status: 'Pending' | 'Approved' | 'Rejected'
}

type ModeratorRequestProps = {
  requests: ModeratorTypes[]
  isLoading: boolean
  onApprove: (requestId: string) => void
  onReject: (requestId: string) => void
}

const ModeratorRequest: React.FC<ModeratorRequestProps> = ({
  requests,
  isLoading,
  onApprove,
  onReject,
}) => {
  const [filter, setFilter] = useState<string>('All Requests')

  const filteredRequests =
    filter === 'All Requests'
      ? requests
      : requests.filter((request) => request.status === filter)

  const dataSource = filteredRequests.map((request, index) => ({
    key: index.toString(),
    requestId: request.requestId,
    type: request.type,
    submittedBy: request.submittedBy,
    date: request.date,
    status: request.status,
    actions:
      request.status === 'Pending' ? (
        <>
          <Button
            className='approve-button'
            onClick={() => onApprove(request.requestId)}
          >
            Approve
          </Button>
          <Button
            className='reject-button'
            onClick={() => onReject(request.requestId)}
          >
            Reject
          </Button>
        </>
      ) : (
        '-'
      ),
  }))

  const columns = [
    {
      title: 'Request ID',
      dataIndex: 'requestId',
      key: 'requestId',
      className: 'request-id-column',
    },

    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      className: 'type-column',
    },
    {
      title: 'Submitted By',
      dataIndex: 'submittedBy',
      key: 'submittedBy',
      className: 'submitted-by-column',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      className: 'date-column',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: 'Pending' | 'Approved' | 'Rejected') => {
        let className = ''
        switch (text) {
          case 'Pending':
            className = 'status-pending'
            break
          case 'Approved':
            className = 'status-approved'
            break
          case 'Rejected':
            className = 'status-rejected'
            break
        }
        return <span className={className}>{text}</span>
      },
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
    },
  ]

  const buttons = ['All Requests', 'Pending', 'Approved', 'Rejected']

  return (
    <div className='table-wrapper'>
      <div className='buttons-wrapper'>
        {buttons.map((button, index) => (
          <Button
            className='buttons'
            key={index}
            onClick={() => setFilter(button)}
            type={filter === button ? 'primary' : 'default'}
          >
            {button}
          </Button>
        ))}
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={isLoading}
        pagination={false}
      />
    </div>
  )
}

export default ModeratorRequest
