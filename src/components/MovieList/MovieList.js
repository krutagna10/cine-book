import MovieItem from "../MovieItem/MovieItem";

function MovieList({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Movie Name</th>
          <th>Movie Image</th>
          <th>Preview Movie Button</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <MovieItem item={item} index={index} key={index} />
        ))}
      </tbody>
    </table>
  );
}

export default MovieList;
