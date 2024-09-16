import './inovation.scss'
import { BackgroundImage } from '../components/inovation/backgroundimage/background'
import { Header } from '../components/inovation/header/header'
import { ArtificialSection } from '../components/inovation/artificialsection/artificialsection'

const Service = () => {
  return (
    <div className='wrapper'>
      <div className='background-linear'></div>
      <BackgroundImage />
      <div className='wrapper-assist'>
        <Header />
        <ArtificialSection />
      </div>
    </div>
  )
}

export default Service
