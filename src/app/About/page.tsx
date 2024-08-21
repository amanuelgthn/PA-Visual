import { Flex } from 'antd'
import './About.scss'
import { ImageHeader } from '../components/About/ImageHeader/ImageHeader'
// import { HistoryHeader } from '../components/About/HistoryHeader/HistoryHeader'
// import { TeamHeader } from '../components/About/TeamHeader/TeamHeader'
// import { ImageCarousel } from '../components/About/ImageCarousel/ImageCarousel'

const About = () => {
  return (
    <>
      <Flex vertical className='wrapper-about'>
        <img className='bg_image' src='/about/bg.jpg' alt='' />
        <Flex className='wrapper-assist-about'>
          <ImageHeader />
        </Flex>
      </Flex>
    </>
  )
}

export default About
