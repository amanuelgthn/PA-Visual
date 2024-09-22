import './login.scss'
import { MainContainer } from '../components/Login/mainContainer/MainContainer'
import { Followus } from '../components/Contact/Followus/Followus' // to avoid repetition

const page = () => {
  return (
    <div className='wrapper background'>
      <div className='wrapper-assist'>
        <MainContainer />
        <Followus />
      </div>
    </div>
  )
}

export default page
