import './BackGroundVideo.scss'

export const BackGroundVideo = () => {
  return (
    <div className='about-background-video'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='image-header-video-about'
      >
        <source src='/videos/458195_City_Town_3840x2160.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
