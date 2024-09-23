import React, { useEffect, useState } from 'react'
import './PropertyPhotoUpload.scss'
import { Image } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { TiDelete } from 'react-icons/ti'

type PropertyPhotoUploadProps = {
  propertyImages: string[] | undefined
  onFileUpload: (file: FileList | null) => void
  uploadedImages?: string[]
}

const PropertyPhotoUpload = ({
  uploadedImages,
  onFileUpload,
  propertyImages,
}: PropertyPhotoUploadProps) => {
  const [propertyImagesState, setPropertyImagesState] = useState<string[]>(
    propertyImages || [],
  )
  const [uploadedImagesState, setUploadedImagesState] = useState<string[]>(
    uploadedImages || [],
  )

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onFileUpload) {
      onFileUpload(e.target.files)
    }
  }

  const handleButtonClick = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement
    if (fileInput) {
      fileInput.click()
    }
  }

  const handleRemoveImage = (index: number, isUploaded: boolean) => {
    if (isUploaded) {
      setUploadedImagesState((prev) => prev.filter((_, i) => i !== index))
    } else {
      setPropertyImagesState((prev) => prev.filter((_, i) => i !== index))
    }
  }
  const handleIconClick = (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    index: number,
    isUploaded: boolean,
  ) => {
    event.stopPropagation()
    handleRemoveImage(index, isUploaded)
  }

  useEffect(() => {
    if (propertyImages) {
      setPropertyImagesState(propertyImages)
    }
  }, [propertyImages])

  useEffect(() => {
    if (uploadedImages) {
      setUploadedImagesState(uploadedImages)
    }
  }, [uploadedImages])

  return (
    <main className='photo-wrapper'>
      <section className='left'>
        <h1>Property Image</h1>
        {uploadedImagesState?.length ? (
          <Image src={uploadedImagesState[0]} alt='property photo' />
        ) : propertyImagesState?.length ? (
          <Image src={propertyImagesState[0]} alt='property photo' />
        ) : (
          // eslint-disable-next-line jsx-a11y/alt-text
          <h1>Upload photo</h1>
        )}
        <div className='upload-input-wrapper'>
          <button className='upload-button' onClick={handleButtonClick}>
            <UploadOutlined /> Upload new image
          </button>

          <input
            id='fileInput'
            type='file'
            multiple
            accept='image/jpeg, image/png'
            onChange={handleFileChange}
          />
        </div>
      </section>
      <section className='right'>
        <h1>Photos</h1>
        <div className='photo-group'>
          <Image.PreviewGroup>
            {uploadedImagesState?.length
              ? uploadedImagesState.map((image, index) => (
                  <Image
                    preview={{
                      mask: (
                        <TiDelete
                          onClick={(event) =>
                            handleIconClick(event, index, true)
                          }
                          size={20}
                          style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                          }}
                        />
                      ),
                    }}
                    key={index}
                    src={image}
                    alt='property photo'
                  />
                ))
              : propertyImagesState?.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt='property photo'
                    preview={{
                      mask: (
                        <TiDelete
                          onClick={(event) =>
                            handleIconClick(event, index, false)
                          }
                          size={20}
                          style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                          }}
                        />
                      ),
                    }}
                  />
                ))}
          </Image.PreviewGroup>
          <div className='upload-input-wrapper'>
            <button className='upload-button' onClick={handleButtonClick}>
              <UploadOutlined /> Upload new image
            </button>
            <input
              id='fileInput'
              type='file'
              multiple
              accept='image/jpeg, image/png'
              onChange={handleFileChange}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default PropertyPhotoUpload
