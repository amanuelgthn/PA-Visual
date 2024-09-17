import './secondbackground.scss'
import Image from 'next/image'

export const SecondBackground = () => {
  return (
    <div className='second-background-container'>
      <Image
        src='/inovation/secondbg.png'
        alt='secondbackground'
        className='image-secondbackground'
        width={500}
        height={300}
      />
      <div className='over-image-second'></div>
    </div>
  )
}
