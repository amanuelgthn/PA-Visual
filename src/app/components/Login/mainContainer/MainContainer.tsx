import './MainContainer.scss'
import { Form } from '../form/Form'

export const MainContainer = () => {
  return (
    <div className='login-wrapper'>
      <div className='first-half both-halfs'>
        <h1 className='title'>Welcome back!</h1>
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
          <source src='/videos/loginvid.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
