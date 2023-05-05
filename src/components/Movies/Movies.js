import MovieList from "../MovieList/MovieList";

function Movies({ data }) {
  return (
    <div>
      <h1>Movies</h1>
      <MovieList data={data} />
    </div>
  );
}

export default Movies;
