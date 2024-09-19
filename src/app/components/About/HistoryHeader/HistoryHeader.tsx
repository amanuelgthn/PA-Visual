'use client'
import { Flex } from 'antd'
import React, { useState } from 'react'
import './HistoryHeader.scss'

const texts = [
  'Global Property was founded 10 years ago in 2014 in Barcelona, Spain, by a French entrepreneur and Emelina Cortez, who currently serves as CEO. Since its inception, the company has been at the forefront of real estate investments, focusing on maximizing return on investment (ROI) per square meter in an international context. Emelina, an architect and financial expert, has led Global Property to expand into key markets around the world, establishing strategic relationships with investors and developers.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.',
]

const TextBox = ({
  text,
  style,
}: {
  text: string
  style?: React.CSSProperties
}) => {
  return (
    <Flex className='historyheader-textbox' style={style}>
      <p className='historyheader-textbox-p'>{text}</p>
    </Flex>
  )
}

export const HistoryHeader = () => {
  const [current, setCurrent] = useState(1)

  const handleDotClick = (index: number) => {
    setCurrent(index + 1)
  }

  return (
    <Flex
      className='history-container'
      vertical
      justify='center'
      align='center'
    >
      <Flex className='history-container-header-container'>
        <h2 className='history-container-header'>OUR HISTORY</h2>
      </Flex>

      <TextBox style={{ marginRight: '10%' }} text={texts[current - 1]} />

      <Flex className='pagination-dots' style={{ marginTop: '20px' }}>
        {texts.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index + 1 ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </Flex>
    </Flex>
  )
}

export function Chart() {}
