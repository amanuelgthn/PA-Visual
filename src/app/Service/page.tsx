'use client'
import './Service.scss'
import { BackgroundImage } from '../components/Services/backgroundImage/BackgroundImage'
import { MainHeader } from '../components/Services/MainHeader/MainHeader'
import { DescriptionSections } from '../components/Services/DescriptionSections/DescriptionSections'

const Innovation = () => {
  return (
    <>
      <BackgroundImage />
      <div style={{ minHeight: '100vh' }}>
        <div className='wrapper-services'>
          <div className='wrapper-assist-services'>
            <MainHeader />
            <DescriptionSections />
          </div>
        </div>
      </div>
    </>
  )
}

export default Innovation
