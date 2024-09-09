import { Flex } from 'antd'
import './About.scss'
import { ImageHeader } from '../components/About/ImageHeader/ImageHeader'
import { HistoryHeader } from '../components/About/HistoryHeader/HistoryHeader'
import { MilestonesHeader } from '../components/About/MilestonesHeader/MinestonesHeader'
import { AdditionalHeader } from '../components/About/AdditionalHeader/AdditionalHeader'
import { TeamHeader } from '../components/About/TeamHeader/TeamHeader'
import { IconsHeader } from '../components/About/IconsHeader/IconsHeader'
import { BackGroundVideo } from '../components/About/BackGroundImage/BackGroundVideo'

const About = () => {
  return (
    <>
      <Flex vertical className='wrapper-about'>
        <BackGroundVideo />
        <Flex className='wrapper-assist-about'>
          <ImageHeader />
          <HistoryHeader />
          <MilestonesHeader />
          <AdditionalHeader />
        </Flex>
        <TeamHeader />
        <Flex className='wrapper-assist-about'>
          <IconsHeader />
        </Flex>
      </Flex>
    </>
  )
}

export default About
