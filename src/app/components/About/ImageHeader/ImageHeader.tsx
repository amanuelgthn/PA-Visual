import { Flex } from 'antd'
import './ImageHeader.scss'
import { CONSTANTS } from '@/app/Utils/config/Constants'

export const ImageHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      className='about-image-header-container'
      justify='center'
      vertical
      align='center'
    >
      <img src='./home/logo.svg' alt='Global Property Logo' />

      <Flex
        vertical
        className='about-image-header-second-container'
        justify='center'
        align='center'
      >
        <h2 className='about-image-header-header'>ABOUT US</h2>
        <p className='about-image-header-text'>
          {CONSTANTS.STRINGS.EN.ABOUT_TEXT}
        </p>
      </Flex>

      {children}
    </Flex>
  )
}
