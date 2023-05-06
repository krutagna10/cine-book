import { Link, useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ index, item }) {
  const navigate = useNavigate();

  console.log(item);

  function handleClick() {
    localStorage.setItem("movie", JSON.stringify(item.show));
    navigate("/summary");
  }

  return (
    <div className="card">
      <img
        className="card__image"
        src={item.show.image.medium}
        alt={item.show.name}
      />
      <div className="card__content flow">
        <h2>{item.show.name}</h2>
        <p>Status: {item.show.status}</p>
        <p>Rating: {item.show.rating.average}</p>
        <p>Genre: {item.show.genres.join(", ")}</p>
        <button onClick={handleClick} className="card__btn btn btn--green">
          Summary
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
