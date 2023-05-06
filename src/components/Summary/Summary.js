import { Link } from "react-router-dom";
import Container from "../UI/Container/Container";
import { useContext, useState } from "react";
import BookTicket from "../BookTicket/BookTicket";
import "./Summary.css";
import CartContext from "../../context/CartContext/CartContext";

function Summary({ movie }) {
  const [isTicketFormVisible, setIsTicketFormVisible] = useState(false);
  const { onAddItem } = useContext(CartContext);

  function handleAddTicket(quantity) {
    onAddItem({
      name: movie.name,
      price: 20,
      id: movie.id,
      quantity: quantity,
    });
    setIsTicketFormVisible(false);
  }

  function handleShowForm() {
    setIsTicketFormVisible(true);
  }

  function handleHideForm() {
    setIsTicketFormVisible(false);
  }

  return (
    <section className="summary-section">
      <Container>
        <div className="summary grid">
          <img
            className="summary__image"
            src={movie.image.original}
            alt={movie.name}
          />
          <div className="summary__content">
            <h2>{movie.name}</h2>
            <h3>Ticket Price: $20</h3>
            <p>{movie.summary}</p>
            <p>Status: {movie.status}</p>
            <p>Rating: {movie.rating.average}</p>
            <p>Genre: {movie.genres.join(", ")}</p>
            <button
              className="summary__btn btn btn--green"
              onClick={handleShowForm}
            >
              Book a Ticket
            </button>
            <Link className="summary__link btn btn--yellow" to="/">
              Go Back
            </Link>
          </div>
        </div>
        {isTicketFormVisible && (
          <BookTicket
            title={movie.name}
            onHideForm={handleHideForm}
            onAddTicket={handleAddTicket}
          />
        )}
      </Container>
    </section>
  );
}

export default Summary;
