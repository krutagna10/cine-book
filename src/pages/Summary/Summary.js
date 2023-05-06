import Main from "../../layout/Main";
import { Link } from "react-router-dom";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

function Summary() {
  const movie = JSON.parse(localStorage.getItem("movie"));
  console.log(movie);

  return (
    <Main>
      <div style={{}}>
        <h1>Summary</h1>
        <SummaryCard movie={movie} />
      </div>
    </Main>
  );
}

export default Summary;
