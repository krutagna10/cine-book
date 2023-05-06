import Header from "../components/Header/Header";

function Main({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Main;
