import React from 'react'
import './BackgroundImage.scss'

export const BackgroundImage = () => {
  return (
    <div className='bg-container'>
      <div className='layer'></div>
      <img className='bg-image' src='/services/background.png' alt='' />
    </div>
  )
}
