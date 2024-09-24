import React, { useEffect, useState } from 'react'
import type { FormProps } from 'antd'
import { Button, Form, Input, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import './PropertyForms.scss'
import PropertyPhotoUpload from '../PropertyPhoyoUpload/PropertyPhotoUpload'
import { useRouter } from 'next/navigation'

type FieldTypes = {
  propertyTitle: string
  propertyPrice: string
  propertyStatus: 'Available' | 'Pending' | 'Sold'
  propertyBedRooms: number
  propertyGarageSpace: number
  propertyArea: number
  propertyAddress: string
  propertyDescription: string
  propertyFeatures: string[]
  listingAgentName: string
  propertyImages: string[]
}

const PropertyForms = ({ initialData }: { initialData?: FieldTypes }) => {
  const [form] = Form.useForm()
  const [propertyStatus, setPropertyStatus] = useState<
    'Available' | 'Pending' | 'Sold'
  >('Available')
  const [isClient, setIsClient] = useState(false)

  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [, setFileObjects] = useState<File[]>([])
  const [propertyImages, setPropertyImages] = useState<string[]>([])
  const route = useRouter()

  useEffect(() => {
    setIsClient(true)
    if (initialData) {
      form.setFieldsValue(initialData)
      setPropertyStatus(initialData.propertyStatus)
      setPropertyImages(initialData.propertyImages)
    }
  }, [initialData, form])

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setPropertyStatus(e.key as 'Available' | 'Pending' | 'Sold')
    form.setFieldsValue({ propertyStatus: e.key })
  }

  const items: MenuProps['items'] = [
    {
      key: 'Available',
      label: 'Available',
    },
    {
      key: 'Pending',
      label: 'Pending',
    },
    {
      key: 'Sold',
      label: 'Sold',
    },
  ]

  const handleCancel = () => {
    if (initialData) {
      route.push('/admin/properties')
    } else {
      form.resetFields()
      setUploadedImages([])
      setFileObjects([])
      route.push('/admin/properties')
    }
  }

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files)
      const newImages = newFiles.map((file) => URL.createObjectURL(file))

      setUploadedImages((prev) => [...prev, ...newImages])
      setFileObjects((prev) => [...prev, ...newFiles])
    }
  }

  const handleRemoveImage = (index: number) => {
    setUploadedImages((prev) => {
      const newUploadedImages = prev.filter((_, i) => i !== index)
      return newUploadedImages
    })

    setPropertyImages((prev) => {
      const newPropertyImages = prev.filter((_, i) => i !== index)
      return newPropertyImages
    })

    setFileObjects((prev) => {
      const newFileObjects = prev.filter((_, i) => i !== index)
      return newFileObjects
    })
  }

  if (!isClient) {
    return null
  }

  const onFinish: FormProps<FieldTypes>['onFinish'] = (values) => {
    const updatedValues = {
      ...values,
      propertyImages: [
        ...(initialData?.propertyImages || []),
        ...uploadedImages,
      ], // Merge initial and uploaded images
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
      <PropertyPhotoUpload
        propertyImages={propertyImages}
        onFileUpload={handleFileUpload}
        uploadedImages={uploadedImages}
        onRemoveImage={handleRemoveImage}
      />
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
            label='Property Title'
            name='propertyTitle'
            rules={[
              { required: true, message: 'Please input property title!' },
            ]}
          >
            <Input />
          </Form.Item>
          <div className='form-row'>
            <Form.Item
              className='form-container-custom '
              label='Price (USD):'
              name='propertyPrice'
              rules={[
                { required: true, message: 'Please input property price!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              className='form-container-custom '
              label='Property Status'
              name='propertyStatus'
              rules={[
                { required: true, message: 'Please select property status!' },
              ]}
            >
              <Dropdown
                overlayClassName='custom-dropdown'
                menu={{ items, onClick: handleMenuClick }}
              >
                <Button className='dropdown-button'>
                  {propertyStatus} <DownOutlined />
                </Button>
              </Dropdown>
            </Form.Item>
            <Form.Item
              className='form-container-custom '
              label='Property Bed Rooms'
              name='propertyBedRooms'
              rules={[
                { required: true, message: 'Please input property bed rooms!' },
              ]}
            >
              <Input type='number' />
            </Form.Item>
            <Form.Item
              className='form-container-custom '
              label='Property Garage Space'
              name='propertyGarageSpace'
              rules={[
                {
                  required: true,
                  message: 'Please input property garage space!',
                },
              ]}
            >
              <Input type='number' />
            </Form.Item>
          </div>
          <Form.Item
            className='form-container-custom '
            label='Area (sq ft):'
            name='propertyArea'
            rules={[{ required: true, message: 'Please input property area ' }]}
          >
            <Input type='number' />
          </Form.Item>
          <Form.Item
            className='form-container-custom '
            label='Property Address'
            name='propertyAddress'
            rules={[
              { required: true, message: 'Please input property address!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className='form-container-custom '
            label='Property Description'
            name='propertyDescription'
            rules={[
              { required: true, message: 'Please input property description!' },
            ]}
          >
            <Input.TextArea minLength={10} maxLength={350} autoSize={true} />
          </Form.Item>
          <Form.Item
            className='form-container-custom '
            label='Property Features'
            name='propertyFeatures'
            rules={[
              { required: true, message: 'Please input property features!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className='form-container-custom '
            label='Property Listing Agent'
            name='listingAgentName'
            rules={[
              {
                required: true,
                message: 'Please input property listing agent!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div className='buttons-wrapper'>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                {initialData ? 'Update Property' : 'Add Property'}
              </Button>
              <Button htmlType='button' type='default' onClick={handleCancel}>
                Cancel
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default PropertyForms
