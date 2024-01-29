import React from "react";

const Moviecard = ({ movies }) => {
  if (!movies) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {movies &&
        movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
          </div>
        ))}
    </>
  );
};

export default Moviecard;
