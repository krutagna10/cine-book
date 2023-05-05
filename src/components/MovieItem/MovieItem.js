import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

function MovieItem({ index, item }) {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.setItem("movie", JSON.stringify(item.show));
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
