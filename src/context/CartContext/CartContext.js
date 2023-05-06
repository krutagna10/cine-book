import { createContext } from "react";

const CartContext = createContext({
  items: [],
  onAddItem: (item) => {},
  onRemoveItem: (id) => {},
  onResetItems: () => {},
});

export default CartContext;
