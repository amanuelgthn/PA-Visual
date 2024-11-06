import React from 'react'
import { SearchBarProps } from '@/app/Types/FAQ/FAQTypes'

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => (
  <input
    type='search'
    className='QueryFAQ-input'
    placeholder='Search FAQs...'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)} // Update the search term state
  />
)

export default SearchBar
