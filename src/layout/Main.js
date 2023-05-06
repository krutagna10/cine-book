import Header from "../components/Header/Header";
import CartProvider from "../context/CartContext/CartProvider";

function Main({ children }) {
  return (
    <CartProvider>
      <Header />
      {children}
    </CartProvider>
  );
}

export default Main;
