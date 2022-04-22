import React from 'react'
import Box from '@mui/material/Box'
import MovieCard from './MovieCard'

import './MovieGallery.css'

const MovieList = ({ movies }) => {
  return (
    <>
      {movies ? (
        <div className="container">
          {movies.map((movie) => {
            return (
              <Box key={movie.imdbID}>
                <MovieCard movie={movie} />
              </Box>
            )
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </>
  )
}

export default MovieList
