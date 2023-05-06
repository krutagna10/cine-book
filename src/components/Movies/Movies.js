import MovieCard from "../MovieCard/MovieCard";
import "./Movies.css";
import Container from "../UI/Container/Container";
import { useState } from "react";

function Movies({ data }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value.toLowerCase());
  }

  const filteredData = data.filter((item) => {
    return item.show.name.toLowerCase().includes(searchTerm);
  });

  return (
    <section className="movies-section">
      <Container className="movies">
        <input
          className="movies__search"
          type="text"
          placeholder="Search..."
          onChange={handleSearchTermChange}
        />
        <div className="movies__list grid">
          {filteredData.length === 0 ? (
            <h3 className="movies__text">No such movies found</h3>
          ) : (
            filteredData.map(
              (item, index) =>
                item.show.image && (
                  <MovieCard item={item} index={index} key={item.show.id} />
                )
            )
          )}
        </div>
      </Container>
    </section>
  );
}

export default Movies;
