import MovieProvider from "../context/MovieProvider";

function Main({ children }) {
  return (
    <>
      <MovieProvider>{children}</MovieProvider>
    </>
  );
}

export default Main;
