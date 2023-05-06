import Main from "../../layout/Main";
import { Link } from "react-router-dom";
import Summary from "../../components/Summary/Summary";

function Booking() {
  const movie = JSON.parse(localStorage.getItem("movie"));

  return (
    <Main>
      <div>
        <Summary movie={movie} />
      </div>
    </Main>
  );
}

export default Booking;
