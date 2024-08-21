import { Flex } from 'antd'
import './ImageHeader.scss'

export const ImageHeader = () => {
  return (
    <Flex className='about-image-header-container'>
      <Flex className='about_image_comtainer'>
        <img src='./home/logo.svg' alt='Global Property Logo' />

        <h1 className='about_main_header'>About us</h1>
        <p className='about_main_paragraph'>
          We are committed to providing exceptional service and expertise in the
          luxury real estate market. With a focus on innovation and excellence,
          we have established ourselves as leaders in facilitating the purchase,
          sale, and investment of high-end properties across Europe and
          internationally.
        </p>
      </Flex>
    </Flex>
  )
}
