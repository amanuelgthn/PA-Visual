import React, { useEffect, useState } from 'react'
import type { FormProps } from 'antd'
import { Button, Form, Input, Dropdown, Image } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import './UserForms.scss'
import { useRouter } from 'next/navigation'
import { FaImage } from 'react-icons/fa'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import { TiDelete } from 'react-icons/ti'

type FieldTypes = {
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
  password?: string
  confirmPassword?: string
  newPassword?: string
  confirmNewPassword?: string
  newProfileImage?: File
  profileImageFile?: File
}

const UserForms = ({ initialData }: { initialData?: FieldTypes }) => {
  const [form] = Form.useForm()
  const [userStatus, setUserStatus] = useState<'Active' | 'Inactive'>('Active')
  const [userRole, setUserRole] = useState<
    'Admin' | 'User' | 'Agent' | 'Manager'
  >('Admin')

  const [isClient, setIsClient] = useState(false)

  const [uploadedImage, setUploadedImage] = useState<string>('')
  const [fileObject, setFileObjects] = useState<File>()
  const [userImage, setUserImage] = useState<string>('')
  const route = useRouter()

  useEffect(() => {
    setIsClient(true)
    if (initialData) {
      form.setFieldsValue(initialData)
      setUserStatus(initialData.userStatus)
      setUserRole(initialData.userRole)
      setUserImage(initialData.userProfileImage)
    }
  }, [initialData, form])

  const handleMenuClickUserStatus: MenuProps['onClick'] = (e) => {
    setUserStatus(e.key as 'Active' | 'Inactive')
    form.setFieldsValue({ userStatus: e.key })
  }

  const handleMenuClickUserRole: MenuProps['onClick'] = (e) => {
    setUserRole(e.key as 'Admin' | 'User' | 'Agent' | 'Manager')
    form.setFieldsValue({ userRole: e.key })
  }

  const items: MenuProps['items'] = [
    { key: 'Active', label: 'Active' },
    { key: 'Inactive', label: 'Inactive' },
  ]

  const itemsRole: MenuProps['items'] = [
    { key: 'Admin', label: 'Admin' },
    { key: 'User', label: 'User' },
    { key: 'Agent', label: 'Agent' },
    { key: 'Manager', label: 'Manager' },
  ]

  const handleCancel = () => {
    route.push('/admin/users')
    form.resetFields() // Reset form fields
    setUploadedImage('')
    setFileObjects(undefined)
  }

  const handleFileUpload = (file: File | null) => {
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
        setFileObjects(file)
      }
      reader.readAsDataURL(file)
    }
  }

  if (!isClient) {
    return null
  }

  const onFinish: FormProps<FieldTypes>['onFinish'] = (values) => {
    const updatedValues: FieldTypes = { ...values }

    if (initialData) {
      if (values.newPassword && values.confirmNewPassword) {
        updatedValues.newPassword = values.newPassword
        delete updatedValues.confirmNewPassword
      }
      if (uploadedImage) {
        updatedValues.newProfileImage = fileObject
      }
    } else {
      updatedValues.profileImageFile = fileObject
    }

    // Remove password fields if they are undefined
    if (!values.password) {
      delete updatedValues.password
    }
    if (!values.confirmPassword) {
      delete updatedValues.confirmPassword
    }
    if (!values.newPassword) {
      delete updatedValues.newPassword
    }
    if (!values.confirmNewPassword) {
      delete updatedValues.confirmNewPassword
    }

    console.log('Success:', updatedValues)
    // Send updatedValues to the backend
  }

  const onFinishFailed: FormProps<FieldTypes>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='form-wrapper'>
      <div className='profile-photo-wrapper'>
        <div className='profile-photo'>
          {!uploadedImage && !userImage ? (
            <>
              <div className='noImageContainer'>
                <FaImage size={62} color='#424141' />
                <h1>No Image</h1>
                <p>We recommend a high quality professional image</p>
                <label htmlFor='file-upload' className='custom-photo-upload'>
                  <div className='upload-icon'>
                    <MdOutlineAddAPhoto
                      size={32}
                      color='rgba(242, 242, 242, 1)'
                    />
                  </div>
                  <input
                    className='custom-photo-upload'
                    id='file-upload'
                    type='file'
                    accept='image/*'
                    onChange={(e) => {
                      handleFileUpload(e.target.files?.[0] || null)
                    }}
                  />
                </label>
              </div>
            </>
          ) : (
            <Image
              preview={{
                mask: (
                  <>
                    <TiDelete
                      onClick={() => {
                        setUploadedImage('')
                        setUserImage('')
                      }}
                      size={20}
                      style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                      }}
                    />
                  </>
                ),
              }}
              src={uploadedImage || userImage}
              alt='profile'
              className='profile-image'
            />
          )}
        </div>
      </div>
      <div className='form-container'>
        <Form
          form={form}
          name='basic'
          initialValues={initialData}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          className='custom-form'
        >
          <Form.Item
            className='form-container-custom'
            label='User name'
            name='userName'
            rules={[
              { required: true, message: 'Please input your user name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <div className='form-row'>
            <Form.Item
              className='form-container-custom '
              label='First Name'
              name='userFirstName'
              rules={[
                { required: true, message: 'Please input your first name!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              className='form-container-custom '
              label='Status'
              name='userStatus'
              rules={[{ required: true, message: 'Please input status!' }]}
            >
              <Dropdown
                overlayClassName='custom-dropdown'
                menu={{ items, onClick: handleMenuClickUserStatus }}
              >
                <Button className='dropdown-button'>
                  {userStatus} <DownOutlined />
                </Button>
              </Dropdown>
            </Form.Item>
            <Form.Item
              className='form-container-custom '
              label='Last Name'
              name='userLastName'
              rules={[
                { required: true, message: 'Please input your last name!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              className='form-container-custom '
              label='Role'
              name='userRole'
              rules={[{ required: true, message: 'Please input role!' }]}
            >
              <Dropdown
                overlayClassName='custom-dropdown'
                menu={{ items: itemsRole, onClick: handleMenuClickUserRole }}
              >
                <Button className='dropdown-button'>
                  {userRole} <DownOutlined />
                </Button>
              </Dropdown>
            </Form.Item>
          </div>
          <Form.Item
            className='form-container-custom '
            label='Phone:'
            name='userPhoneNumber'
            rules={[
              { required: true, message: 'Please input your phone number!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className='form-container-custom '
            label='Agency:'
            name='userAgency'
            rules={[{ required: true, message: 'Please input your agency!' }]}
          >
            <Input />
          </Form.Item>
          {initialData ? (
            <>
              <Form.Item
                className='form-container-custom'
                label='New Password:'
                name='newPassword'
                rules={[
                  {
                    required: false,
                    message: 'Please input your new password!',
                  },
                ]}
              >
                <Input.Password
                  visibilityToggle={false}
                  placeholder='Leave blank to keep current password'
                />
              </Form.Item>
              <Form.Item
                className='form-container-custom'
                label='Confirm New Password:'
                name='confirmNewPassword'
                rules={[
                  {
                    required: false,
                    message: 'Please confirm your new password!',
                  },
                ]}
              >
                <Input.Password
                  visibilityToggle={false}
                  placeholder='Leave blank to keep current password'
                />
              </Form.Item>
            </>
          ) : (
            <>
              <Form.Item
                className='form-container-custom'
                label='Password:'
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password visibilityToggle={false} />
              </Form.Item>
              <Form.Item
                className='form-container-custom'
                label='Confirm Password:'
                name='confirmPassword'
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                ]}
              >
                <Input.Password visibilityToggle={false} />
              </Form.Item>
            </>
          )}
          <Form.Item className='form-container-custom'>
            <Button type='primary' htmlType='submit' className='custom-button'>
              Submit
            </Button>
            <Button htmlType='button' type='default' onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default UserForms
