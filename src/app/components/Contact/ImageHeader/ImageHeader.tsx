import { Flex } from 'antd'
import './ImageHeader.scss'
import { CONSTANTS } from '@/app/Utils/config/Constants'

export const ImageHeader = () => {
  return (
    <Flex
      className='contact-image-header-container'
      justify='space-evenly'
      vertical
      align='center'
    >
      <h2 className='contact-header-text'>Contact us</h2>
      <p className='contact-image-header-undertext'>
        {CONSTANTS.STRINGS.EN.CONTACT_TEXT}
      </p>
    </Flex>
  )
}
