import { IonIcon } from "@ionic/react";
import { cart } from "ionicons/icons";
import Container from "../UI/Container/Container";
import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import Cart from "../Cart/Cart";

function Header() {
  const [isCartVisible, setIsCartVisible] = useState(false);

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
          <IonIcon icon={cart} />
          <span>Your Cart</span>
        </button>
      </Container>
      {isCartVisible && (
        <Cart onShowCart={handleShowCart} onHideCart={handleHideCart} />
      )}
    </header>
  );
}

export default Header;
