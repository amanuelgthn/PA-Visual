import './background.scss'
import Image from 'next/image'

export const BackgroundImage = () => {
  return (
    <div className='wrapper'>
      <Image
        src='/inovation/background-innovation.png'
        alt='innovation'
        className='image-innovation'
        width={500}
        height={300}
      />
      <div className='overimage'></div>
    </div>
  )
}
