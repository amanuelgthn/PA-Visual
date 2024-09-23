import './MainContainer.scss'
import { Form } from '../../../components/Signup/Form/Form'

export const MainContainer = () => {
  return (
    <div className='signup-container'>
      <div className='first-half both-halfs'>
        <h1 className='title'>Get Started</h1>
        <Form />
      </div>
      <div className='second-half both-halfs'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='video'
          aria-label='Property Advisor introduction video'
        >
          <source src='/videos/signupvid.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
