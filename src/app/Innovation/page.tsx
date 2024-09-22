import './inovation.scss'
import { BackgroundImage } from '../components/inovation/backgroundimage/background'
import { Header } from '../components/inovation/header/header'
import { ArtificialSection } from '../components/inovation/artificialsection/artificialsection'
import { AboutSection } from '../components/inovation/aboutsection/aboutSection'
import { SecondBackground } from '../components/inovation/secondbackground/secondbackground'
import { DataAnalytics } from '../components/inovation/dataAnalytics/dataAnalytics'
import { OnHover } from '../components/inovation/onhover/onhover'
import { VirtualBlockchain } from '../components/inovation/virtualBlockchain/virtualBlockchain'

const Service = () => {
  return (
    <div className='wrapper-service'>
      <BackgroundImage />
      <div className='wrapper-assist'>
        <Header />
        <ArtificialSection />
        <AboutSection />
      </div>

      <div className='second-image-container'>
        <SecondBackground />
      </div>

      <div className='wrapper-assist'>
        <DataAnalytics />
        <OnHover
          title='Hover over me!'
          content='This content is revealed when you hover over the title.'
        />
        <VirtualBlockchain />
      </div>
    </div>
  )
}

export default Service
