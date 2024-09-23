'use client'
import './ImageHeader.scss'
import { Form } from '../Form/form'

export const ImageHeader = () => {
  return (
    <section className='contact-container'>
      <div className='first-half both-halfs'>
        <h1 className='title'>Contact Us</h1>
        <p>
          Ready to experience the Property Advisor difference? Contact us today
          to learn more about how we can help you achieve your real estate
          goals.
        </p>

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
          <source src='/contact/video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
