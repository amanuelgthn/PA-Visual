import { Button, Flex } from 'antd'
import './ImageHeader.scss'
import { CONSTANTS } from '@/app/Utils/config/Constants'

export const ImageHeader = () => {
  return (
    <Flex
      className='image-header-container'
      justify='space-evenly'
      vertical
      align='center'
    >
      <img src='./home/logo.svg' alt='Global Property Logo' />
      <p className='image-header-undertext'>
        {CONSTANTS.STRINGS.EN.HOME_HEADER}
      </p>
      <Button className='image-header-button' href='/Properties'>
        SEARCH PROPERTIES
      </Button>
    </Flex>
  )
}
