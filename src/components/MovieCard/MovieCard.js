import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.setItem("movie", JSON.stringify(movie));
    navigate("/booking");
  }

  return (
    <div className="card">
      <img
        className="card__image"
        src={movie.image.original}
        alt={movie.name}
      />
      <div className="card__content flow">
        <h2>{movie.name}</h2>
        <p>Status: {movie.status}</p>
        <p>
          Rating: {movie.rating.average ? movie.rating.average : "Not rated"}
        </p>
        <p>Language: {movie.language}</p>
        <p>Genre: {movie.genres.join(", ")}</p>
        <button onClick={handleClick} className="card__btn btn btn--green">
          View Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
