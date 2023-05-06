import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import Container from "../UI/Container/Container";

function MovieList({ data }) {
  console.log(data);

  return (
    <Container className="movies grid">
      {data.map(
        (item, index) =>
          item.show.image && (
            <MovieCard item={item} index={index} key={item.show.id} />
          )
      )}
    </Container>
  );
}

export default MovieList;
