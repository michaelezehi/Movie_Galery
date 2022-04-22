import React, { useState, useEffect } from 'react'
import Search from './Search'
import MovieList from './MovieList'

import './MovieGallery.css'

const API_URL = 'http://www.omdbapi.com?apikey=806647a4'

const MovieGallery = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState(title)
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    searchMovies(title)
  }, [title])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data)
    setMovies(data.Search)
  }

  const onSearchMovies = (e) => {
    if (e.key === 'Enter') {
      searchMovies(e.target.value)
      return
    }
    setSearchTerm(e.target.value)
  }

  return (
    <div className="movie-gallery" data-testid="movie-gallery">
      <h1>Movie Gallery</h1>
      <Search
        onSearch={onSearchMovies}
        searchTerm={searchTerm}
        onChange={onSearchMovies}
        onKeyDown={onSearchMovies}
      />

      <div className="container">
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default MovieGallery
