import Header from "../components/Header/Header";
import CartProvider from "../context/CartContext/CartProvider";

function Main({ children }) {
  return (
    <CartProvider>
      <Header />
      <main>{children}</main>
    </CartProvider>
  );
}

export default Main;
