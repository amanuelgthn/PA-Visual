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
      date: '2022-05-19',
      status: 'Approved',
    },
    {
      requestId: 'REQ003',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2021-05-18',
      status: 'Rejected',
    },
    {
      requestId: 'REQ004',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2020-05-17',
      status: 'Pending',
    },
    {
      requestId: 'REQ005',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2019-05-16',
      status: 'Approved',
    },
    {
      requestId: 'REQ006',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2018-05-15',
      status: 'Pending',
    },
    {
      requestId: 'REQ007',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2017-05-14',
      status: 'Approved',
    },
    {
      requestId: 'REQ008',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2016-05-13',
      status: 'Rejected',
    },
    {
      requestId: 'REQ009',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2015-05-12',
      status: 'Pending',
    },
    {
      requestId: 'REQ010',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2014-05-11',
      status: 'Approved',
    },
    {
      requestId: 'REQ011',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2013-05-10',
      status: 'Pending',
    },
    {
      requestId: 'REQ012',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2012-05-09',
      status: 'Approved',
    },
    {
      requestId: 'REQ013',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2011-05-08',
      status: 'Rejected',
    },
    {
      requestId: 'REQ014',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2010-05-07',
      status: 'Pending',
    },
    {
      requestId: 'REQ015',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2009-05-06',
      status: 'Approved',
    },
    {
      requestId: 'REQ016',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2008-05-05',
      status: 'Pending',
    },
    {
      requestId: 'REQ017',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2007-05-04',
      status: 'Approved',
    },
    {
      requestId: 'REQ018',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2006-05-03',
      status: 'Rejected',
    },
    {
      requestId: 'REQ019',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2005-05-02',
      status: 'Pending',
    },
    {
      requestId: 'REQ020',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2004-05-01',
      status: 'Approved',
    },
    {
      requestId: 'REQ021',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-01',
      status: 'Pending',
    },
    {
      requestId: 'REQ022',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-02',
      status: 'Approved',
    },
    {
      requestId: 'REQ023',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-03',
      status: 'Rejected',
    },
    {
      requestId: 'REQ024',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-04',
      status: 'Pending',
    },
    {
      requestId: 'REQ025',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-05',
      status: 'Approved',
    },
    {
      requestId: 'REQ026',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-06',
      status: 'Pending',
    },
    {
      requestId: 'REQ027',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-07',
      status: 'Approved',
    },
    {
      requestId: 'REQ028',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-08',
      status: 'Rejected',
    },
    {
      requestId: 'REQ029',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-09',
      status: 'Pending',
    },
    {
      requestId: 'REQ030',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-10',
      status: 'Approved',
    },
    {
      requestId: 'REQ031',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-11',
      status: 'Pending',
    },
    {
      requestId: 'REQ032',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-12',
      status: 'Approved',
    },
    {
      requestId: 'REQ033',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-13',
      status: 'Rejected',
    },
    {
      requestId: 'REQ034',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-14',
      status: 'Pending',
    },
    {
      requestId: 'REQ035',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-15',
      status: 'Approved',
    },
    {
      requestId: 'REQ036',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-16',
      status: 'Pending',
    },
    {
      requestId: 'REQ037',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-17',
      status: 'Approved',
    },
    {
      requestId: 'REQ038',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-18',
      status: 'Rejected',
    },
    {
      requestId: 'REQ039',
      type: 'Edit User',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-19',
      status: 'Pending',
    },
    {
      requestId: 'REQ040',
      type: 'Delete Property',
      submittedBy: 'moderator@globalproperty.ai',
      date: '2024-01-20',
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
