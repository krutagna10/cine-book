import MovieContext from "./MovieContext";
import { useState } from "react";

function MovieProvider({ children }) {
  const [movie, setMovie] = useState({});

  function handleSetMovie(movie) {
    setMovie(movie);
    console.log(movie);
  }

  const value = {
    movie: movie,
    onSetMovie: handleSetMovie,
  };

  console.log(movie);

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}

export default MovieProvider;
