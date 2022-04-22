import React, { useState, useEffect } from "react";
import Rating from './index';
import Box from '@mui/material/Box';
import MovieCard from "./MovieCard";
import SearchIcon from "../../resources/svg/search.svg";
import "./MovieGallery.css";

const API_URL = "http://www.omdbapi.com?apikey=806647a4";


const MovieGallery = () => {

    const [searchTerm, setSearchTerm] = useState("");
     const [movies, setMovies] = useState([]);


   const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data)
      setMovies(data.Search);
   };

    useEffect(() => {
        searchMovies("spiderman");
    }, [movies]);
   
  return (
    <div className="movie-gallery" data-testid='movie-gallery'>
      <h1>Movie Gallery</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map(movie => {
           return (
             <Box key={movie.imdbID}>
               <MovieCard movie={movie} />
               <Rating/>
             </Box>
            );
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default MovieGallery;