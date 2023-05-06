import { useEffect, useState } from "react";
import Main from "../../layout/Main";
import Movies from "../../components/Movies/Movies";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Modal from "../../components/UI/Modal/Modal";
import BookTicket from "../../components/BookTicket/BookTicket";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Main>
      <div className="app">
        <Movies data={data} />
        {/*<BookTicket />*/}
      </div>
    </Main>
  );
}

export default Home;
