import './header.scss'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className='header-container'>
      <h1>innovation & technology</h1>
      <p>
        At Global Property , we are committed to staying at the forefront of
        innovation in the luxury real estate market. We leverage advanced
        technologies, including artificial intelligence (AI) and data analytics,
        to enhance our services and provide our clients with a superior real
        estate experience. Explore how we use these technologies to
        revolutionize the way we operate and deliver value to our clients:
      </p>
      <Image
        src='/inovation/logo.png'
        alt='innovation'
        width={500}
        height={300}
      />
    </div>
  )
}
