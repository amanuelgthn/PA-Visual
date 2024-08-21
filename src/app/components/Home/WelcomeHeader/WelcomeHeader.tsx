import { Flex } from 'antd'
import './WelcomeHeader.scss'
interface IWelcomeNode {
  HEADER: string
  TEXT: string
}
const WelcomeNode = ({ HEADER, TEXT }: IWelcomeNode) => {
  return (
    <Flex vertical className='welcome-header-node' gap={20}>
      <h5 className='welcome-header-node-header'>{HEADER}</h5>
      <p className='welcome-header-node-text'>{TEXT}</p>
    </Flex>
  )
}

const CustomDivider = () => {
  return <div className='DividerStyle'></div>
}

export const WelcomeHeader = () => {
  return (
    <Flex
      vertical
      justify='space-evenly'
      align='center'
      className='welcome-header-container'
      gap={40}
    >
      <h4 className='welcome-header-header'>WELCOME TO</h4>
      <CustomDivider />
      <img
        src='./home/logoSmall.svg'
        alt='Global Property Logo'
        className='welcome-header-logo'
      />
      <p className='welcome-header-text'>
        Discover the pinnacle of luxury real estate with Global Property. We
        specialize in the sale of prestigious properties across Europe and
        internationally, offering exclusive services tailored to meet the needs
        of our most discerning clients. Whether you are looking to buy, sell, or
        invest, our dedicated team is here to provide unparalleled support and
        expertise.
      </p>
      <h4 className='welcome-header-header' style={{ marginTop: '8vh' }}>
        EXPERIENCE THE DIFFERENCE
      </h4>
      <Flex
        justify='space-evenly'
        align='center'
        className='welcome-header-nodes-container'
      >
        <WelcomeNode HEADER='Exclusive Properties' TEXT='' />
        <WelcomeNode HEADER='Investment Advisory' TEXT='' />
        <WelcomeNode HEADER='Architecture & Design' TEXT=' ' />
        <WelcomeNode HEADER='Cutting-Edge Technology' TEXT='' />
      </Flex>
    </Flex>
  )
}
