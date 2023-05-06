import { IonIcon } from "@ionic/react";
import { cart } from "ionicons/icons";
import Container from "../UI/Container/Container";
import { Link } from "react-router-dom";
import "./Header.css";
import { useContext, useState } from "react";
import Cart from "../Cart/Cart";
import CartContext from "../../context/CartContext/CartContext";

function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const { items } = useContext(CartContext);

  const numberOfItems = items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  function handleShowCart() {
    setIsCartVisible(true);
  }

  function handleHideCart() {
    setIsCartVisible(false);
  }

  return (
    <header className="header">
      <Container className="flex flex--justify-space flex--align-center">
        <Link to="/" className="header__heading-link">
          <h1 className="header__heading">CineBook</h1>
        </Link>
        <button className="header__btn" onClick={handleShowCart}>
          <IonIcon className="header__btn-icon" icon={cart} />
          <span>Your Cart</span>
          <span className="header__btn-badge">{numberOfItems}</span>
        </button>
      </Container>
      {isCartVisible && <Cart onHideCart={handleHideCart} />}
    </header>
  );
}

export default Header;
