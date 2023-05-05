import { createContext } from "react";

const MovieContext = createContext({
  movie: {},
  onSetMovie: (movie) => {},
});

export default MovieContext;
