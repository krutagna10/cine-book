import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../../context/MovieContext";

function MovieItem({ index, item }) {
  const { onSetMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  function handleClick() {
    console.log("Hello World");
    onSetMovie(item.show);
    console.log(item.show);
    navigate("/summary");
  }

  return (
    <tr key={index}>
      <td>{item.show.name}</td>
      <td>
        <img src={item.show.image?.medium} alt={item.show.name} />
      </td>
      <td>
        <button style={{ marginInline: "1rem" }} onClick={handleClick}>
          Go to Summary
        </button>
      </td>
    </tr>
  );
}

export default MovieItem;
