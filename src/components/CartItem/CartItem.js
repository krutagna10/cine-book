import { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";
import "./CartItem.css";

function CartItem({ item }) {
  const { onAddItem, onRemoveItem } = useContext(CartContext);

  function handleAddItem() {
    onAddItem({ ...item, quantity: 1 });
  }

  function handleRemoveItem() {
    onRemoveItem(item.id);
  }

  return (
    <li className="cart-item">
      <div>
        <h2>{item.name}</h2>
        <div className="cart-item__summary">
          <span className="cart-item__price">${item.price.toFixed(2)}</span>
          <span className="cart-item--quantity">x {item.quantity}</span>
        </div>
      </div>
      <div className="cart-item__actions">
        <button className="cart-item__button" onClick={handleRemoveItem}>
          −
        </button>
        <button className="cart-item__button" onClick={handleAddItem}>
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
