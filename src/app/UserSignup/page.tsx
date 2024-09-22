import './Signup.scss'
import { MainContainer } from '../components/Signup/mainContainer/MainContainer'
import { Followus } from '../components/Contact/Followus/Followus' // Import the Followus component from the Contact folder to avoid repetition

const Signup = () => {
  return (
    <>
      <div className='wrapper background'>
        <div className='wrapper-assist'>
          <MainContainer />
          {/* To avoid repetition */}
          <Followus />
        </div>
      </div>
    </>
  )
}

export default Signup
