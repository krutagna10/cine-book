import Main from "../../layout/Main";
import { Link } from "react-router-dom";

function Summary() {
  const movie = JSON.parse(localStorage.getItem("movie"));
  console.log(movie);

  return (
    <Main>
      <div style={{ maxWidth: "48rem" }}>
        <h1>Summary</h1>
        <table>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Summary</th>
              <th>Book Ticket Button</th>
              <th>Go Back Button</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{movie.name}</td>
              <td>{movie.summary}</td>
              <td>
                <button>Book a Ticket</button>
              </td>
              <td>
                <Link to="/">Go Back</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Main>
  );
}

export default Summary;
