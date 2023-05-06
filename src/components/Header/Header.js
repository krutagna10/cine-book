import { IonIcon } from "@ionic/react";
import { cart } from "ionicons/icons";
import Container from "../UI/Container/Container";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Container className="flex flex--justify-space flex--align-center">
        <Link to="/" className="header__heading-link">
          <h1 className="header__heading">Cine Book</h1>
        </Link>
        <button>
          <IonIcon icon={cart} />
          <span>Your Cart</span>
          <span>0</span>
        </button>
      </Container>
    </header>
  );
}

export default Header;
