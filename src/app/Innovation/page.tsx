import './inovation.scss'
import { BackgroundImage } from '../components/inovation/backgroundimage/background'
import { Header } from '../components/inovation/header/header'
import { ArtificialSection } from '../components/inovation/artificialsection/artificialsection'
import { AboutSection } from '../components/inovation/aboutsection/aboutSection'
import { SecondBackground } from '../components/inovation/secondbackground/secondbackground'
import { DataAnalytics } from '../components/inovation/dataAnalytics/dataAnalytics'
import { OnHover } from '../components/inovation/onhover/onhover'
import { VirtualBlockchain } from '../components/inovation/virtualBlockchain/virtualBlockchain'

const cardsData = [
  {
    title: 'Predictive Modeling',
    content: `By analyzing historical data and market trends, we can develop predictive models to forecast property prices, rental yields, and investment returns, helping our clients make informed decisions.`,
  },
  {
    title: 'Customer Segmentation',
    content: `Data analytics helps us better understand our clients' preferences, behaviors, and needs, allowing us to tailor services and marketing efforts.`,
  },
  {
    title: 'Performance Monitoring',
    content: `We use data analytics to track the performance of our properties, investments, and marketing campaigns, optimizing strategies for maximum efficiency.`,
  },
]

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
        <OnHover cardsData={cardsData} />
        <VirtualBlockchain />
      </div>
    </div>
  )
}

export default Service
