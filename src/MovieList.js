import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch movie data from the API
    axios.get('https://dummyapi.online/api/movies')
      .then(response => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the movies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img className="movie-img" src={movie.image} alt={movie.movie} />
          <div className="movie-info">
            <h3 className="movie-title">{movie.movie}</h3>
            <p className="movie-rating"><strong>Rating:</strong> {movie.rating}</p>
            <a className="movie-link" href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
              View on IMDb
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
