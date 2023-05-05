import MovieProvider from "../../context/MovieProvider";
import { useContext } from "react";
import MovieContext from "../../context/MovieContext";
import Main from "../../layout/Main";

function Summary() {
  const context = useContext(MovieContext);
  console.log(context);

  function handleShowMovie() {
    console.log(context);
  }

  return (
    <Main>
      <div>
        <h1>Summary</h1>
        <button onClick={handleShowMovie}>Show Movie</button>
      </div>
    </Main>
  );
}

export default Summary;
