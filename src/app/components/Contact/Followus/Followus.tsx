import './Followus.scss'
import Image from 'next/image'

export const Followus = () => {
  return (
    <section className='followus-container'>
      <h1 className='title'>You can follow us</h1>
      <p className='description'>
        Stay connected with us on social media for more luxury real estate
        insights and inspiration.
      </p>
      <hr />
      <nav className='socials-container' aria-label='Social Media Links'>
        <a
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Follow us on Facebook'
        >
          <Image
            src='/contact/facebook.svg'
            alt='Facebook icon'
            width={50}
            height={50}
          />
        </a>
        <a
          href='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Follow us on Instagram'
        >
          <Image
            src='/contact/instagram.svg'
            alt='Instagram icon'
            width={50}
            height={50}
          />
        </a>
        <a
          href='https://twitter.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Follow us on Twitter'
        >
          <Image
            src='/contact/twitter.svg'
            alt='Twitter icon'
            width={50}
            height={50}
          />
        </a>
        <a
          href='https://linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Follow us on LinkedIn'
        >
          <Image
            src='/contact/linkedin.svg'
            alt='LinkedIn icon'
            width={50}
            height={50}
          />
        </a>
      </nav>
    </section>
  )
}
