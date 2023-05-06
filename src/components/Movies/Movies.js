import MovieCard from "../MovieCard/MovieCard";
import "./Movies.css";
import Container from "../UI/Container/Container";
import { useState } from "react";

function Movies({ movies }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value.toLowerCase());
  }

  function handleIsSortedChange(event) {
    setIsSorted(event.target.checked);
  }

  let filteredData = movies.filter((movie) => {
    return movie.name.toLowerCase().includes(searchTerm);
  });

  if (isSorted) {
    filteredData = [...filteredData].sort((itemA, itemB) => {
      return itemB.rating.average - itemA.rating.average;
    });
  }

  return (
    <section className="movies-section">
      <Container className="movies">
        <div className="flex flex--align-center flex--gap">
          <label style={{ whiteSpace: "nowrap" }}>
            Sort by rating: {"  "}
            <input type="checkbox" onChange={handleIsSortedChange} />
          </label>
          <input
            className="movies__search"
            type="text"
            placeholder="Search..."
            onChange={handleSearchTermChange}
          />
        </div>
        <div className="movies__list grid">
          {filteredData.length === 0 ? (
            <h3 className="movies__text">No such movies found</h3>
          ) : (
            filteredData.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          )}
        </div>
      </Container>
    </section>
  );
}

export default Movies;
