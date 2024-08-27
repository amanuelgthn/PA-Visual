import PopUpWindow from './components/Home/PopUpWindow/PopUpWindow'
import { ContactHeader } from './components/Home/ContactHeader/ContactHeader'
import { ExploreHeader } from './components/Home/ExploreHeader/ExploreHeader'
import { ImageHeader } from './components/Home/ImageHeader/ImageHeader'
import { WelcomeHeader } from './components/Home/WelcomeHeader/WelcomeHeader'
import './page.css'
import { Flex } from 'antd'

export default function Home() {
  return (
    <>
      <Flex className='wrapper-body'>
        <div className='wrapper'>
          <div className='wrapper-assist'>
            <PopUpWindow />
            <ImageHeader />
            <WelcomeHeader />
          </div>
          <ExploreHeader />
          <ContactHeader />
        </div>
      </Flex>
    </>
  )
}
