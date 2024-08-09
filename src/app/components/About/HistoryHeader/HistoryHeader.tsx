import { Flex } from 'antd'
import './HistoryHeader.scss'

const TextBox = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <Flex className='historyheader-textbox' style={style}>
      <p className='historyheader-textbox-p'>
        Founded in [Year], Property Advisor was born out of a passion for luxury
        real estate and a vision to redefine the way high-end property
        transactions are conducted. Over the years, we have grown from a small
        team of dedicated professionals into a renowned company known for our
        personalized approach and cutting-edge technology.
      </p>
    </Flex>
  )
}

export const HistoryHeader = () => {
  return (
    <Flex
      className='history-container'
      vertical
      justify='center'
      align='center'
    >
      <Flex className='history-container-header-container'>
        <h2 className='history-container-header'>OUR HISTORY</h2>
      </Flex>
      <TextBox style={{ marginRight: '10%' }} />
      <TextBox style={{ marginLeft: '10%' }} />
      <TextBox style={{ marginRight: '10%' }} />
    </Flex>
  )
}

export function Chart() {}
