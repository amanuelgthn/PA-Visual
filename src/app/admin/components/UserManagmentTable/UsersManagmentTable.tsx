import { ConfigProvider, Image, Popover, Table } from 'antd'
import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import './UsersManagmentTable.scss'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useRouter } from 'next/navigation'

export type UsersManagmentTableTypes = {
  userId: string
  userFirstName: string
  userLastName: string
  userName: string
  userRole: 'Admin' | 'User' | 'Agent' | 'Manager'
  userAgency: string
  userLicenseNumber: string
  userCountry: string
  userCity: string
  userEmail: string
  userPhoneNumber: string
  userStatus: 'Active' | 'Inactive'
  userCreatedAt: string
  userProfileImage: string
}

type UsersManagmentTableProps = {
  users: UsersManagmentTableTypes[]
  onDelete: (userId: string) => void
}

const UsersManagmentTable = ({ users, onDelete }: UsersManagmentTableProps) => {
  const router = useRouter()
  const columns = [
    {
      title: 'ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Username',
      dataIndex: 'userName',
      key: 'userName',
      render: (text: string, record: UsersManagmentTableTypes) => (
        <div className='userName-wrapper'>
          <Image
            preview={false}
            src={record.userProfileImage}
            width={40}
            alt='user profile img'
          />

          <div className='column-wrapper'>
            <h1>{record.userName}</h1>
            <span>
              <p>{record.userCity}</p>
              <IoLocationOutline size={14} color='rgba(255, 255, 255, 0.5)' />
              <p>{record.userCountry}</p>
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'userRole',
      key: 'userRole',
      render: (text: string, record: UsersManagmentTableTypes) => (
        <div className='column-wrapper'>
          <h1> {record.userRole}</h1>
          <p> {record.userPhoneNumber}</p>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'userEmail',
      key: ' userEmail',
      render: (text: string, record: UsersManagmentTableTypes) => (
        <h1>{record.userEmail}</h1>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'userStatus',
      key: '  userStatus',
      render: (text: string, record: UsersManagmentTableTypes) => (
        <div>
          {record.userStatus === 'Active' ? (
            <h1 className='status-active'>Active</h1>
          ) : (
            <h1 className='status-inactive'>Inactive</h1>
          )}
        </div>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'userCreatedAt',
      key: 'userCreatedAt',
      render: (text: string, record: UsersManagmentTableTypes) => (
        <div>
          <h1>{record.userCreatedAt}</h1>
        </div>
      ),
    },
    {
      title: '',
      key: 'actions',
      render: (text: unknown, record: UsersManagmentTableTypes) => (
        <Popover
          color='rgba(104, 110, 114, 1)'
          content={
            <div className='user-popover-conent'>
              <span
                onClick={() => {
                  router.push(`/admin/users/edit/${record.userId}`)
                }}
              >
                <CiEdit size={18} />
                <p>Edit</p>
              </span>
              <span>
                <RiDeleteBin5Line
                  onClick={() => {
                    onDelete(record.userId)
                  }}
                  size={18}
                />
                <p>Delete</p>
              </span>
            </div>
          }
          trigger='click'
        >
          <BsThreeDotsVertical className='user-dott' />
        </Popover>
      ),
    },
  ]
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: 'rgba(50, 54, 56, 1)',
          borderRadius: 8,
          lineWidth: 0,
          linkDecoration: 'none',
          colorText: 'rgba(255, 255, 255, 1)',
        },
      }}
    >
      <Table
        key={users.map((user) => user.userId).join('')}
        columns={columns}
        dataSource={users}
        pagination={false}
        className='users-table'
      />
    </ConfigProvider>
  )
}

export default UsersManagmentTable
