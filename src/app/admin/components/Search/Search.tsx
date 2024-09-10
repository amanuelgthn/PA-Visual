import React from 'react'
import './Search.scss'
import { Input } from 'antd'
import { FilterOutlined, SearchOutlined } from '@ant-design/icons'

const Search = () => {
  return (
    <div style={{ width: '100%' }}>
      <Input
        className='custom-input'
        type='text'
        placeholder='Search property, clients, users & more'
        prefix={<SearchOutlined />}
        suffix={<FilterOutlined />}
      />
    </div>
  )
}

export default Search
