import React, { useEffect, useState } from 'react'
import './PropertyPhotoUpload.scss'
import { Image } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { TiDelete } from 'react-icons/ti'
import { BsImageFill } from 'react-icons/bs'

type PropertyPhotoUploadProps = {
  propertyImages: string[]
  uploadedImages: string[]
  onFileUpload: (file: FileList | null) => void
  onRemoveImage: (index: number) => void
}

const PropertyPhotoUpload = ({
  propertyImages,
  uploadedImages,
  onFileUpload,
  onRemoveImage,
}: PropertyPhotoUploadProps) => {
  const [propertyImagesState, setPropertyImagesState] = useState<string[]>(
    propertyImages || [],
  )
  const [uploadedImagesState, setUploadedImagesState] = useState<string[]>(
    uploadedImages || [],
  )
  const [fileInputKey, setFileInputKey] = useState(Date.now())
  const [prevUploadedImagesLength, setPrevUploadedImagesLength] = useState(0)
  useEffect(() => {
    setPropertyImagesState(propertyImages)
  }, [propertyImages])

  useEffect(() => {
    setUploadedImagesState(uploadedImages)
  }, [uploadedImages])

  useEffect(() => {
    if (uploadedImagesState.length > prevUploadedImagesLength) {
      const newImages = uploadedImagesState.slice(prevUploadedImagesLength)
      setPropertyImagesState((prev) => [...prev, ...newImages])
      setPrevUploadedImagesLength(uploadedImagesState.length) // Update the previous length
    }
  }, [prevUploadedImagesLength, uploadedImagesState])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onFileUpload) {
      onFileUpload(e.target.files)
    }
    setFileInputKey(Date.now())
  }

  const handleButtonClick = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement
    if (fileInput) {
      fileInput.click()
    }
  }

  const handleRemoveImage = (index: number) => {
    setPropertyImagesState((prev) => prev.filter((_, i) => i !== index))
    onRemoveImage(index)
  }

  const handleIconClick = (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    index: number,
  ) => {
    event.stopPropagation()
    handleRemoveImage(index)
  }

  const makeImageMain = (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    index: number,
    isUploaded: boolean,
  ) => {
    event.stopPropagation()
    if (isUploaded) {
      const mainImage = uploadedImagesState[index]
      setUploadedImagesState((prev) => [
        mainImage,
        ...prev.filter((_, i) => i !== index),
      ])
    } else {
      const mainImage = propertyImagesState[index]
      setPropertyImagesState((prev) => [
        mainImage,
        ...prev.filter((_, i) => i !== index),
      ])
    }
  }

  const renderImageSection = (images: string[], isUploaded: boolean) => (
    <section className='right'>
      <h1>Photos</h1>
      <div className='photo-group'>
        <Image.PreviewGroup>
          {images.length > 0 ? (
            <>
              {images.map((image, index) => (
                <Image
                  preview={{
                    mask: (
                      <>
                        <TiDelete
                          onClick={(event) => handleIconClick(event, index)}
                          size={20}
                          style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                          }}
                        />
                        {index !== 0 && (
                          <BsImageFill
                            onClick={(event) =>
                              makeImageMain(event, index, isUploaded)
                            }
                            size={20}
                            style={{
                              position: 'absolute',
                              top: 10,
                              left: 10,
                            }}
                          />
                        )}
                      </>
                    ),
                  }}
                  key={`${isUploaded ? 'uploaded' : 'property'}-${index}`}
                  src={image}
                  alt='property photo'
                />
              ))}
            </>
          ) : (
            <div className='photo-group'>
              {[...Array(4)].map((_, index) => (
                <div key={index} className='emptyImageDiv'>
                  <BsImageFill size={65} color='#504f52' />
                </div>
              ))}
            </div>
          )}
        </Image.PreviewGroup>
      </div>
      <div className='upload-input-wrapper'>
        <button className='upload-button' onClick={handleButtonClick}>
          <UploadOutlined /> Upload new image
        </button>
        <input
          key={fileInputKey}
          id='fileInput'
          type='file'
          accept='image/jpeg, image/png'
          onChange={handleFileChange}
        />
      </div>
    </section>
  )

  return (
    <main className='photo-wrapper'>
      {propertyImagesState.length > 0 ? (
        <>
          <section className='left'>
            <h1>Property Image</h1>
            <div className='image-container'>
              <Image src={propertyImagesState[0]} alt='property photo' />
            </div>
          </section>
          {renderImageSection(propertyImagesState, false)}
        </>
      ) : (
        <>
          <section className='left'>
            <h1>Property Image</h1>
            {uploadedImagesState.length > 0 ? (
              <div className='image-container'>
                <Image src={uploadedImagesState[0]} alt='property photo' />
              </div>
            ) : (
              <div style={{ padding: '10px' }}>
                <div className='emptyImageDivLeft'>
                  <BsImageFill size={65} color='#504f52' />
                </div>
              </div>
            )}
          </section>
          {renderImageSection(uploadedImagesState, true)}
        </>
      )}
    </main>
  )
}

export default PropertyPhotoUpload
