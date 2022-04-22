import React from 'react'
import './MovieGallery.css'

import Rating from '../Rating'

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div>
      <div className="movie" key={imdbID}>
        <div>
          <p>{Year}</p>
        </div>

        <div>
          <img
            src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'}
            alt={Title}
          />
        </div>

        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
      <Rating />
    </div>
  )
}

export default MovieCard
