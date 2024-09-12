import React, { useEffect, useState, useMemo } from 'react'
import './ModeratorRequest.scss'
import { Button, Table } from 'antd'
import { DatePicker } from 'antd'
import type { DatePickerProps } from 'antd'
import dayjs from 'dayjs'

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
  const [year, setYear] = useState<number>(dayjs().year())
  const [localRequests, setLocalRequests] = useState<ModeratorTypes[]>(requests)

  useEffect(() => {
    setLocalRequests(requests)
  }, [requests])

  const handleAction = (requestId: string, action: 'approve' | 'reject') => {
    const updatedRequests = localRequests.map((request) => {
      if (request.requestId === requestId) {
        const updatedStatus = action === 'approve' ? 'Approved' : 'Rejected'
        return { ...request, status: updatedStatus }
      }
      return request
    })
    setLocalRequests(updatedRequests as ModeratorTypes[])
    if (action === 'approve') {
      onApprove(requestId)
    } else if (action === 'reject') {
      onReject(requestId)
    }
  }

  const filteredRequests = useMemo(() => {
    return localRequests.filter((request) => {
      const requestYear = dayjs(request.date).year()
      const matchesYear = requestYear === year
      const matchesFilter =
        filter === 'All Requests' || request.status === filter
      return matchesYear && matchesFilter
    })
  }, [localRequests, year, filter])

  const dataSource = filteredRequests.map((request, index) => ({
    key: index.toString(),
    requestId: request.requestId,
    type: request.type,
    submittedBy: request.submittedBy,
    date: request.date,
    status: request.status,
    actions:
      request.status === 'Pending' ? (
        <div className='approve-reject'>
          <Button
            className='approve-button'
            onClick={() => handleAction(request.requestId, 'approve')}
          >
            Approve
          </Button>
          <Button
            className='reject-button'
            onClick={() => handleAction(request.requestId, 'reject')}
          >
            Reject
          </Button>
        </div>
      ) : (
        '-'
      ),
  }))

  const columns = [
    {
      title: 'Request ID',
      dataIndex: 'requestId',
      key: 'requestId',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Submitted By',
      dataIndex: 'submittedBy',
      key: 'submittedBy',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
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

  const [data, setData] = useState<Array<{ status: string; count: number }>>([])

  useEffect(() => {
    const pendingCount = localRequests.filter(
      (request) =>
        request.status === 'Pending' && dayjs(request.date).year() === year,
    ).length
    const approvedCount = localRequests.filter(
      (request) =>
        request.status === 'Approved' && dayjs(request.date).year() === year,
    ).length
    const rejectedCount = localRequests.filter(
      (request) =>
        request.status === 'Rejected' && dayjs(request.date).year() === year,
    ).length

    const newData = [
      {
        status: 'All Requests',
        count: pendingCount + approvedCount + rejectedCount,
      },
      { status: 'Pending', count: pendingCount },
      { status: 'Approved', count: approvedCount },
      { status: 'Rejected', count: rejectedCount },
    ]

    setData(newData)
  }, [localRequests, year])

  const onChange: DatePickerProps['onChange'] = (date) => {
    setYear(dayjs(date).year())
    setFilter('All Requests') // Reset filter when year changes
  }

  return (
    <div className='table-wrapper'>
      <div className='title-date-picker'>
        <h3>Moderator Request Summary </h3>
        <DatePicker
          onChange={onChange}
          picker='year'
          mode='year'
          size='small'
          defaultValue={dayjs()}
          className='custom-date-picker'
          disabledDate={(current) => current.year() > dayjs().year()}
          popupClassName='custom-date-picker-popup'
        />
      </div>
      <div className='cards-wrapper'>
        {data.map((item, index) => (
          <div
            onClick={() => setFilter(item.status)}
            key={index}
            className={
              item.status === filter ? 'card-selected' : 'status-count-card'
            }
          >
            <h1>{item.status}</h1>
            <h2
              className={
                item.status === 'Rejected'
                  ? 'count-rejected'
                  : item.status === 'Approved'
                    ? 'count-approved'
                    : ''
              }
            >
              {item.count}
            </h2>
          </div>
        ))}
      </div>
      <Table
        className='custom-ant-table'
        dataSource={dataSource}
        columns={columns}
        loading={isLoading}
        pagination={false}
      />
    </div>
  )
}

export default ModeratorRequest
