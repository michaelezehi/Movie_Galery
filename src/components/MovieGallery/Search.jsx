import React from 'react'
import SearchIcon from '../../resources/svg/search.svg'
import './MovieGallery.css'

const Search = ({ onSearch, searchTerm, onChange, onKeyDown }) => {
  return (
    <div className="search">
      <input
        value={searchTerm}
        onChange={onChange}
        placeholder="Search for movies"
        onKeyDown={onKeyDown}
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => onSearch(searchTerm)}
      />
    </div>
  )
}

export default Search
