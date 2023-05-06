import { useEffect, useState } from "react";
import Main from "../../layout/Main";
import Movies from "../../components/Movies/Movies";

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
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
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
