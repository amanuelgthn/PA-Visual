import { Flex } from 'antd'
import './ExploreHeader.scss'

const CustomDivider = () => {
  return <div className='DividerStyleExplore'></div>
}

export const ExploreHeader = () => {
  return (
    <Flex
      vertical
      justify='space-evenly'
      align='center'
      className='explore-header-container'
      gap={40}
    >
      <h4 className='explore-header-header'>EXPLORE OUR FEATURED PROPERTIES</h4>
      <CustomDivider />
      <p className='explore-header-text'>
        Experience the finest in luxury living. Browse our exclusive listings
        and find your dream home today.
      </p>
      <button>EXPLORE NOW</button>
    </Flex>
  )
}
