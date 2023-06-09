import { useEffect, useReducer } from "react";
import CartContext from "./CartContext.js";

const INITIAL_ITEMS = [];
localStorage.setItem("items", JSON.stringify(INITIAL_ITEMS));

function reducer(items, action) {
  switch (action.type) {
    case "add-item": {
      const hasItem = items.find((item) => {
        return action.item.id === item.id;
      });

      let nextItems;

      if (hasItem) {
        nextItems = items.map((item) => {
          return action.item.id === item.id
            ? { ...item, quantity: action.item.quantity + item.quantity }
            : item;
        });
      } else {
        nextItems = [...items, action.item];
      }

      return nextItems;
    }

    case "remove-item": {
      const nextItems = items
        .map((item) => {
          return action.deleteId === item.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
        .filter((item) => {
          return item.quantity > 0;
        });

      return nextItems;
    }

    case "reset-items": {
      return [];
    }

    default: {
      throw new Error("Invalid action " + action.type);
    }
  }
}

function CardProvider({ children }) {
  const [items, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("items"))
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleAddItem(item) {
    dispatch({ type: "add-item", item: item });
  }

  function handleRemoveItem(deleteId) {
    dispatch({ type: "remove-item", deleteId: deleteId });
  }

  function handleResetItems() {
    dispatch({ type: "reset-items" });
  }

  const cartContext = {
    items: items,
    onAddItem: handleAddItem,
    onRemoveItem: handleRemoveItem,
    onResetItems: handleResetItems,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CardProvider;
