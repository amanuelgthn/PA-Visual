import { Flex } from 'antd'
import './TeamHeader.scss'

export const TeamHeader = () => {
  return (
    <Flex
      vertical
      className='team-container'
      justify='space-evenly'
      align='center'
    >
      <h2 className='team-header'>OUR TEAM</h2>
      <Flex
        className='team-inner-container'
        justify='space-evenly'
        align='center'
      >
        <Flex
          className='team-header-element'
          vertical
          justify='space-evenly'
          align='center'
        >
          <h3>MISSION</h3>
          <p>
            To provide our clients with unparalleled service and expertise,
            ensuring a seamless and rewarding experience in the luxury real
            estate market
          </p>
        </Flex>
        <Flex
          className='team-header-element'
          vertical
          justify='space-evenly'
          align='center'
        >
          <h3>VISION</h3>
          <p>
            To be the leading luxury real estate advisory firm, known for our
            innovative solutions, exceptional client service, and commitment to
            excellence.
          </p>
        </Flex>
      </Flex>
    </Flex>
  )
}
