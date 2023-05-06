import "./BookTicket.css";
import { useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

const AddBook = ({ title, onHideForm, onAddTicket }) => {
  const [quantity, setQuantity] = useState("");

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onAddTicket(Number(quantity));
  };

  return (
    <Modal>
      <div className="form-wrapper">
        <form className="form grid grid--gap" onSubmit={submitHandler}>
          <h2 className="form__heading">Book a Ticket</h2>
          <div className="form__input-wrapper">
            <label htmlFor="form__input-title">
              <input
                className="form__input"
                type="text"
                value={title}
                placeholder="Title"
              />
            </label>
          </div>
          <div className="form__input-wrapper">
            <label htmlFor="form__input-quantity">
              <input
                className="form__input"
                onChange={handleQuantityChange}
                type="number"
                id="form__input-ticket"
                placeholder="Number of Tickets"
                required
                min="1"
              />
            </label>
          </div>
          <Button className="form__btn btn--green" type="submit">
            Book Ticket
          </Button>
          <Button className="form__btn btn--red" onClick={onHideForm}>
            Cancel
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default AddBook;
