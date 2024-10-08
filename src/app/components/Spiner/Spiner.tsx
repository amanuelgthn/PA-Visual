import React from 'react'
import { Spin } from 'antd'

const Spinner: React.FC = () => {
  return <Spin fullscreen size='large' spinning={true} />
}

export default Spinner
