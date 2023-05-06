import Modal from "../UI/Modal/Modal";
import CartContext from "../../context/CartContext/CartContext";
import { useContext } from "react";
import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";

function Cart({ onShowCart, onHideCart }) {
  const { items } = useContext(CartContext);

  const totalAmount = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const hasItems = items.length > 0;

  return (
    <Modal onHideCart={onHideCart}>
      <ul className="cart-items">
        {hasItems ? (
          <>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </>
        ) : (
          <h2>No items in the cart</h2>
        )}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className="actions flex">
        <button onClick={onHideCart} className="btn btn--red">
          Close
        </button>
        {hasItems && (
          <button className="btn  btn--green" onClick={onShowCart}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
