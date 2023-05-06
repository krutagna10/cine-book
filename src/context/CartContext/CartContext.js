import { createContext } from "react";

const CartContext = createContext({
  items: [],
  onAddItem: (item) => {},
  onRemoveItem: (id) => {},
});

export default CartContext;
