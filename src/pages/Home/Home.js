import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import MovieProvider from "../../context/MovieProvider";
import Main from "../../layout/Main";

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
        <h1>App Component</h1>
        <Movies data={data} />
      </div>
    </Main>
  );
}

export default Home;
