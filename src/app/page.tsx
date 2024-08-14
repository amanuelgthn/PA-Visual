import PopUpWindow from './components/Home/PopUpWindow/PopUpWindow'
import { ContactHeader } from './components/Home/ContactHeader/ContactHeader'
import { ExploreHeader } from './components/Home/ExploreHeader/ExploreHeader'
import { ImageHeader } from './components/Home/ImageHeader/ImageHeader'
import { WelcomeHeader } from './components/Home/WelcomeHeader/WelcomeHeader'

export default function Home() {
  return (
    <>
      <PopUpWindow />
      <ImageHeader />
      <WelcomeHeader />
      <ExploreHeader />
      <ContactHeader />
    </>
  )
}
