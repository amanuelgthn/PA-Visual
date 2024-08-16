import { Flex } from 'antd'
import './About.scss'
import { ImageHeader } from '../components/About/ImageHeader/ImageHeader'
import { HistoryHeader } from '../components/About/HistoryHeader/HistoryHeader'
import { TeamHeader } from '../components/About/TeamHeader/TeamHeader'
import { ImageCarousel } from '../components/About/ImageCarousel/ImageCarousel'

const About = () => {
  return (
    <>
      <Flex vertical style={{ minHeight: '100vh' }}>
        <ImageHeader>
          <HistoryHeader />
        </ImageHeader>
        <TeamHeader />
        <ImageCarousel />
      </Flex>
    </>
  )
}

export default About
