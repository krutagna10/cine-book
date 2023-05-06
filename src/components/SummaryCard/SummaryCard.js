import { Link } from "react-router-dom";
import Container from "../UI/Container/Container";
import { useContext, useState } from "react";
import BookTicket from "../BookTicket/BookTicket";
import "./SummaryCard.css";
import CartContext from "../../context/CartContext/CartContext";

function SummaryCard({ movie }) {
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
    <Container>
      <div className="summary-card grid">
        <img src={movie.image.original} alt={movie.name} />
        <div className="summary-card__content">
          <h2>{movie.name}</h2>
          <h3>Ticket Price: $20</h3>
          <p>{movie.summary}</p>
          <p>Status: {movie.status}</p>
          <p>Rating: {movie.rating.average}</p>
          <p>Genre: {movie.genres.join(", ")}</p>
          <button className="btn btn--green" onClick={handleShowForm}>
            Book a Ticket
          </button>
          <Link className="summary-card__link btn btn--yellow" to="/">
            See Movie List
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
  );
}

export default SummaryCard;
