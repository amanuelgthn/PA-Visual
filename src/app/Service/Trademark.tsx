import React from 'react'
import './Trademark.css'
import ProAdvisorLogo from './Trademark.svg'
import ProAdvisorName from './TITLE.svg'
import ProAdvisorTitle from './SUBTITLE.svg'

const Trademark = () => (
  <>
    <div className='Trademark-container'>
      <img src={ProAdvisorLogo.src} alt='pro-advisor'></img>
      <img src={ProAdvisorName.src} alt='pro-advisor-name'></img>
      <img src={ProAdvisorTitle.src} alt='pro-advisor-subtitle'></img>
    </div>
  </>
)

export default Trademark
