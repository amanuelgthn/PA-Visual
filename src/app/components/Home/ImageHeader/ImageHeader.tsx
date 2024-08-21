import { Button, Flex } from 'antd'
import './ImageHeader.scss'

export const ImageHeader = () => {
  return (
    <Flex
      className='image-header-container'
      justify='space-evenly'
      vertical
      align='center'
    >
      <video autoPlay loop muted playsInline className='image-header-video'>
        <source
          src='/videos/458708_Finance_District_3840x2160.mp4'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>

      <p className='image-header-undertext'>
        expereince luxury & redifine living
      </p>
      <Button className='image-header-button' href='/Properties'>
        SEARCH PROPERTIES
      </Button>
    </Flex>
  )
}
